import {jwtDecode} from 'jwt-decode'

export const setSession = (token) => {
    if (token) {
      sessionStorage.setItem('jwtToken', token);
      const user = jwtDecode(token);
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('jwtToken');
      sessionStorage.removeItem('user');
    }
  };
  
export const getSessionUser = () => {
   const user = sessionStorage.getItem('user');
   const userInfo = JSON.parse(user);
   return user ? userInfo : null;
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
  