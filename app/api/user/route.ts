import { NextResponse } from 'next/server'
import UserRepository from '@/app/backend/controller/user/UserRepository'

export async function POST(req: Request) {
  const body = await req.json()

  try {

    const user = await UserRepository.createUser(body)

    return NextResponse.json(user, { status: 201 })

  } catch(error){
    console.error(error)
  }
}

export async function GET() {
  const users = await UserRepository.getAllUsers()
  return NextResponse.json(users)
}
