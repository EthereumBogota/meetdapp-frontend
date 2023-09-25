import { FormEvent, useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export default function Login() {
	const [email, setEmail] = useState<string>('')
	const router = useRouter()
	const handleLogin = async (e: FormEvent) => {}
	const logout = () => {
		// We'll fill this out later
	}

	return (
		<form onSubmit={handleLogin}>
			<label htmlFor='email'>Email</label>
			<input
				name='email'
				type='email'
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<button type='submit'>Login</button>
		</form>
	)
}
