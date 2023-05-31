
import './App.css';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Group from './components/Group';
import Header from './components/Header/Header';
import ImageGallery from './components/ImageGallery';
import Testimonial from './components/Testimonial';
import WhyChoose from './components/WhyChoose';
import Work from './components/Work';

function App() {
  return (
    <>
      <Header/>
      <Group/>
      <About/>
      <Work/>
      <WhyChoose/>
      <Testimonial/>
      <FAQ/>
      <ImageGallery/>
      <Footer/>
    </>
  );
}

export default App;
