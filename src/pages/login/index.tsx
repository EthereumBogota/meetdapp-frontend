import { useState } from 'react'

export default function Login() {
	const [email, setEmail] = useState<string>('')

	return (
		<form>
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
