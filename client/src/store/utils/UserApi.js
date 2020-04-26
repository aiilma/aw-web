const Auth = {
    isAuthenticated: localStorage.getItem("loggedIn")
        ? localStorage.getItem("loggedIn")
        : false,

    authenticate(cb = () => {}) {
        localStorage.setItem('loggedIn', true)
        Auth.isAuthenticated = true

        cb()
    },

    logout(cb = () => {}) {
        localStorage.removeItem('loggedIn')
        Auth.isAuthenticated = false;

        cb()
    }
};

export default Auth;