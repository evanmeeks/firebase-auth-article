import React from "react";

// Firebase.
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// Get the Firebase config from the auto generated file.
const firebaseConfig = require("../firebase-config.json").result.sdkConfig;

// Instantiate a Firebase app.
const firebaseApp = firebase.initializeApp(firebaseConfig);

/**
 * The Splash Page containing the login UI.
 */
class GitHubCred extends React.Component {
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  state = {
    isSignedIn: undefined,
  };

  /**
   * @inheritDoc
   */
  componentDidMount() {
    this.unregisterAuthObserver = firebaseApp
      .auth()
      .onAuthStateChanged((user) => {
        this.setState({ isSignedIn: !!user });
      });
  }

  /**
   * @inheritDoc
   */
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  /**
   * @inheritDoc
   */
  render() {
    return (
      <div className={"styles.container"}>
        <div className={"styles.logo"}>
          <i className={"styles.logoIcon" + " material-icons"}>Authorized</i>
        </div>
      </div>
    );
  }
}
export default GitHubCred;
// Load the app in the browser.
