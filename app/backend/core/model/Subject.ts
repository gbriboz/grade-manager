import Grade from "./Grade"
import User from "./User"

export default interface Subject {
    id: number
    code: string
    name: string
    userId: number
    user: User
    grade: Grade[]
}