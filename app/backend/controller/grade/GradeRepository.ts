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
            console.error("Error when searching for grades: ", error)
            throw error
        }
    }

    static async getGradeById(id: number): Promise<Grade | null> {
        try{
            return await prisma.grade.findUnique({
                where: { id: id}
            })
        } catch (error) {
            console.error("Error when searching for grade: ", error)
            throw error
        }
    }

    static async createGrade(grade: Omit<Grade, "id">, subjectId: number): Promise<Grade> {
        // quando uma nota é criada, ela tem que ser adicionada à lista de subjects que ela faz parte. Provavelmente isso vai ficar na parte da grade, ver depois
        try {
            return await prisma.grade.create({
                data: {
                    score: grade.score,
                    weight: grade.weight,
                    subjectId: subjectId
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

    static async deleteGrade(grade: Grade): Promise<void>{
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