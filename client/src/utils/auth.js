import decode from 'jwt-decode';

class AuthService {
    getToken() {
        return localStorage.getItem('id_token');
    }
    
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.reload();

        // window.location.assign('/');
    }
    
    logout() {
        localStorage.removeItem('id_token');
        window.location.reload();
        // window.location.assign('/');
    }

    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        // if token exists and it's not expired return true, otherwise false
        return token && !this.isTokenExpired(token) ? true : false;
    }

    isTokenExpired(token) {
        // Decode the token to get its expiration time that was set by the server
        const decoded = decode(token);
        // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
        if (decoded.exp < Date.now() / 1000) {
          localStorage.removeItem('id_token');
          return true;
        }
        // If token hasn't passed its expiration time, return `false`
        return false;
    }
}

export default new AuthService();