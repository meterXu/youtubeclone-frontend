import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { StyledAuth } from "./Signup";
import useInput from "../hooks/useInput";
import { login } from "../reducers/user";

const Login = ({ signup, loginUser }) => {
  const dispatch = useDispatch();

  const email = useInput("");
  const password = useInput("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.value.trim() || !password.value.trim()) {
      return toast.error("请填完所有表单");
    }

    const payload = {
      email: email.value,
      password: password.value,
    };

    const clearForm = () => {
      email.setValue("");
      password.setValue("");
    };

    dispatch(login({ payload, clearForm }));
  };

  return (
    <StyledAuth>
      <h2>登 录</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="邮箱"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="password"
          placeholder="密码"
          value={password.value}
          onChange={password.onChange}
        />
        <div className="action input-group">
          <span className="pointer" onClick={() => signup()}>
            立即注册
          </span>
          <button>登录</button>
        </div>
      </form>
    </StyledAuth>
  );
};

export default Login;
