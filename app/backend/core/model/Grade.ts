import Subject from "./Subject"

export default interface Grade {
    id: number
    score: number
    weight: number
    subjectId: number
    subject: Subject
}