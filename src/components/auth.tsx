import axios from 'axios';

const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    }
  } catch (error) {
    console.error("Login error", error);
    throw error; // 에러를 다시 던져 호출자가 처리할 수 있도록 합니다.
  }
};

const logout = (): void => {
  localStorage.removeItem("user");
};

export default {
  login,
  logout,
};