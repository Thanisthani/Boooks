import SlideCarousel from "../components/home/slide_carousel";
import Header from "../components/home/header";
import Books from "../components/home/books";
import NewBooks from "../components/Welcome/newBooks";
import Footer from "../components/Welcome/footer";

const Home = () => {
    return (
        <div className="bg-[#f5f5f5] w-full h-full">
            <Header />
            <SlideCarousel />
            <NewBooks />
            <Books />
            <Footer />
    </div> );
}
 
export default Home;