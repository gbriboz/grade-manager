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

    static async getUserById(id: number): Promise<User | null> {
        try{
            return await this.db.user.findUnique({
                where: {id},
            })

        } catch(error) {
            console.error("Error when searching user: ", error)
            throw error
        }
    }

    static async createUser(user: Omit<User, "id">): Promise<User> {
        try{
            return await this.db.user.create({
               data: {
                    name: user.name,
                    email: user.email,
                    password: user.password
               },
            })
        } catch(error) {
            console.error("Error when creating user: ", error)
            throw error
        }
    }

    static async updateUser(user: User): Promise<User> {
        try {
            return await this.db.user.update({
                where: { id: user.id },
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password
                }
            })
        } catch(error) {
            console.error("Error when updating user: ", error)
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