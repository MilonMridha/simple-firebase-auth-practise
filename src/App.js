
import './App.css';
import app from './firebase.init';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from 'react';



const auth = getAuth(app);


function App() {

  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.error('error', error);
      })
  }
  const signOutHandleBtn = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setUser({});
      })
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleFacebookSignIn = () => {
    signInWithPopup( auth, facebookProvider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch(error => {
      console.log(error);
    })
  }




  return (
    <div className="App">
      {user.uid ?
        <button onClick={signOutHandleBtn}>SignOut</button>
        :
        <>
          <button onClick={handleGoogleSignIn}>SignIn by Google</button>
          <button onClick={handleGithubSignIn}>SignIn by Github</button>
          <button onClick={handleFacebookSignIn} >SignIn by Facebook</button>
        </>
      }

      <h6>name : {user.displayName}</h6>
      <p>UserId : {user.uid}</p>
      <p>email : {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
