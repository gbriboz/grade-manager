import { prisma } from "@/lib/prisma";
import { Subject } from "../../core/model/Subject";

export default class SubjectRepository {
  static async getAllUserSubjects(userId: number): Promise<Subject[]> {
    try {
      const subjects = await prisma.subject.findMany({
        where: { userId: userId },
      });

      return subjects;
    } catch (error) {
      console.error("Error when searching subjects: ", error);
      throw error;
    }
  }

  static async getSubjectById(id: number): Promise<Subject | null> {
    try {
      return await prisma.subject.findUnique({
        where: { id: id },
      });
    } catch (error) {
      console.error("Error when searching subject: ", error);
      throw error;
    }
  }

  static async createSubject(
    subject: Omit<Subject, "id">,
    userId: number
  ): Promise<Subject> {
    try {
      return await prisma.subject.create({
        data: {
          code: subject.code,
          name: subject.name,
          userId: userId,
        },
      });
    } catch (error) {
      console.error("Error when creating subject: ", error);
      throw error;
    }
  }

  static async updateSubject(subject: Subject): Promise<Subject> {
    try {
      return await prisma.subject.update({
        where: { id: subject.id },
        data: {
          code: subject.code,
          name: subject.name,
        },
      });
    } catch (error) {
      console.error("Error when updating subject: ", error);
      throw error;
    }
  }

  static async deleteSubject(id: number): Promise<void> {
    try {
      await prisma.subject.delete({
        where: { id: id },
      });
    } catch (error) {
      console.error("Error when deleting subject: ", error);
      throw error;
    }
  }

  static async deleteAllSubjectsByUserId(userId: number): Promise<void> {
    try {
      await prisma.subject.deleteMany({
        where: { userId: userId },
      });
    } catch (error) {
      console.error("Error when deleting subjects: ");
      throw error;
    }
  }
}
