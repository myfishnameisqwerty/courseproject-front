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

  addOrder(resp, customer, address, orderDate, totalSum){
    let allOrders = JSON.parse(localStorage.getItem("homefood-ordersInProcess"));
    const selectedOrdersIndexes = JSON.parse(localStorage.getItem("homefood-selectedOrdersIndexes"));
    let payedOrders = []
    selectedOrdersIndexes.map(i => ( payedOrders.push(allOrders.splice(i,1))));
    localStorage.setItem("homefood-selectedOrdersIndexes", JSON.stringify([]))
    localStorage.setItem("homefood-selectedTotal", 0)
    localStorage.setItem("homefood-ordersInProcess", JSON.stringify(allOrders))
    
    payedOrders.forEach(el => {
      const order = el[0].orderInfo;
    
      db.ref("orders").child(order.orderId).set(
        {
          id: order.orderId,
          orderInfo : {productId: el[0].fullItemInfo.id, quantity: order.quantity, variation: order.variation, additives: order.additives, notations: order.notations},
          user:this.isAuthenticated()?auth.currentUser.uid:"anonymous",
          orderDate:JSON.stringify(orderDate),
          customer,
          address:address?address:"pick up",
          totalSum,
          paymentComfirmation: resp,
          status: "Unconfirmed"
        }
  
       )
    });
    
  }
}

export default new Auth();
