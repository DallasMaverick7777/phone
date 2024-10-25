import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PhoneList from "./components/PhoneList";



  const Page = () => {
    return (
      <div>    
        <Header />
        <HeroSection />
        <div id="iphones" style={{ marginTop: '20px' }}>
          <PhoneList />
        </div>
      </div>
    );
  };
  
  export default Page;

  
