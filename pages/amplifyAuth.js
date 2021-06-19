import { withAuthenticator } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import '../configureAmplify';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(async () => {
    await checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    } catch (err) {
      setUser(null);
    }
  }

  if (!user) return null;

  return (
    <div>
      <p>Welcome, {user.attributes.email}</p>
    </div>
  );
}

export default withAuthenticator(Profile);
