import { BsTelephone } from "react-icons/bs";
import { assets } from "../../assets/assets";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowCircleRight, FaFacebook, FaInstagram, FaPhoneAlt, FaPlay } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import { LuLoader } from "react-icons/lu";

const Sections = () => {
  return (
    <>
      <main style={{ margin: "auto" }}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer/>
        {/* 
            
            */}
      </main>

      {/* <Footer /> */}
    </>
  );
};

const Section1 = () => {
  return (
    <>
      <section className="section-A" id="Home">
        <div id="hero" className="hero  ">
          <div className="row gy-4 hero_contnt">
            <div className="Sous_title">
              <div className="icon_contact">
                <a href="">
                  <FaPhoneAlt size={18} style={{ margin: "auto" }} />
                </a>
                <a href="">
                  <FaFacebook size={18} style={{ margin: "auto" }} />
                </a>
                <a href="">
                  <FaInstagram size={18} style={{ margin: "auto" }} />
                </a>
                <a href="">
                  <FaXTwitter size={18} style={{ margin: "auto" }} />
                </a>
                <a href="">
                  <BiLogoGmail size={18} style={{ margin: "auto" }} />
                </a>
              </div>
              <h1>
                Grow your media library effortlessly with <span>Fastload</span>{" "}
              </h1>
              <a className="btn-getstarted bnt" href="">
                Get Started
              </a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={assets.p1} className=" animated" width={490} alt />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};





const Section2 = () => {
  const [videoSrc, setVideoSrc] = useState(""); // State to hold the current video source
  const [isVideoVisible, setIsVideoVisible] = useState(false); // State to toggle visibility

  const handleVideoClick = (src) => {
    setVideoSrc(src);
    setIsVideoVisible(true);
  };

  const closeVideo = () => {
    setIsVideoVisible(false);
  };

  return (
    <>
      <div className="Concnt_dow section-title"id="Sevice">
        <h2 >
          <span>YouTube Video </span>Downloader
        </h2>
        
        <label htmlFor="">
          <input type="url" name="" id="" />
          <button className="btn_update"><span>Download</span><FaArrowCircleRight /></button>

        </label>
        <div className="container_res">
        <LuLoader />
          <div className="row_res">
            {/* Video */}
            <div className="col_res">
              <div
                className="feacture_img_res"
                onClick={() => handleVideoClick(assets.LEVELD)}
              >
                <video width={"100%"} muted>
                  <source src={assets.LEVELD} type="video/mp4" />
                </video>
                <FaPlay size={25} className="icon_res" />
              </div>
            </div>
            {/* DownloadOptions */}
            <div className="col_res">
              <div className="small_btn_row">
                <DownloadOptions />
              </div>
            </div>
          </div>

          {/* Conditionally render the video player */}
          {isVideoVisible && (
            <div className="video_player_res">
              <IoIosCloseCircle
                size={25}
                className="icon_hidden_res"
                onClick={closeVideo}
              />
              <video width={"100%"} controls autoPlay>
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          )}
        </div>
      </div>
    </>
  );
};



const DownloadOptions = () => {
  const options = [
    { type: "Audio", format: "MP3", size: "12.75M" },
    { type: "Vidéo", resolution: "1080p60", format: "mp4", size: "272.69M" },
    { type: "Vidéo", resolution: "720p", format: "mp4", size: "192.39M" },
    { type: "Vidéo", resolution: "720p60", format: "mp4", size: "161.26M" },
    { type: "Vidéo", resolution: "360p", format: "mp4", size: "71.82M" },
  ];

  return (
    <div className="download-options_Dw" id="download-options_Dw">
      {/* <h6>Options de téléchargement</h6> */}
      <table className="table_Dw" id="table_Dw">
        <tbody className="tbody_Dw" id="tbody_Dw">
          {options.map((option, index) => (
            <tr className="tr_Dw" id={`tr_${index}_Dw`} key={index}>
              <td className="td_Dw" id={`td-type_${index}_Dw`}>
                {option.type}
              </td>
              <td className="td_Dw" id={`td-quality_${index}_Dw`}>
                {option.resolution
                  ? `${option.resolution} (${option.format})`
                  : option.format}
              </td>
              <td className="td_Dw" id={`td-size_${index}_Dw`}>
                {option.size}
              </td>
              <td className="td_Dw" id={`td-action_${index}_Dw`}>
                <button
                  className="download-button_Dw"
                  id={`download-btn_${index}_Dw`}
                >
                  Télécharger
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



const Section3 = () => {
  const clients = [
    assets.Ab1,
    assets.Ab6,
    assets.Ab4,
    assets.Ab3,
    assets.Ab5,
    assets.Ab2,
  ];

  // Slider settings for React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // Number of items to show in the carousel
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section id="clients" className="clients section light-background">
      <div className="container section-title">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client} alt={`Client ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const Section4 = () => {
  return (
    <section id="contact" className="contact">
      <div className="container section-title">
        <h2>Contact</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container position-relative">
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="icon">
                <BsTelephone />
              </i>
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            <div className="info-item">
              <i className="icon">
                <MdOutlineMailOutline />
              </i>
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form>
              <div className="form-group" style={{ display: "flex" }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  style={{ marginRight: "20px" }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  style={{ marginRight: "-20px" }}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="form-group text-center ">
                <button type="submit" className="btn_update">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="sitename">FastLoad</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="social-links">
          <a href="">
            <FaSquareXTwitter />
          </a>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
        </div>
        <div className="credits">
          Designed by <a href="">info@example.com</a>
        </div>
      </div>
    </footer>
  );
};
export default Sections;
