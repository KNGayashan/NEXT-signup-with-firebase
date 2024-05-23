import SubmitButton from "../components/Button";
import InputField from "../components/inputField";

const Profile = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-gray-500 via-gray-400 to-gray-50">
      <div className="w-1/2 rounded-md bg-white/50 shadow-lg bg-white flex justify-between flex-col">
        <div className="h-28 w-full justify-center flex items-center">
          <span className="text-3xl font-mono font-semibold p-3 rounded">
            Welcome back User Name
          </span>
        </div>

        <form className="h-full w-1/2 mx-auto">
          <InputField
            type="text"
            placeholder="Full Name"
            label="Full Name"
            name="name"
          />

          <InputField
            type="email"
            placeholder="email"
            label="Email"
            name="email"
          />

          <InputField
            type="password"
            placeholder="Password"
            label="Password"
            name="password"
          />

          <InputField
            type="password"
            placeholder="Re-enter Password"
            label="Confirm Password"
            name="password"
          />

          <SubmitButton label="Update" />
        </form>
      </div>
    </div>
  );
};

export default Profile;
