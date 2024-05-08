import config from '../config/config';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        try {
            this.client.setEndpoint(config.appwriteUrl).setProject(config.projectID);

            // Assigning the database to the client
            this.databases = new Databases(this.client);

            // Assigning storage to the client
            this.bucket = new Storage(this.client);
        } catch (error) {
            throw error
        }
    }

    // Method to create a post
    async createPost({ title, slug, content, featuredImage, status, userID }) {
        // Slug is nothing but the unique content that will be the url in our case. Ex - best-smartphone-2024.com - "best-smartphone-2024" is slug
        try {
            // creating a post using a "createDocument"
            return await this.databases.createDocument(config.databaseID, config.collectionID, slug, {
                title,
                content,
                featuredImage,
                status,
                userID
            })
        } catch (error) {
            throw error
        }
    }

    // Method to update a post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(config.databaseID, config.collectionID, slug, {
                title,
                content,
                featuredImage,
                status
            })
        } catch (error) {
            throw error;
        }

    }

    // Method to delete a post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(config.databaseID, config.collectionID, slug);
            return true;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    // Method to get the single post
    async getPost(slug) {
        try {
            return await this.databases.getDocument(config.databaseID, config.collectionID, slug,)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    // Method to get the all posts
    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(config.databaseID, config.collectionID, queries)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    // File uploading methods
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(config.bucketID, ID.unique(), file)
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async deleteFile(fileID) {
        try {
            await this.bucket.deleteFile(config.bucketID, fileID);
        } catch (error) {
            throw error;
        }
    }

    // No need to create a async method because the getFilePreview method does not return a promise
    getFilePreview(fileID) {
        try {
            return this.bucket.getFilePreview(config.bucketID, fileID)
        } catch (error) {
            throw error;
        }
    }

    // To download the file
    getFileDownloaded(fileID) {
        try {
            return this.bucket.getFileDownload(config.bucketID, fileID);
        } catch (error) {
            throw error;
        }
    }
}


const service = new Service();
export default service;