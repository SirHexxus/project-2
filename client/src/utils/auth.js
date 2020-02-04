class Auth {
    state = {
        authenticated : false
    }
    toggleSign = () =>{
        this.setState({ authenticated: !this.state.authenticated });
        console.log(this.state);
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
 
 export default new Auth();