import decode from 'jwt-decode';

class AuthService {
    getToken() {
        localStorage.getItem('id_token');
    }
    
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        const token = this.getToken();
        return token && !this.isTokenExpired(token) ? true : false;
    }
}