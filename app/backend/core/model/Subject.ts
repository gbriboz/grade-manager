import { Grade } from "./Grade"

export interface Subject {
    id: number
    code: string
    name: string
    userId: number
    grade?: Grade[]
}