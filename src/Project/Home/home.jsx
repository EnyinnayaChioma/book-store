import ProductSection from "../ProductSection/productsection";
import Hero from "../Hero/hero";
import Secondbar from "../SecondBar/secondbar";
import Topbar from "../Topbar/topbar";
import Footer from "../Footer/Footer";

function Home() {
    return(
        <>
        <Topbar />
        <Secondbar />
        <Hero />
        <ProductSection />
        <Footer />
        </>
    )
}

export default Home;