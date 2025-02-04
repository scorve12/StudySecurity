import React, { useState, useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthService from "../../components/auth";

const Login: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['jwt', 'refreshToken']);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      // Form validation logic can be added here

      AuthService.login(username, password).then(
        (response) => {
          setCookie('jwt', response.accessToken, { path: '/', maxAge: 3600 });
          setCookie('refreshToken', response.refreshToken, { path: '/', maxAge: 86400  });
          
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          console.error(error);
        }
      );
    }
  };

  return (
    <form onSubmit={handleLogin} ref={form}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
