import { Grade } from "../../core/model/Grade";
import { prisma } from "@/lib/prisma";
import { Subject } from "../../core/model/Subject";

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

    static async createGrade(grade: Omit<Grade, "id">, subject: Subject): Promise<Grade> {
        try {
            return await prisma.grade.create({
                data: {
                    score: grade.score,
                    weight: grade.weight,
                    subjectId: subject.id
                },
            })
        } catch (error) {
            console.error("Error when creating Grade: ", error)
            throw error
        }
    }

    static async updateGrade(grade: Grade): Promise<Grade> {
        try{
            return await prisma.grade.update({
                where: { id: grade.id },
                data: {
                    score: grade.score,
                    weight: grade.weight,
                }
            })
        } catch (error) {
            console.error("Error when updating grade: ", error)
            throw error
        }
    }

    static async deleteGrade(grade: Grade) {
        try {
            await prisma.grade.delete({
                where: { id: grade.id}
            })
        } catch (error) {
            console.error("Error when deleting grade: ", error)
            throw error
        }
    }
}