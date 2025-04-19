import { Subject } from "./Subject"

export interface Grade {
    id: number
    score: number
    weight: number
    subjectId: number
    subject?: Subject[]
}