import React,{useState} from 'react';
import './services.css';
import g1 from '../asset/lowpoly.webp'
import g11 from '../asset/lowpoly1.webp'
import g12 from '../asset/lowpoly2.webp'
import gv1 from '../asset/lowpoly.mp4'
import g2 from '../asset/car1.jpeg'
import g21 from '../asset/car2.jpeg'
import g22 from '../asset/car3.webp'
import gv2 from '../asset/car.mp4'
import g3 from '../asset/foot1.webp'
import g31 from '../asset/foot2.jpeg'
import g32 from '../asset/foot3.webp'
import gv3 from '../asset/football.mp4'
import g4 from '../asset/mac1.jpeg'
import g41 from '../asset/mac2.jpeg'
import g42 from '../asset/mac3.webp'
import gv4 from '../asset/car_macanisam.mp4'
import g5 from '../asset/game1.webp'
import g51 from '../asset/game2.webp'
import g52 from '../asset/game3.webp'
import gv5 from '../asset/game.mp4'

const Services = () => {
    const services = [
        {
          video: gv1,
          title: 'I will create premium low poly 3d models',
          hireLink: 'https://www.fiverr.com/cubethrone/create-premium-low-poly-3d-models?context_referrer=seller_page&ref_ctx_id=f5d2ffda17154410a263de70793f9914&pckg_id=1&pos=1&imp_id=2775498f-443a-45e4-a575-5f4ef10e0608',
            img1: g1,
            img2  : g11,
            img3 : g12,
        },
        {
            video: gv2,
            title: 'I will make different controls for your car or character',
            hireLink: 'https://www.fiverr.com/cubethrone/make-different-controls-for-your-car-or-character?context_referrer=seller_page&ref_ctx_id=f5d2ffda17154410a263de70793f9914&pckg_id=1&pos=2&imp_id=30ae17c8-2c0e-4c3e-a73f-93d43371d9e2',
              img1: g2,
              img2  : g21,
              img3 : g22,
        },
        {
            video: gv3,
            title: 'I will make beautiful functional UI design for your game',
            hireLink: 'https://www.fiverr.com/cubethrone/make-beautiful-functional-ui-design-for-your-game?context_referrer=seller_page&ref_ctx_id=f5d2ffda17154410a263de70793f9914&pckg_id=1&pos=4&imp_id=bd5202eb-edb0-49cd-a045-e0491bf0cf74',
              img1: g3,
              img2  : g31,
              img3 : g32,
        },
        {
            video: gv4,
            title: 'I will create any game mechanism',
            hireLink: 'https://www.fiverr.com/cubethrone/make-professional-hyper-casual-game?context_referrer=seller_page&ref_ctx_id=f5d2ffda17154410a263de70793f9914&pckg_id=1&pos=3&imp_id=d6492685-40c7-4f79-b156-ef46d83fe317',
              img1: g4,
              img2  : g41,
              img3 : g42,
        },
        {
            video: gv5,
            title: 'I will build your game professional game development',
            hireLink: 'https://www.fiverr.com/cubethrone/develop-any-2d-or-3d-game?context_referrer=seller_page&ref_ctx_id=f5d2ffda17154410a263de70793f9914&pckg_id=1&pos=6&imp_id=9daa7c39-412d-4532-9ea2-9420024afb6a',
              img1: g5,
              img2  : g51,
              img3 : g52,
        },
      ];
    
        const ServiceComponent = ({ video, heading,  img1, img2, img3,link }) => {
            const images = [video ,img1, img2, img3].filter(Boolean);
            const [currentIndex, setCurrentIndex] = useState(0);
          
            const handlePrev = () => {
              setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            };
          
            const handleNext = () => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            };
          
            return (
                <div className='service-card' >
                    <div className='image-gallery'>
                      {currentIndex === 0 && (
                        <video src={images[currentIndex]} className='video' width="600" height="300"  controls loop />
                      )}
                      {currentIndex!=0&&
                      <img src={images[currentIndex]}  className='image' alt={`Gallery ${currentIndex + 1}`} />}
                      <div className='gallery-controls'>
                        <button onClick={handlePrev}>&lt;</button>
                        <button onClick={handleNext}>&gt;</button>
                      </div>
                    </div>
                    <div className='click'>
                    <h2>{heading}</h2>
                  <a href={link} target='_blank'  className='fir'>Hire</a>
                  </div>
                </div>
            );
          };
  return (
   
    <div className="services-container">
        <p className='ser'>SERVICES<hr></hr></p>
        <div className='services-cards'>
        {services.map((project, index) => (
          <div key={index}>
            <ServiceComponent video={project.video} heading={project.title}  img1={project.img1} img2={project.img2} img3={project.img3} link={project.hireLink}  />
          </div>
        ))}
        </div>
    </div>
  );
};

export default Services;

