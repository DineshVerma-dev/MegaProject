import config from "../conf/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service {
    Client = new Client();
    databases;
    bucket;
    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID)
        this.databases = new Databases(this.Client)
        this.bucket = new Storage(this.Client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            await this.databases.createDocument(
                config.appwriteDatabaseID,
                config.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("error in create post :: ", error)
        }
    }
}

const service = new Service();

export default service