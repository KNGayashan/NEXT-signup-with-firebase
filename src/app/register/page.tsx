"use client";
import Link from "next/link";
import SubmitButton from "../components/Button";
import InputField from "../components/inputField";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "@/constants/routes";
import { registerValidation } from "@/validationSchema/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = registerValidation();

  const submitForm = async (values: any) => {
    //sconsole.log("Register form values", values);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((response) => {
        alert("user registered successfully");
        reset();
        router.push(LOGIN_ROUTE);
      })
      .catch((e) => {
        console.log("catch ", e.message);
        alert("something went wrong please try again");
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-gray-500 via-gray-400 to-gray-50">
      <div className="w-1/2 rounded-md bg-white/50 shadow-lg bg-white flex justify-between flex-col">
        <div className="h-28 w-full justify-center flex items-center">
          <span className="text-3xl font-mono font-semibold p-3 rounded">
            Welcome to Register
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
            placeholder="Enter Email"
            label="Email"
            name="email"
          />

          <InputField
            register={register}
            error={errors.password}
            type="password"
            placeholder="Enter Password"
            label="Password"
            name="password"
          />

          <InputField
            register={register}
            error={errors.cnfPassword}
            type="password"
            placeholder="Re-enter Password"
            label="Confirm Password"
            name="cnfPassword"
          />

          <SubmitButton label="Submit" />
        </form>

        <div className="h-20 mx-auto">
          <span className="text-sm text-gray-600">
            Already have an account ?{" "}
            <Link href={LOGIN_ROUTE}>
              <span className="text-black font-semibold text-md">
                Login Here
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
