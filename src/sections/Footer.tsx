import Image from "next/image";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-[#1A1A1A] text-white md:px-32 md:py-4 p-8">
      <div className="md:flex md:flex-row justify-between items-center sm:m-8">
        <div className="w-[10rem] mb-6 rounded-full ">
            <Image src="https://raw.githubusercontent.com/satyamdwivedi7/Images/main/iOSF.png" alt="adg" width={500} height={500} />
            
        </div>
        <div className="md:w-[20%] w-[80%] mb-6">
          <p className="text-[#5F2EEA] font-bold mb-2">Quick Links</p>
          <div className="flex justify-between">
            <div>
              <div className="relative group">
              <p>
                <a href="" className="hover:text-gray-400 transition-all">Events</a>
               
              </p>
              </div>
              <p>
                <a href="" className="hover:text-gray-400 transition-all">Projects</a>
              </p>
              <p>
                <a href="" className="hover:text-gray-400 transition-all">Domains</a>
              </p>
              <p>
                <a href="" className="hover:text-gray-400 transition-all">Partners</a>
              </p>
            </div>
            <div>
              <p>
                <a href="" className="hover:text-gray-400 transition-all">Team</a>
              </p>
              <p>
                <a href="" className="hover:text-gray-400 transition-all">Contact Us</a>
              </p>
              <p>
                <a href="" className="hover:text-gray-400 transition-all">About Us</a>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#5F2EEA] font-bold">Follow Us</p>
          <div className="flex justify-between gap-4 text-3xl my-4">
            <a href="" className="hover:text-gray-400 transition-all">
              <FaFacebook />
            </a>
            <a href="" className="hover:text-gray-400 transition-all">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/adgvit/"  target='_blank'className="hover:text-gray-400 transition-all">
              <FaInstagram />
            </a>
          </div>
          <div className="flex justify-between gap-4 text-3xl my-4">
            <a href="" className="hover:text-gray-400 transition-all">
              <FaXTwitter />
            </a>
            <a href="" className="hover:text-gray-400 transition-all">
              <FaGithub />
            </a>
            <a href="" className="hover:text-gray-400 transition-all">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <hr />
      <p className="text-center m-8">
        Developed by ADG | &copy; 2024 All rights reserved.
      </p>
    </section>
  );
}
