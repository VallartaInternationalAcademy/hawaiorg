import Link from "next/link";
import Image from "next/image";

interface Props {
  backgroundClass: string;
  title: string;
  justifyClass: string;
}
export default function HeroItem({backgroundClass, justifyClass, title}: Props) {
  return (
    <div className={`flex ${justifyClass} items-center w-full py-7 px-2 lg:px-7 lg:h-screen80 bg-cover ${backgroundClass}`}>
      <div className={`flex flex-col w-full items-center p-7 lg:w-10/12`}>
        <div className="hidden md:flex flex-col items-center py-3">
          <Image
            src="/brand/MainLogo.svg"
            width={300}
            height={200}
            alt="SAPED"
          />
        </div>
        <h2 className="w-full text-2xl lg:text-6xl text-center font-semibold uppercase">
          <span className="block uppercase">{title}</span>
        </h2>
        <div className="w-full flex items-center justify-between lg:w-8/12 mt-2">
          <Link href="/" className="text-center w-5/12 font-medium bg-primaryBlue p-3 rounded-full uppercase">
            DONATE NOW
          </Link>
        </div>
      </div>
    </div>
  )
}