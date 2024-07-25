import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    // Perform logout actions here, e.g., clearing session data
    router.push('/');
  }, []);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
}
