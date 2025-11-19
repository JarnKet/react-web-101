import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const ADMIN = {
    username: "admin",
    password: "admin123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = e.target;
    if (
      username.value === ADMIN.username &&
      password.value === ADMIN.password
    ) {
      // Save auth data
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", username.value);
      alert("Login Successful!");
      navigate("/private/home");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-page">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" name="username" required />
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
