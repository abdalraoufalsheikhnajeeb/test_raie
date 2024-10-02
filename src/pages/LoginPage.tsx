import LoginForm from "../features/auth/LoginForm";
import loginImage from "../assets/images/login.jpg";

const LoginPage = () => {
  return (
    <div className="flex items-center max-md:flex-col-reverse">
      <img src={loginImage} alt="" className="md:w-1/2 h-[100vh] max-md:fixed w-full object-cover" />
      <div className="min-h-screen flex items-center justify-center flex-col w-[70%] max-md:w-full p-4 z-10 max-md:bg-white/70">
        <div className="text-center mb-8">
          <h1 className="uppercase tracking-[4px] p-2 text-blue-500 text-4xl">
            domecare
          </h1>
          <p className="text-Secondary text-lg">
            Welcome back! Please login to your account.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
