import config from "../conf/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    Client = new Client();
    account;
    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectID);
        this.account = new Account(this.Client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {

                return this.LogIn({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }


    async LogIn({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            await this.account.get();
        } catch (error) {
            throw error;
        }

        return null;
    }

    async logOut() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("appwrite logout :: error", error)
        }
    }
}
const authservice = new AuthService();
export default authservice;