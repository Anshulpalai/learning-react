import config from "../config/config";
import { Client, Account, ID } from "appwrite";

// ###### Below code can be used but to write better code or production ready code go the next code ######
// const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject('<PROJECT_ID>');               // Your project ID

// const account = new Account(client);

// const promise = account.create('[USER_ID]', 'email@example.com', '');

// promise.then(function (response) {
//     console.log(response); // Success
// }, function (error) {
//     console.log(error); // Failure
// });


// Better code is to create a class and write all the methods into that class and export the object of that class(why? because if we directly export the class then the register have to create a new object of that class then only it can access the methods)

class AuthService {

    client = new Client()
    // .setEndpoint(config.appwriteUrl)
    // .setProject(config.projectID);
    // Not writing it directly because I want when the object is created for the particular it should be called right then, so for that purpose we will be writing the above stuff into the constructor.

    // Created a account variable so that we can call the class Account after assiging the client into the constructor only.
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.projectID);

        this.account = new Account(this.client);
    }

    // Creating account or sign up
    async createAccount({ email, pass, name }) {
        try {
            const accountCreation = await this.account.create(ID.unique(), email, pass, name);
            if (accountCreation) {
                // Here we want another method where if a user have an account created will be directly logged in or else the account will be created in the else part

                return this.login({email, pass})
            }
            else {
                return accountCreation
            }
        }
        catch (error) {
            throw error;
        }
    }

    // Login
    async login({email, password}){
        try{
            return await this.account.createEmailSession(email, password);
        }
        catch(error){
            throw error;
        }
    }

    // Verification
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions('current');
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;