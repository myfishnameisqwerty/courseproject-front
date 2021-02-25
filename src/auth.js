import  firebase, { auth } from "./firebase"
// import  { auth } from "./firebase"
class Auth {
    constructor() {
      this.authenticated = false;
      this.email = 'guest'
    }
  
    async login(email, pass) {      
      let result = []
      
      await auth.signInWithEmailAndPassword(email, pass)
        .then(()=> {
          this.onSuccessLogin(result);
        })
        .catch(e => this.onFailedLogin(result, e) )
        return result
        
    }
  onFailedLogin(result, e) {
    result.push(false, e.message);
  }

  onSuccessLogin(result) {
    this.email = auth.currentUser.email;
    this.authenticated = true;
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
    async signup(email, pass){
      let result = []  
      await auth.createUserWithEmailAndPassword(email, pass)
      .then(()=>{
        result.push(true, `Successfully created account ${auth.currentUser.email}`)
      })
        .catch(e => result.push(false, e.message))
        return result

    }
    async logout() {
      this.authenticated = false;
      this.email = 'guest'
      await auth.signOut()
    }
  
    isAuthenticated() {
      return this.authenticated;
    }
  }
  
  export default new Auth();
  