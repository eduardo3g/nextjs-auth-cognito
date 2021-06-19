import { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import '../configureAmplify';

function Profile() {
  useEffect(() => {
    checkUser();

    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser();
        console.log({ user });
    }
  }, []);

  return (
    <div>
      <button
        onClick={() => Auth.federatedSignIn({ provider: 'Google' })}
      >
        Sign in with Google
      </button>
      <button
        onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}
      >
        Sign in with Facebook
      </button>

      <button
        onClick={() => Auth.signOut()}
      >Sign out</button>
    </div>
  );
}

export default Profile;