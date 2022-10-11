import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

const Recommend = () => {
    return (
        
        <div>
            <p className="text-[#592E64] text-xl text-center pb-10 font-semibold">Special Offers</p>

            <div className="flex justify-center space-x-2 pb-10">
                    <div className="h-[400px] w-[500px] bg-[#592E64] rounded-xl flex  pl-5">
                    <img src="https://static-cse.canva.com/blob/931285/1024w-bpueJw9ttIE.jpg" className="h-[350px] rounded-lg self-center" />
                   
                    <div className="ml-5 mr-5 flex flex-col justify-between py-8">
                        
                        <div>
                            <p className="text-white font-medium">The Edge</p>
                        <p className="text-white text-sm font-light">By Nathan Harrignton</p>
                        <div className='flex pt-1'>
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#d3d4d6]'/>
                        </div>
                        
                        <p className='text-white font-light text-sm text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus non minus blanditiis atque ab unde perferendis quaerat, mollitia iure libero quisquam ad voluptate hic molestias cupiditate alias consectetur praesentium. natus non minus blanditiis atque ab unde perferendis quaerat, mollitia iure 
                            </p>
                            
                            </div>


                        <div className='flex space-x-4 text-white items-baseline'>
                            <p className='font-semibold'>30$</p>
                            <p className='font-light text-xs line-through'>35$</p>
                            <Link href="">
                                <div className='bg-[#adbbf9] px-6 font-medium py-1 rounded-md text-xs text-[#592E64]'>Buy Now</div>
                            </Link>
                        </div>

                    </div>
                
                </div>

                <div className="space-y-2">

                    <div className="bg-[#592E64] h-[195px] w-[500px] rounded-xl flex pl-3">

                        <img src="https://s26162.pcdn.co/wp-content/uploads/2019/01/9781616208882.jpg" className="h-[170px] rounded-lg self-center" />
                   
                        <div className='px-3 w-48 py-4'>
                            <p className="text-white font-medium">Sugar Run</p>
                        <p className="text-white text-sm font-light">By Mesha Maren</p>
                        <div className='flex pt-1'>
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
                            <AiFillStar className='h-4 w-4  text-[#d3d4d6]'/>
                        </div>
                        
                        <p className='text-white font-light text-sm text-justify'>
                            Lorem alias consectetur praesentium. natus non minus blanditiis atque ab unde perferendis quaerat, mollitia iure 
                            </p>
                            
                        </div>

                        <div className='flex space-x-2 self-end text-white items-baseline pb-4 pl-5'>
                            <p className='font-semibold'>22$</p>
                            <p className='font-light text-xs line-through'>25$</p>
                            <Link href="">
                                <div className='bg-[#adbbf9] px-4 font-medium py-1 rounded-md text-xs text-[#592E64]'>Buy Now</div>
                            </Link>
                        </div>

                        

                    </div>

                    <div className="bg-[#592E64] h-[195px] w-[500px] rounded-xl flex pl-3">

<img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-business-leadership-book-cover-design-template-dce2f5568638ad4643ccb9e725e5d6ff.jpg" className="h-[170px] rounded-lg self-center" />

<div className='px-3 w-48 py-4'>
    <p className="text-white font-medium">The Mind Of Leader</p>
<p className="text-white text-sm font-light">By Kavin Anderason</p>
<div className='flex pt-1'>
    <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
    <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
    <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
    <AiFillStar className='h-4 w-4  text-[#fdcc3b]' />
    <AiFillStar className='h-4 w-4  text-[#d3d4d6]'/>
</div>

<p className='text-white font-light text-sm text-justify'>
                                Lorem alias consectetur praesentium. natus non minus blanditiis
                                atque ab unde perferendis quaerat, mollitia iure 
    </p>
    
</div>

<div className='flex space-x-2 self-end text-white items-baseline pb-4 pl-5'>
    <p className='font-semibold'>49$</p>
    <p className='font-light text-xs line-through'>55$</p>
    <Link href="">
        <div className='bg-[#adbbf9] px-4 font-medium py-1 rounded-md text-xs text-[#592E64]'>Buy Now</div>
    </Link>
</div>



</div>
                </div>
                
            </div>

        
    </div> );
}
 
export default Recommend;