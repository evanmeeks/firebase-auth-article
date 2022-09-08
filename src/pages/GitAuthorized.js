// import React from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
// // Styles
// // import styles from "./app.css"; // This uses CSS modules.
// import "../firebaseui-styling.global.css"; // Import globally.

// // Get the Firebase config from the auto generated file.
// const firebaseConfig = require("../firebase-config.json").result.sdkConfig;

// // Instantiate a Firebase app.

// function GitAuthorized() {
//   const [isSignedIn, setIsSignedIn] = React.useState(false); // Local signed-in state.
//   const uiConfig = {
//     signInFlow: "popup",
//     signInSuccessUrl: "/git-cred-authorize",
//     signInOptions: [auth.GithubAuthProvider.PROVIDER_ID],
//     callbacks: {
//       signInSuccessWithAuthResult: () => false,
//     },
//   };
//   // Listen to the Firebase Auth state and set the local state.
//   React.useEffect(() => {
//     const unregisterAuthObserver = firebase
//       .auth()
//       .onAuthStateChanged((user) => {
//         setIsSignedIn(!!user);
//       });
//     return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
//   }, []);

//   if (!isSignedIn) {
//     return (
//       <div>
//         <h1>My App</h1>
//         <p>Please sign-in:</p>
//         <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
//       </div>
//     );
//   }
//   return (
//     <div>
//       <h1>My App</h1>
//       <p>Welcome {auth.currentUser.displayName}! You are now signed-in!</p>
//       <a onClick={() => auth.signOut()}>Sign-out</a>
//     </div>
//   );
// }

// export default GitAuthorized;
