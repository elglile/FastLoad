import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { MdMenu } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";

const Sidebar = () => {
  // State to track the current icon (initially MdMenu)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggleBtnIcon, setToggleBtnIcon] = useState(<MdMenu size={40} />);

  const toggleMenu = () => {
    // Toggle the dropdown menu and the icon
    setIsMenuOpen(!isMenuOpen);
    setToggleBtnIcon(
      isMenuOpen ? <MdMenu size={45} /> : <BiMenuAltRight size={45} />
    );
  };

  useEffect(() => {
    const btnMnu = document.querySelector(".btn-mnu");
    const dropDownMenu = document.querySelector(".dropdown_menu");

    const handleMenuClick = () => {
      dropDownMenu.classList.toggle("open");
    };

    btnMnu.addEventListener("click", handleMenuClick);

    return () => {
      btnMnu.removeEventListener("click", handleMenuClick);
    };
  }, []);

  return (
    <>
      <header className="headerSidbar">
        <div className="navbar">
          <div className="logo">
            <img src={assets.Logo} width={120} alt="" />
          </div>
          <div className="desktop_menu">
            <ul className="menu-links">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#Sevice">Sevices</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <a className="btn-getstarted bnt" href="">
            Get Started
          </a>
          <div className="mobil-menu">
            {/* Icon toggles between MdMenu and MdClose */}
            <div className="btn-mnu" onClick={toggleMenu}>
              {toggleBtnIcon}
            </div>
            <a className="btn-getstarted btn_update" href="">
              Get Started
            </a>
          </div>
        </div>
        <div
          className={`dropdown_menu ${isMenuOpen ? "open" : ""}`}
          style={{ backdropFilter: " blur(20px)" }}
        >
          <ul className="menu-links" style={{ margin: "0", padding: "0" }}>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Sevice">Sevices</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
