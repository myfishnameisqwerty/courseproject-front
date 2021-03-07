import firebase, { auth, db } from "./firebase";
// import  { auth } from "./firebase"
class Auth {
  constructor() {
    this.email = "guest";
  }

  async login(email, pass) {
    let result = [];

    await auth
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        this.onSuccessLogin(result);
      })
      .catch((e) => this.onFailedLogin(result, e));
    return result;
  }
  onFailedLogin(result, e) {
    result.push(false, e.message);
  }

  onSuccessLogin(result) {
    this.email = auth.currentUser.email;

    result.push(true, `Hello ${auth.currentUser.email}`);
  }

  //  googleLogin(){
  //     let result = []
  //     const provider = new firebase.auth.GoogleAuthProvider()
  //     provider.setCustomParameters({prompt: 'select_account'})
  //      auth.signInWithPopup(provider)
  //     .then(() => {
  //       this.onSuccessLogin(result);
  //     }).catch(e => this.onFailedLogin(result, e))
  //   }
  async signup(email, pass, userName, role = "client") {
    let result = [];
    await auth
      .createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        db.ref("users").child(userCredential.user.uid).set(
          {
            id: userCredential.user.uid,
            userName: userName,
            email: email,
            active: true,
            pass: pass,
            role: role
          }
        )
        result.push(
          true,
          `Successfully created account ${auth.currentUser.email}`
        );
      })
      .catch((e) => result.push(false, e.message));
    return result;
  }
  async logout() {
    this.email = "guest";
    await auth.signOut();
  }

  isAuthenticated() {
    if (auth.currentUser) return true;
    else return false;
  }
}

export default new Auth();
