import { FormEvent, useContext, useEffect, useState } from 'react'
import { UserContext, UserContextType } from '@/lib/UserContext'
import { useRouter } from 'next/router';
export default function Login() {
	const {user, setUser} = useContext(UserContext) as UserContextType
  const [email, setEmail] = useState<string>('');
  const router = useRouter();
  useEffect(() => {
    // Check for an issuer on our user object. If it exists, route them to the dashboard.
    user?.issuer && router.push('/dashboard');
  }, [user]);
  const handleLogin = async (e: FormEvent) => {
    
  };
	const logout = () => {
		// We'll fill this out later
	}

	return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
