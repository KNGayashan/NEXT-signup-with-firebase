"use client";
import Link from "next/link";
import SubmitButton from "../components/Button";
import InputField from "../components/inputField";
import { REGISTER_ROUTE } from "@/constants/routes";
import { auth } from "@/services/firebase";
import { loginValidation } from "@/validationSchema/auth";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = loginValidation();

  const submitForm = (values: object) => {
    console.log("form values", values);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-gray-500 via-gray-400 to-gray-50">
      <div className="w-1/2 rounded-md bg-white/50 shadow-lg bg-white flex justify-between flex-col">
        <div className="h-28 w-full justify-center flex items-center">
          <span className="text-3xl font-mono font-semibold p-3 rounded">
            Welcome to Signin
          </span>
        </div>

        <form
          onSubmit={handleSubmit(submitForm)}
          className="h-full w-1/2 mx-auto"
        >
          <InputField
            register={register}
            error={errors.email}
            type="text"
            placeholder="Email"
            label="Email"
            name="email"
          />

          <InputField
            register={register}
            error={errors.password}
            type="password"
            placeholder="Password"
            label="Password"
            name="password"
          />

          <SubmitButton label="Submit" />
        </form>

        <div className="h-20 mx-auto">
          <span className="text-sm text-gray-600">
            Don't have an account ?{" "}
            <Link href={REGISTER_ROUTE}>
              <span className="text-black font-semibold text-md">
                Register Here
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
