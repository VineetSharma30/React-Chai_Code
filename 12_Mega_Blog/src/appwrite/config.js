import conf from "../conf/conf";
import { ID, Databases, Storage, Query, Client, Account, Permission, Role } from "appwrite"


export  class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.ProjectId);
        this.account = new Account(this.client); 
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);

    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId 
                },
            );
        }catch(error){
            console.log("Appwrite  service :: createPost :: error ",error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug,
                {
                    title, 
                    content, 
                    featuredImage, 
                    status
                },
            );
        } catch (error) {
            console.log("Appwrite  service :: updatePost :: error ",error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("Appwrite  service :: deletePost :: error ",error);
            return false; 
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.DatabaseId,
                conf.CollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite  service :: getPost :: error ",error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status","active")] ){
        try {
            return await this.databases.listDocuments(
                conf.DatabaseId,
                conf.CollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite  service :: getPosts :: error ",error);
            return false;
        }
    }

    // file upload services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.BucketId,
                ID.unique(),
                file,
                [Permission.read(Role.any())]
            )
        } catch (error) {
            console.log("Appwrite  service :: uploadFile :: error ",error);
            return false;
        }
    }

    async deleteFile(fileID){
        try {
            await this.bucket.deleteFile(
                conf.BucketId,
                fileID
            )
        } catch (error) {
            console.log("Appwrite  service :: deleteFile :: error ",error);       
            return false;     
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFileView(
            conf.BucketId,
            fileID
        )
    }
}

const service = new Service()
export default service