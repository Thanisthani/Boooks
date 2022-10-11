import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '/public/asset/slide3.jpeg';
import img2 from '/public/asset/slide.jpg';
import img3 from '/public/asset/slide2.jpg';
import { MdCollectionsBookmark } from 'react-icons/Md';
import {HiUserGroup} from 'react-icons/Hi';




const Banner = () => {
    // const slideImages = [
    //     {
    //       url: 'asset/slide1.jpg',
    //       caption: 'Slide 1'
    //     },
    //     {
    //       url: 'asset/slide2.jpg',
    //       caption: 'Slide 2'
    //     },
    //     {
    //       url: 'asset/slide3.jpg',
    //       caption: 'Slide 3'
    //     },
    // ];
    
    return (
        // bg-[#7d418c] grid grid-cols-2
        <div className=" flex bg-[#592E64] h-[93vh]  items-center  pl-10">
            <div className="space-y-3 pl-10 flex-2" >
                <div className="flex space-x-3  items-baseline  ">
                <p className="text-white text-3xl font-[400]">Welcome to</p>
                <p className="text-white text-3xl font-semibold">BOOOKS</p>
                </div>
                <p className="font-light text-2xl text-white">Online BookStore</p>
                <p className="font-light text-sm max-w-sm text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam at suscipit laborum numquam totam corrupti tempora, exercitationem ducimus ab molestiae repudiandae aut nobis expedita, molestias accusamus rerum et. Cupiditate, quasi?</p>
                
                
                <div className='flex space-x-6 pt-3 pb-5'>

                    <div>
                        <div className='flex space-x-3 items-center'>
                        <MdCollectionsBookmark className='text-[#d5cad8] h-8 w-8' />
                        <p className='text-[#d5cad8] font-semibold'>75k</p>
                        </div>
                        <p className='text-[#d5cad8] text-sm font-semibold'>Books Collections</p>
                        
                    </div>
                    
                    <div>
                    <div className='flex space-x-3 items-center'>
                        <HiUserGroup className='text-white h-8 w-8' />
                        <p className='text-[#d5cad8] font-semibold'>2.0M</p>
                        </div>
                        <p className='text-[#d5cad8] text-sm font-semibold'>Customer</p>
                    </div>
                </div>
                <div className='cursor-pointer text-white  bg-[#c37acf] py-2 px-9 w-48 font-semibold rounded-md hover:bg[#f0ddf3]'>Go to collection</div>
            </div>
             {/* Carousel */}
            {/* <div className=" ml-10 ">
                <Slide>
                    
                    {slideImages.map((slideImage, index) => (
                        <div className="flex object-cover justify-center items-center" key={index}>
                            <div className="h-[450px] w-[300px] rounded-md" style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                                <span>{slideImage.caption}</span>
                            </div>
                        </div>
          ))} 
                </Slide>
                
               
      
            </div> */}

            <div className='flex-1 pl-40  flex items-center space-x-5'>
                <div >
                <Image src={img2} alt="Slide1" height={450} width={300} className="pr-5   rounded-md" />
                </div>
                
                <div>
                    <Image src={img3} alt="Slide1" height={400} width={250} className="ml-10   rounded-md" />
                    
                </div>
                
                <div>
                    <Image src={img1} alt="Slide1" height={350} width={200} className="pl-10   rounded-md" />
                    
                </div>
                
                

            </div>

        </div>
      );
}
 
export default Banner;