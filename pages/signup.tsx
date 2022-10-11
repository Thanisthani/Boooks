import Image from "next/image";
import Link from "next/link";
import book from '/public/asset/login.jpg';
import logo from '/public/asset/login_logo.png';
import SignupForm from "../components/SignUp/form";

const SignUp = () => {
    return ( 
        <div className="bg-[#592E64]  h-screen w-screen py-14 px-64">
        <div className="bg-[#fefefe] h-full w-full rounded-xl flex ">
            
                <div className='w-1/2 pt-10 ml-10'>
                    <div className="flex justify-between">
                        <Image src={logo} alt="logo" height={50} className="cursor-pointer object-contain" />
                        <div className="w-20"></div>
                    </div>
                
            <div className="  flex flex-col items-center justify-center pt-4">
      
                        <p className="font-thin text-4xl">Hello !</p>
                        <p className="font-normal text-[17px] text-[#89479a]">Sign up to explore boooks</p>

        <SignupForm />
                </div>
                
                </div>

            <div>
                <div className='flex space-x-5 justify-end pt-10 font-semibold'>
                    <p className='text-[#50555c]'>Already have an account ? </p> 
                    <Link href="/login" >
                    <p className='text-[#592E64] cursor-pointer'>Login</p>
                    </Link>
                </div>
                
            <Image src={ book} width={400} height={450} className='object-contain' />
            </div>


        </div>
        
    </div>
     );
}
 
export default SignUp;