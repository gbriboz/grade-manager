import { User } from "../../core/model/User";
import { prisma } from "@/lib/prisma";

export default class UserRepository {

    static async getAllUsers(): Promise<User[]> {
        try {
            return await prisma.user.findMany()
        } catch(error) {
            console.error("Error when searching users: ", error)
            throw error
        }
    }

    static async getUserById(id: number): Promise<User | null> {
        try{
            return await prisma.user.findUnique({
                where: {id},
            })

        } catch(error) {
            console.error("Error when searching user: ", error)
            throw error
        }
    }

    static async createUser(user: Omit<User, "id">): Promise<User> {
        try{
            return await prisma.user.create({
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
            return await prisma.user.update({
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
            await prisma.user.delete({
                where: { id },
            })
        } catch(error) {
            console.error("Error when delete user: ", error)
            throw error
        }
    }
}