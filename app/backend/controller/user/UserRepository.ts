import { User } from "../../core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
    private static db = new PrismaClient

    static async getAllUsers(): Promise<User[]> {
        try {
            return await this.db.user.findMany()
        } catch(error) {
            console.error("Error when searching users: ", error)
            throw error
        }
    }

    static async getUserById(id: number): Promise<User> {
        try{
            const user = await this.db.user.findUnique({
                where: {id},
            })
    
            return user as User
        } catch(error) {
            console.error("Error when searching user: ", error)
            throw error
        }
    }

    static async saveUser(user: User): Promise<User> {
        try{
            return await this.db.user.upsert({
                where: {id: user.id},
                update: user,
                create: user
            })
        } catch(error) {
            console.error("Error when save user: ", error)
            throw error
        }
    }

    static async deleteUser(id: number): Promise<void> {
        try {
            await this.db.user.delete({
                where: { id },
            })
        } catch(error) {
            console.error("Error when delete user: ", error)
            throw error
        }
    }
}