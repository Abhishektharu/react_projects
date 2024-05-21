// this file will contain all the methods to appwrite services
// login, signup , userlogin,

//import conf file to access appwrite variables;
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  //create constructor to accept endpoint and id;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl) // Your API Endpoint
      .setProject(conf.appwriteProjectId); // Your project ID

    this.account = new Account(client);
  }

  //object will be passed in this function
  async createAccount({ email, password, name }) {
    try {
      const createAccount = await this.account.create(ID.unique(), email, password, name);

      if(createAccount){
        //call login method
        return this.login({email, password});
      }
      else{
        return null;
      }

    } catch (error) {
      throw error;
    }
  }

  async login({email, password}){
    try {
        return await this.account.createEmailSession(email, password);
    } catch (error) {
        
    }
  }

  async getUserAccout(){
    try {
        return this.account.get();
    } catch (error) {
        console.log("Appwrite Error :: " + error);
    }

    return null;

  }

  async logout(){
    try {
         await this.account.deleteSessions();
    } catch (error) {
        console.log(`Appwrite Logout error :: ${error}`);
    }
  }
}

const authService = new AuthService();
export default authService;
