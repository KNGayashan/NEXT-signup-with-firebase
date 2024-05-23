import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTER_ROUTE,
} from "@/constants/routes";
import Link from "next/link";

const Header = () => {
  const isLogin = false;
  return (
    <header className="h-20 bg-neutral-300 flex px-10 drop-shadow-[0px_5px_10px_rgba(2,0,0)]">
      <nav className="w-full mx-auto flex justify-between items-center px-2 text-black font-sans text-xl">
        <Link href={HOME_ROUTE}>
          <div>Logo</div>
        </Link>
        <ul className="flex gap-4">
          {!isLogin && (
            <>
              <Link href={LOGIN_ROUTE}>
                <li>Login</li>
              </Link>
              <Link href={REGISTER_ROUTE}>
                <li>Register</li>
              </Link>
            </>
          )}
          {isLogin && (
            <>
              <Link href={PROFILE_ROUTE}>
                <li>Profile</li>
              </Link>
              <Link href={HOME_ROUTE}>
                <li>Logout</li>
              </Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
