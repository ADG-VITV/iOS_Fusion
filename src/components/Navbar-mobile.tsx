"use client";
import { IoReorderThreeOutline } from "react-icons/io5";
export default function NavbarMobile() {
    const handleClick = () => {
        console.log("clicked");
    }
    return (
        <button onClick={handleClick}>
            <IoReorderThreeOutline className="text-white text-4xl" />
          </button>
    );
}