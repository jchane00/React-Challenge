
import { 
    FaHtml5, 
	FaCss3Alt, 	 
	FaBootstrap, 
	FaNode, 
    FaReact, 
    FaJsSquare
} 
from "react-icons/fa";
import {SiGraphql, SiMysql,SiRedux  } from "react-icons/si";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import profileImage from '../img/profileImage.jpg'
function AboutMe() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src={profileImage}
            className="mr-sm-2"
            style={{ width: "20%" }}
            alt="profileimage"
          />
        </div>
        <div className="col-6">
          <h1 id="about">About me</h1>
          <h3 style={{ width: "70%", justifyContent: "center" }} id="about">
            My name is Jarmaris and I'm a full-stack software engineer
            with a background in aerospace. I am a graduate of UT
            Austin's Full Stack Web Developer Bootcamp. This program has enabled me with the programming skills
            to create progressive web
            applications using the MongoDB, Express, React and Node.js (MERN)
            JavaScript stack.
            
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <h4>Developer Skills:</h4>
          <h2>
            <FaHtml5 />
            <FaCss3Alt />
            <FaJsSquare />
            <DiJqueryLogo />
            <FaReact />
            <SiRedux />
            <FaBootstrap />
            <FaNode />
            <SiMysql />
            <DiMongodb />
            <SiGraphql />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;