import conf from "../conf/conf";
import {client, ID, Databases, Storage, Query, Client, Account } from "appwrite"

export class Services{
    client = new Client();
    databases = new Databases();
    bucket ;
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
                }
            )
        }catch(error){
            console.log("Appwrite  service :: createPost :: error ",error)
        }
    }
}