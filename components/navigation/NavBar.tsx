import Link from 'next/link';
import Image from "next/image";

export default function  Navbar(){
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/" className="text-blue-500">
            <Image src="/brand/corazon-hawaii.png" width={160} height={90} alt="corazon-hawaii"/>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-secondaryGray hover:text-primaryBlue">
            HOME
          </Link>
          <Link href="/about" className="text-secondaryGray hover:text-primaryBlue">
            ABOUT US
          </Link>
          <Link href="/what-we-do" className="text-secondaryGray hover:text-primaryBlue">
            WHAT DO WE DO?
          </Link>
          <button className="flex justify-center items-center bg-primaryBlue uppercase text-4xl text-white px-6 py-3 rounded-full">
            Donate
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

