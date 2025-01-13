import {jwtDecode} from 'jwt-decode'

export const setSession = (token) => {
    console.log('token is..',token)
    if (token) {
      sessionStorage.setItem('jwtToken', token);
      const user = jwtDecode(token);
      console.log('user is...',user);
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('user');
    }
  };
  
export const getSessionUser = () => {
   const user = sessionStorage.getItem('user');
   console.log('get session is..',user);
   return user ? JSON.parse(user) : null;
};

export const getToken = () => {
  return sessionStorage.getItem('jwtToken');
};

export const destroySession = () => {
    console.log('session destroyed')
    sessionStorage.removeItem('jwtToken');
    sessionStorage.removeItem('user');
    return null;
}
  