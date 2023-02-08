import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="before:block before:absolute before:h-10 before:w-full before:-inset-y-2.5 before:-skew-y-1 
        before:bg-purple-900 relative inline-block overflow-x-clip"
    >
      <div
        className="bg-gradient-to-r from-purple-500 to-purple-500 flex flex-row h-56 p-5 justify-around 
      items-center text-purple-200 relative overflow-clip-x"
      >
        <div className="w-1/4 h-full flex justify-center items-center text-center ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            dolore. Numquam rem commodi possimus, facilis qui sapiente.
          </p>
        </div>
        <div className="w-1/4 h-full flex flex-col">
          <p className="font-semibold mb-1">SiteMap</p>
          <ul className="flex h-full justify-around items-center flex-col">
            <hr className="border-purple-600 border w-4/5" />
            <Link
              className="w-4/5 text-center hover:bg-purple-600 hover:rounded-sm cursor-pointer transition-all duration-300"
              href="/"
            >
              <li className="">Home</li>
            </Link>
            <hr className="border-purple-600 border w-4/5" />
            <Link
              className="w-4/5 text-center hover:bg-purple-600 hover:rounded-sm cursor-pointer transition-all duration-300"
              href="/products"
            >
              <li className="">Products</li>
            </Link>
            <hr className="border-purple-600 border w-4/5" />
            <Link
              className="w-4/5 text-center hover:bg-purple-600 hover:rounded-sm cursor-pointer transition-all duration-300"
              href="/contact"
            >
              <li className="">Contact</li>
            </Link>
            <hr className="border-purple-600 border w-4/5" />
            <Link
              className="w-4/5 text-center hover:bg-purple-600 hover:rounded-sm cursor-pointer transition-all duration-300"
              href="#"
            >
              <li className="">Privacy</li>
            </Link>
            <hr className="border-purple-600 border w-4/5" />
          </ul>
        </div>
        <div className="w-1/4 h-full flex justify-center items-center text-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            dolore. Numquam rem commodi possimus, facilis qui sapiente.
          </p>
        </div>
      </div>
    </footer>
  );
}
