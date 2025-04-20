import { NextResponse } from 'next/server'
import UserRepository from '@/app/backend/controller/user/UserRepository'
import { signupSchema } from '@/app/backend/schema/signup'

export async function POST(req: Request) {
    const body = await req.json()

    try {
        const saveData = signupSchema.safeParse(body)
        if (!saveData.success) {
            return NextResponse.json({ error: saveData.error.flatten().fieldErrors })
        }
        
        const hasEmail = await UserRepository.getUserByEmail(body.email)
        if (hasEmail) {
            return NextResponse.json({ message: "Email already registered." }, { status: 409 })
        }

        const user = await UserRepository.createUser(body)

        return NextResponse.json(user, { status: 201 })

    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { message: "Error when creating users." },
            { status: 500 }
        )
    }
}

export async function GET() {
    try{
        const users = await UserRepository.getAllUsers()
        return NextResponse.json(users, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { message: "Errer when searching users."},
            { status: 500}
        )
    }
}