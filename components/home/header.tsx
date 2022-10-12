import Image from "next/image";
import logo from '/public/asset/header_logo.png';
import { BsFillCartFill } from 'react-icons/Bs';
import { BiSearchAlt2} from 'react-icons/Bi';




const header = () => {
    return ( 
        <div className="bg-[#353b43] h-[70px] flex items-center justify-between">
        <div className="flex space-x-28 items-center">
            <Image src={logo} alt="logo" height={50} className="cursor-pointer object-contain" />
            <ul className="item-center pl-5 flex space-x-6">
                <li className="headerlink">Home</li>
                    <li className="headerlink">Books</li>
                    <li className="headerlink">About</li>
                <li className="headerlink">Contact Us</li>
            </ul>
        </div>

            <div className="flex space-x-10 mr-10 items-center">
                <div className="flex items-center space-x-5">
                <input placeholder="Search" className="w-56 h-8 rounded-md border-slate-300 border-solid bg-[#464e59] text-white pl-2 " />
                <button className="bg-[#3e454e] px-3 items-center py-1 rounded-sm hover:bg-[#4f5864]" >
                    <BiSearchAlt2 className="h-6 w-6 text-[#fff]  cursor-pointer" />
                </button>
                </div>
               
                <BsFillCartFill className="h-6 w-6 text-white cursor-pointer"/>
                <img src="https://randomuser.me/api/portraits/men/91.jpg" className='h-10 w-10 rounded-full ' />
    
            
        </div>
    </div>
     );
}
 
export default header;