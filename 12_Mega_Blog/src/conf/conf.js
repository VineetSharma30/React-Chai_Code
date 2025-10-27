const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    ProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    DatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    CollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    BucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
// there was a name issue with the import.meta.env.VITE_APPWRITE_URL, it was later fixed in debugging video

export default conf