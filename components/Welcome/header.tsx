import Image from "next/image";
import logo from '/public/asset/header_logo.png';
import { BsPersonCircle } from 'react-icons/Bs';
import Link from "next/link";


const Header = () => {
    return ( 
        <div className="bg-[#353b43] h-14 flex items-center justify-between">
            <div className="flex space-x-28 items-center">
                <Image src={logo} alt="logo" height={50} className="cursor-pointer object-contain" />
                <ul className="item-center pl-5 flex space-x-6">
                    <li className="headerlink">Home</li>
                    <li className="headerlink">About</li>
                    <li className="headerlink">Contact Us</li>
                </ul>
            </div>

            <div className="flex space-x-5 pr-5">
                <BsPersonCircle className="h-6 w-6 text-white" />
                <Link href="/login">
                <p className="headerlink cursor-pointer">Log in</p>
                </Link>
                <p className="headerlink">/</p>
                <Link href="/signup">
                <p className="headerlink cursor-pointer">Sign Up</p>
                </Link>
                
            </div>
        </div>
     );
}

// E:\Bookstore_web_app\client\asset\Boooks_logo.png
 
export default Header;