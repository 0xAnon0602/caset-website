import coeLogo from '../images/logo/coeLogo.jpg'
import '../css/Homepage.css'
import React, { useState, useEffect } from 'react';

function Homepage() {

  const industryLogo = [
    "https://img.freepik.com/premium-vector/bird-logo-vector-design_1020392-9.jpg?w=1060",
    "https://png.pngtree.com/png-clipart/20200727/original/pngtree-rooster-creative-logo-design-template-png-image_5327856.jpg",
    "https://st2.depositphotos.com/3487615/5752/v/450/depositphotos_57526709-stock-illustration-phoenix-logo-design-symbol-vector.jpg",
    "https://i.pinimg.com/736x/cd/95/7a/cd957ad812878612f006fb7c3b698cd0.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MDdXUuF-eLzAeCpTxXGSQ_m2PMrFDmZAQokYMwZOAHgBOsW3yJaZ99ENg3QdeHT0o90&usqp=CAU",
    "https://img.freepik.com/premium-vector/colorful-bird-with-colorful-tail-is-shown-white-background_1187092-33056.jpg?w=2000",
    "https://img.freepik.com/premium-vector/colorful-bird-gradient-illustration-logo-concept_1253202-1713.jpg?w=1060",
    "https://img.freepik.com/premium-vector/stylized-hummingbird-premium-vector-illustration_629132-102.jpg?w=1060"
  ]

  const labImages = [
    'https://images.unsplash.com/photo-1667995508178-e24e78cd944c?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1661434779070-cf8fc0e253ab?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const labTexts = [
    {
      title: "Lab And Prototypes 1",
      description: "Deserunt ex ad consectetur non ipsum adipisicing eiusmod."
    },
    {
      title: "Lab And Prototypes 2",
      description: "This is a cwe  ewcb cwe wnhebfwc eubce cn uewcw cebfwbc we."
    },
    {
      title: "Lab And Prototypes 3",
      description: "Description for image 3."
    },
    {
      title: "Lab And Prototypes 4",
      description: "Description for image 4."
    }
  ];

  const achievemntImages = [
    'https://images.unsplash.com/photo-1728933102332-a4f1a281a621?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1663047734922-fb593d415039?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1551677629-c3e314ecf29c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1649421493620-48f1bb0484cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ];

  const achievementText = [
    {
      title: "Achievement 1",
      description: "Deserunt ex ad consectetur non ipsum adipisicing eiusmod."
    },
    {
      title: "Achievement 2",
      description: "This is a cwe  ewcb cwe wnhebfwc eubce cn uewcw cebfwbc we."
    },
    {
      title: "Achievement 3",
      description: "Description for image 3."
    },
    {
      title: "Achievement 4",
      description: "Description for image 4."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAchievementIndex, setAchievementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % labImages.length;
        return newIndex;
      });
    }, 3000); 
    return () => clearInterval(interval); 
  }, [labImages.length, labTexts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAchievementIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % achievemntImages.length;
        return newIndex;
      });
    }, 3000); 
    return () => clearInterval(interval); 
  }, [achievemntImages.length, achievementText]);

  return (
    <div className="homepage">

      <div className="mainTitle">
        <span> ARCSET </span>
        <img src={coeLogo} alt="coeLogo" width="140px" height="130px"></img>
      </div>

      <div className="secondaryText">
        <p> Advanced Research Centre For Sustainable Energy Technologies </p>
      </div>

      <div className="otherText">
        {/* <p>The First COE Of Energy Research <br/>"For Goa, Of Goa, By Goa"</p> */}
        <p>First of a kind Energy Center<br/>"For Goa, Of Goa, By Goa"</p>
      </div> 

      <div className="labMain">
        <div
          className="labSlider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {labImages.map((image, index) => (
            <div key={index} className="labSlide">
              <div className="labTextSection">
                <div className="labText">
                  <p className="labTextMain">{labTexts[index].title}</p>
                  <p className="labOtherText">{labTexts[index].description}</p>
                </div>
              </div>
              <div className="carousel">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="industryTitle">New Achievements</p>

      <div className="labMain">
        <div
          className="labSlider"
          style={{ transform: `translateX(-${currentAchievementIndex * 100}%)` }}
        >
          {achievemntImages.map((image, index) => (
            <div key={index} className="labSlide">
              <div className="labTextSection">
                <div className="labText">
                  <p className="labTextMain">{achievementText[index].title}</p>
                  <p className="labOtherText">{achievementText[index].description}</p>
                </div>
              </div>
              <div className="carousel">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="industryInfo">
        <p className="industryTitle">Industry Partners</p>
        <div className="industryLogos">
          {industryLogo.map((logo, index) => (
            <div key={index} className="logoContainer">
              <img width="100px" height="100px" src={logo} alt={`Logo ${index}`} className="industryLogoImage" />
              <p className="logoText">Logo {index + 1}</p> 
            </div>
          ))}
        </div>
      </div>

    </div>
  );

}

export default Homepage;