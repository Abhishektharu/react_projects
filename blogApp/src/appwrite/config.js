import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.databases = new Databases(client);
    this.storage = new Storage(this.client);
  }

  //write functions
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    //database id
    try {
      return this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        {
          title,
          slug,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite Create post Error :: ", error);
    }
  }

  async updatePost({ slug, title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        //things to be updated
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
       await this.databases.deleteDocument(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        slug
      );
    } catch (error) {
        console.log("Appwrite service Error :: ", error);
    }
  }

  async getPost(slug){
    try {
         return await this.databases.getDocument(
            conf.appwriteCollectionId,
            conf.appwriteDatabaseId,
            slug,
        )

    } catch (error) {
        console.log("Error Appwrite getPost :: ", error);
    }
  }

  //returns the posts which are active in status
  async getPosts(query = Query.equals("index_status", ["active"])){
    try {
      return await this.databases.getDocument(
        conf.appwriteCollectionId,
        conf.appwriteDatabaseId,
        query,
      )
    } catch (error) {
      console.log("Error Appwrite service :: ", error);
    }
  }

  async uploadFile(file){
    try {
      return await this.storage.createFile(
        ID.unique(),
        conf.appwriteBucketId,
        file,
      )
    } catch (error) {
      console.log("Appwrite service error :: " , error);
    }
  }

  async deleteFile(fileId){
    try {
      await this.storage.deleteFile(
        conf.appwriteBucketId,
        fileId,
      )
    } catch (error) {
      console.log("Appwrite service Error :: " , error);

    }
  }

  async getPreview(fileId){
    try {
      await this.storage.getFilePreview(
        //bucketId
        conf.appwriteBucketId,
        fileId,
      )
    } catch (error) {
      
    }
  }
}

const service = new Service();
export default service