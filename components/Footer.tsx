import Image from "next/image";

export default function Footer(){
  return (
    <footer className="w-full px-10 py-3 bg-primaryBlue">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <Image src="/brand/corazon-hawaii.png" height={280} width={380} alt="corazon-hawaii"/>
        </div>
        <div className="flex flex-col md:flex-row md:justify-around">
          <div>
            <h4>Contactanos</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>What do we do</li>
              <li>Donate</li>
            </ul>
          </div>
          <div>
            <h4>Site Map</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>What do we do</li>
              <li>Donate</li>
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
              <li>TikTok</li>
              <li>Twitter</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between border-t border-white py-3">
        <div>
          Copyright &copy; Corazon Hawaii. All Rights Reserved 2024
        </div>
        <div>
          Terms & Conditions
        </div>
      </div>
    </footer>
  )
}