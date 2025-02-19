/*
  Warnings:

  - You are about to drop the column `grade` on the `Grade` table. All the data in the column will be lost.
  - Added the required column `score` to the `Grade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grade" DROP COLUMN "grade",
ADD COLUMN     "score" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;
