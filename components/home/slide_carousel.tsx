import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const SlideCarousel = () => {
    return (
        <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false}>
        <div>

            <img src="/asset/b_slide8.jpg" className="h-[550px] w-[600px] object-cover" />

        </div>
        <div>
            <img src="/asset/b_slide2.jpg" className="h-[550px] w-full object-cover" />
        </div>
        <div>
            <img src="/asset/b_slide5.jpg" className="h-[550px] w-full object-cover" />
        </div>
    </Carousel>
      );
}
 
export default SlideCarousel;