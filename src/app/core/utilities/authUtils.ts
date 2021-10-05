// import firebase from 'firebase/compat/app';
import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class FirebaseAuthBackend {
  constructor(firebaseConfig: any) {
    if (firebaseConfig) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      // firebase.auth().signInAnonymously
      firebase.auth().onAuthStateChanged((user: any) => {
        if (user) {
          sessionStorage.setItem("authUser", JSON.stringify(user));
        } else {
          sessionStorage.removeItem("authUser");
        }
      });
    }
  }

  /**
   * Registers the user with given details
   */
  registerUser = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            var user: any = firebase.auth().currentUser;
            resolve(user);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  /**
   * Login user with given details
   */
  loginUser = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          (user: any) => {
            // eslint-disable-next-line no-redeclare
            var user: any = firebase.auth().currentUser;
            resolve(user);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  facebookLogin = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    //console.log(provider);

    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          (result: any) => {
            console.log(result);
            // eslint-disable-next-line no-redeclare
            var user: any = firebase.auth().currentUser;
            resolve(user);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });
  };

  googleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    //console.log(provider);
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    // firebase.auth().languageCode = 'es';
    // provider.setCustomParameters({
    //     'login_hint': 'user@example.com'
    //   });

    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(
          (result: any) => {
            // eslint-disable-next-line no-redeclare
            var user: any = firebase.auth().currentUser;
            resolve(user);
          },
          (error: any) => {
            reject(this._handleError(error));
          }
        );
    });

    // firebase.auth().signInWithPopup(provider).then((result: any) => {
    //     console.log(result);
    //     /** @type {firebase.auth.OAuthCredential} */
    //     var credential = result.credential;

    //     // This gives you a Google Access Token. You can use it to access the Google API.
    //     var token = credential.accessToken;
    //     // The signed-in user info.
    //     var user = result.user;
    //     // ...
    //   })
    //   .catch((error) => {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // The email of the user's account used.
    //     var email = error.email;
    //     // The firebase.auth.AuthCredential type that was used.
    //     var credential = error.credential;
    //     // ...
    //   });
  };

  /**
   * forget Password user with given details
   */
  forgetPassword = (email: string) => {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: max-line-length
      firebase
        .auth()
        .sendPasswordResetEmail(email, {
          url:
            window.location.protocol + "//" + window.location.host + "/login",
        })
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  /**
   * Logout the user
   */
  logout = () => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          resolve(true);
        })
        .catch((error: any) => {
          reject(this._handleError(error));
        });
    });
  };

  setLoggeedInUser = (user: any) => {
    sessionStorage.setItem("authUser", JSON.stringify(user));
  };

  /**
   * Returns the authenticated user
   */
  getAuthenticatedUser = () => {
    if (!sessionStorage.getItem("authUser")) {
      return null;
    }
    return JSON.parse(sessionStorage.getItem("authUser") ?? "");
  };

  /**
   * Handle the error
   * @param {*} error
   */
  _handleError(error: any) {
    // tslint:disable-next-line: prefer-const
    var errorMessage = error.message;
    return errorMessage;
  }
}

// tslint:disable-next-line: variable-name
let _fireBaseBackend: any = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config: any) => {
  if (!_fireBaseBackend) {
    _fireBaseBackend = new FirebaseAuthBackend(config);
  }
  return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
  return _fireBaseBackend;
};

export { initFirebaseBackend, getFirebaseBackend };
