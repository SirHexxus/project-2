
 class Auth{
    authenticate() {
        this.authenticated = false
    }

    signedIn = (cb) =>{
        this.authenticated = true;
        console.log(cb);
        console.log('Sign in Authenicated')
        
    }

    signup(cb) {
        this.authenticated = false;
        console.log('Account Created. Please sign in!')
        console.log(cb)
    }

    logout(cb) {
        this.authenticated = false;
        console.log('Logged Out. Authenication set to default')
        console.log(cb)
    }

    isAuthenticated(){
        return this.authenticated;
    }
 }

 export default new Auth()