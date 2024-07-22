import axios from 'axios';

const AuthService = {
  login: async (username:string, password:string) => {
    try {
      const response = await axios.post('www.sprinjh.kr/token', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default AuthService;