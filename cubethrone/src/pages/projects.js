import React, { useState } from 'react';
import './projects.css';
import game1 from '../asset/A1u0ZQ.png';
import game2 from '../asset/04YlzU.png';
import game3 from '../asset/4nmMTp.png';
import game4 from '../asset/dzQ8n+.png';
import video1 from '../asset/TrailerFinal_r.mp4';
import img1a from '../asset/KBjVHn.png';
import img1b from "../asset/eXGZun.png";
import img1c from "../asset/qhYuw5.png";
import img3a from "../asset/5Hsm40.png";
import img3b from "../asset/mCe8J1.png";
import img3c from "../asset/CVqu6N.png";
import img4a from "../asset/_1YSAS.png";
import img4b from "../asset/niL8YO.png";
import img4c from "../asset/dzQ8n+.png";
import gv4 from '../asset/car_macanisam.mp4';
import gv3 from '../asset/football.mp4'
// ... (previous imports)

const projectsData = [
  {
    img: game1,
    name: 'From Chains To The Skies',
    video: video1,
    img1: img1a,
    img2: img1c,
    img3: img1b,
    text: 'A captivating climbing adventure inspired by titles like "Getting Over It" and "Only Up." Unique art style and innovative gameplay mechanics.',
    link :'https://cubethrone.itch.io/from-chains-to-the-skies',
  },
  {
    img: game2,
    name: 'The Circle Eater',
    video: '',
    img1: game2,
    img2: game2,
    img3:game2,
    text: 'The Circle Eater is a smart phone version of snake game.',
    link :'https://cubethrone.itch.io/the-circle-eater',
  },
  {
    img: game3,
    name: 'Desi FIFA 21',
    video: gv3,
    img1: img3a,
    img2: img3b,
    img3: img3c,
    text: 'Desi FIFA 21 is a simple game in which you have to goal and collect point it also have different type of balls which can be buy from point you have earn. ',
    link : 'https://cubethrone.itch.io/desi-fifa-21',
  },
  {
    img: game4,
    name: 'Highway Racer',
    video: gv4,
    img1: img4a,
    img2: img4b,
    img3: img4c,
    text: 'The game shows the realistic movement of the car.' +
      ' NOTE: The buttons enabled from the options menu will not work; it\'s exported for PC only. ' +
      ' Controls: W = for moving forward, A = for moving left, S = for moving back, D = for moving right, SPACE BAR = for brakes.',
      link : 'https://cubethrone.itch.io/highway-racer',
  },
];

const Projects = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className='project-main'>
      <p className='project'>PROJECTS</p>
      <hr />
      <div className='pro'>
      {projectsData.map((project, index) => (
          <div key={index}>
            <Card img={project.img} name={project.name} onClick={() => openModal(project)} />
          </div>
        ))}
      </div>
      {modalContent && (
        <Modal
          video={modalContent.video}
          text={modalContent.text}
          heading={modalContent.name}
          onClose={closeModal}
          img1={modalContent.img1}
          img2={modalContent.img2}
          img3={modalContent.img3}
          link={modalContent.link}
        />
      )}
    </div>
  );
};

const Card = ({ img, name, onClick }) => (
  <div className='card' onClick={onClick}>
    <img src={img} className='card-img' alt={name} />
    <p className='card-head'>{name}</p>
  </div>
);

const Modal = ({ video, text, heading, onClose, img1, img2, img3,link }) => {
  const images = [img1, img2, img3].filter(Boolean);
  const hasVideo = !!video;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <div className='head'>
          <h2>{heading}</h2>
          <p className='x' onClick={onClose}>X</p>
        </div>
        {hasVideo && (
          <div className='image-gallery'>
            {currentIndex === 0 && (
              <video src={video} className='video' width="600" height="300" autoPlay controls loop />
            )}
            {currentIndex!=0&&
            <img src={images[currentIndex]}  alt={`Gallery ${currentIndex + 1}`} />}
            <div className='gallery-controls'>
              <button onClick={handlePrev}>&lt; Prev</button>
              <button onClick={handleNext}>Next &gt;</button>
            </div>
          </div>
        )}
        {!hasVideo && images.length > 0 && (
          <div className='image-gallery'>
            <img src={images[currentIndex]} alt={`Gallery ${currentIndex + 1}`} />
            <div className='gallery-controls'>
              <button onClick={handlePrev}>&lt; Prev</button>
              <button onClick={handleNext}>Next &gt;</button>
            </div>
          </div>
        )}
        <p className='dis'>{text}</p>
        <a href={link} target='_blank'  className='play'>Play Now</a>
      </div>
    </div>
  );
};


export default Projects;
