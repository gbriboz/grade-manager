import { Grade } from "../../core/model/Grade";
import { PrismaClient } from "@prisma/client";

export default class GradeRepository {
    private static db = new PrismaClient

    static async getAllGradesBySubjectId(subjectId: number): Promise<Grade[]> {
        try {
            const grades = await this.db.grade.findMany({
                where: {
                    subjectId: subjectId
                }
            })
            return grades
        } catch (error) {
            console.error("Error when searching for subjects: ", error)
            throw error
        }


    }
}