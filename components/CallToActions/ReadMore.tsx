import Image from "next/image";

export default function ReadMore(){
  return (
      <div className="flex w-full items-start">
        <div className="w-4/12 bg-black">
          <Image src={'/default/readMore.png'} width={600} height={600} alt={''}/>
        </div>
        <div className="px-10 w-8/12 flex flex-col items-center justify-center text-black">
          <h2 className="text-4xl">
            LOREM IPSUM DOLOR LOREM
          </h2>
          <p className="text-justify my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <p className="text-justify my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <button className="p-5 bg-primaryBlue text-white rounded-full text-4xl">
            Read More
          </button>
        </div>
      </div>
  )
}