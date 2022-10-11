import Image from 'next/image';
import Link from 'next/link';
import LoginForm from '../components/Login/form';
import book from '/public/asset/login.jpg';
import logo from '/public/asset/login_logo.png';

const login = () => {
    return ( 
        <div className="bg-[#592E64]  h-screen w-screen py-20 px-64">
            <div className="bg-[#fefefe] h-full w-full rounded-xl flex ">
                
                <div className='w-1/2 pt-10 ml-10'>
                <Image src={logo} alt="logo" height={50} className="cursor-pointer object-contain" />
                <div className="  flex flex-col items-center justify-center pt-10">
          
                    <p className="font-thin text-4xl">Welcome Back</p>

                    <LoginForm />
                    </div>
                    
                    </div>

                <div>
                    <div className='flex space-x-5 justify-end pt-10 font-semibold'>
                        <p className='text-[#50555c]'>Don't have an account ? </p> 
                        <Link href="/signup">
                        <p className='text-[#592E64] cursor-pointer'>Sign Up</p>
                        </Link>
                    </div>
                    
                <Image src={ book} width={400} height={450} className='object-contain' />
                </div>


            </div>
            
        </div>
     );
}
 
export default login;