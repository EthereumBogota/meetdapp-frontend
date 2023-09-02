import { FormEvent, useContext, useEffect, useState } from 'react'
import { UserContext, UserContextType } from '@/lib/UserContext'
import { useRouter } from 'next/router';
import { magic } from '@/lib/magic';
export default function Login() {
	const {user, setUser} = useContext(UserContext) as UserContextType
  const [email, setEmail] = useState<string>('');
  const router = useRouter();
  useEffect(() => {
    // Check for an issuer on our user object. If it exists, route them to the dashboard.
    user?.issuer && router.push('/dashboard');
  }, [user]);
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    console.log('entering');
    
    // Log in using our email with Magic and store the returned DID token in a variable
    try {
      console.log('1');

      const didToken : string = await magic.auth.loginWithMagicLink({
        email,
      });
      console.log('2');

      // Send this token to our validation endpoint
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${didToken}`,
        },
      });

      // If successful, update our user state with their metadata and route to the dashboard
      if (res.ok) {
        const userMetadata = await magic.user.getMetadata();
        setUser(userMetadata);
        router.push('/dashboard');
      }
    } catch (error) {
      console.log('error is ');

      console.error(error);

    }
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
      <button type="submit">Send Magic Link</button>
    </form>
  );
}
