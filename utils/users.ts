import 'server-only'
import { COOKIE_NAME } from './constants'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { UserType, getUserFromToken } from './authTools'

export const getCurrentUser = async (): Promise<UserType> => {
	const token = cookies().get(COOKIE_NAME)
	if (!token) redirect('/signin')
	const user = await getUserFromToken(token)
	if (!user) redirect('/signin')
	return user
}
