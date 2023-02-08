import Link from "next/link";
import * as utils from "../../utils/utils";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
  const { pathname } = useRouter();

  useEffect(() => {
    utils.addScrollEvent();
    return () => {};
  }, []);
  return (
    <header
      className={`w-full h-16 flex fixed z-10 justify-center items-center border-none ${
        pathname !== "/" ? "bg-gradient-to-r from-purple-600 to-purple-400" : ""
      } transition-all ease-out duration-200 delay-75`}
    >
      <ul className="w-full h-full space-x-10 flex flex-row px-10 text-purple-200 text-xl font-semibold">
        <li className="flex justify-center items-center ">
          <Link href="/">Home</Link>
        </li>
        <li className="flex justify-center items-center ">
          <Link href="/products">Products</Link>
        </li>
        <li className="flex justify-center items-center ">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
