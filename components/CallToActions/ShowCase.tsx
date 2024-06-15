import Image from "next/image";
interface Props {
  imgSource?: string;
  title?: string;
  content?: string;
}

export default function ShowCase(
    {
      imgSource='/default/showCase1.png',
      title='Lorem Title',
      content='Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor'+
      'incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing' +
      'elit, sed do eiusmod tempor incididunt'
    }: Props
){
  return (
      <div className="w-full md:w-3/12 flex-col justify-center items-start p-7 bg-primaryGray rounded-3xl">
        <div className="flex justify-center">
          <Image className="-mt-16 border-2 border-primaryBlue" src={imgSource} height={200} width={200} alt=''/>
        </div>
        <div>
          <h3 className="text-black">{title}</h3>
          <p className="text-black my-4">
            {content}
          </p>
        </div>
      </div>
  )
}