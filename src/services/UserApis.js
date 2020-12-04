import ApiRequests from './ApiRequests';
import dotenv from 'dotenv';
dotenv.config();

const { get, post } = new ApiRequests();

class UserApis {
  registerNewUser = (data) => {
    const url = process.env.REACT_APP_BOOKSTORE_API_URL + 'registration';
    return post(url, data);
  };

  logIn = (data) => {
    const url = process.env.REACT_APP_BOOKSTORE_API_URL + 'login';
    return post(url, data);
  };

  homepage = () => {
    const url = process.env.REACT_APP_BOOKSTORE_API_URL;
    return get(url);
  };
}

export default UserApis;
