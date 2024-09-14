import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm();
  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    try {
      const userInfo = {
        email: data.email,
        name: data.name,
        amount: data.amount,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.token);
      dispatch(setUser({ user: user, token: res.token }));
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in.",
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password. Please try again.",
      });
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md mx-auto p-4 shadow-md rounded-md border border-white"
      >
        <h1 className="text-2xl my-10 uppercase">Please login here...</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email:
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
            placeholder="enter your email..."
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            required
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 bg-white"
            placeholder="enter your password..."
          />
        </div>
        <Button
          htmlType="submit"
          className="w-full bg-teal-500 btn font-extrabold hover:bg-red-400 text-white text-lg"
        >
          Submit
        </Button>
        <hr className="my-2" />
        <p className="text-center font-extrabold">or</p>
        <h1 className="text-sm italic text-center mt-2">
          if you don't have an account please{" "}
          <Link
            to="/register"
            className="text-red-500 underline font-extrabold hover:text-teal-500"
          >
            register
          </Link>{" "}
          now
        </h1>
      </form>
    </div>
  );
};

export default Login;
