import { NextResponse } from 'next/server'
import UserRepository from '@/app/backend/controller/user/UserRepository'
import { signupSchema } from '@/app/backend/schema/signup'

export async function POST(req: Request) {
  const body = await req.json()

  const saveData = signupSchema.safeParse(body)
  if(!saveData.success){
    return NextResponse.json({ error: saveData.error.flatten().fieldErrors })
  }

  try {

    const hasEmail = await UserRepository.getUserByEmail(body.email)

    if (hasEmail) {
      return NextResponse.json({ message: "Email já cadastrado!" }, { status: 409 })
    }

    const user = await UserRepository.createUser(body)

    return NextResponse.json(user, { status: 201 })

  } catch(error){
    console.error(error)
    return NextResponse.json(
      { message: "Erro ao criar usuário." },
      { status: 500 }
    )
  }
}

export async function GET() {
  const users = await UserRepository.getAllUsers()
  return NextResponse.json(users)
}