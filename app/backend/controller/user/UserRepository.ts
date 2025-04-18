import { User } from "../../core/model/User";
import { PrismaClient } from "@prisma/client";

export default class UserRepository {
    private static db = new PrismaClient

    static async getAllUsers(): Promise<User[]> {
        return await this.db.user.findMany()
    }

    static async getUserById(id: number): Promise<User> {
        const user = await this.db.user.findUnique({
            where: {id},
        })

        return user as User
    }

    static async saveUser(user: User): Promise<User> {
        return await this.db.user.upsert({
            where: {id: user.id},
            update: user,
            create: user
        })
    }

    static async deleteUser(id: number): Promise<void> {
        await this.db.user.delete({
            where: { id },
        })
    }
}