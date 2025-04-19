import { Grade } from "../../core/model/Grade";
import { prisma } from "@/lib/prisma";

export default class GradeRepository {

    static async getAllGradesBySubjectId(subjectId: number): Promise<Grade[]> {
        try {
            const grades = await prisma.grade.findMany({
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