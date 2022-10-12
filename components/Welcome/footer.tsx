import Image from "next/image";
import logo from '/public/asset/header_logo.png';
import { BsFacebook,BsTelegram } from 'react-icons/Bs';
import { AiFillTwitterCircle,AiOutlineCopyrightCircle, AiFillInstagram, AiOutlineMail,AiFillPhone } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr';


const Footer = () => {
    return (  
        <div className="bg-[#353b43]">
            <div className="grid grid-cols-4 pt-10 pb-5">
                <div className="flex flex-col justify-center items-center">
                    <Image src={logo} alt="logo" height={65} className="object-contain " />  
                    <div className="flex items-center space-x-2 pt-2">
                        <BsFacebook className="text-[#d3d4d6] h-4 w-4 " />
                        <AiFillTwitterCircle className="text-[#d3d4d6] h-5 w-5 " />
                        <AiFillInstagram className="text-[#d3d4d6] h-5 w-5 " />
                        <GrMail className="text-[#d3d4d6] h-5 w-5 " />
                        <BsTelegram className="text-[#d3d4d6] h-4 w-4 "/>
                    </div>
                </div>

                <div className="space-y-2 ">

                    <p className="text-white font-medium">Quick Links</p>
                    <p className="text-[#d3d4d6] text-sm">About Us</p>
                    <p className="text-[#d3d4d6] text-sm">Products</p>
                    <p className="text-[#d3d4d6] text-sm">Contact Us</p>
                    <p className="text-[#d3d4d6] text-sm">Login</p>
                    <p className="text-[#d3d4d6] text-sm">Sign Up</p>
                </div>

                <div className="space-y-2 ">

<p className="text-white font-medium">Customers</p>
<p className="text-[#d3d4d6] text-sm">My Cart</p>
<p className="text-[#d3d4d6] text-sm">Orders</p>
<p className="text-[#d3d4d6] text-sm">FAQ</p>
<p className="text-[#d3d4d6] text-sm">Terms</p>
<p className="text-[#d3d4d6] text-sm">Privacy</p>
                </div>
                
                
                <div className="space-y-2 ">

                    <p className="text-white font-medium">Get in touch</p>
                    <div className="text-[#d3d4d6] text-sm flex space-x-2">
                        <ImLocation className=" h-5 w-5 " />
                        <p>No 07, Kandy Road, Vavuniya, Srilanka.  </p>
                    </div>

                    <div className="text-[#d3d4d6] text-sm flex space-x-2">
                        <AiFillPhone className=" h-5 w-5 " />
                        <p>024-222-2222 </p>
                    </div>
                    <div className="text-[#d3d4d6] text-sm flex space-x-2">
                        <GrMail className=" h-5 w-5 " />
                        <p>024-222-2222 </p>
                    </div>
                </div>
                

                
            </div>

            <div className="border-t-[0.5px] border-solid border-[#d3d4d6] py-2">
                <div className="text-[#d3d4d6] flex items-baseline justify-center space-x-1 text-xs">
                    <p>Copyrights</p> <AiOutlineCopyrightCircle />
                    <p>2022 All rights reserved</p>
                </div>
                
            </div>

        </div>
    );
}
 
export default Footer;