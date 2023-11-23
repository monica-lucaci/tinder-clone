import React from "react";
import logo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";

const Nav = ({ minimal, setShowModal, showModal,setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false)
  };

  const authToken = true;
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : logo} />
      </div>

      {!authToken && !minimal && (
        <button onClick={handleClick}  disabled={showModal} className="nav-button">
          Log in
        </button>
      )}
    </nav>
  );
};

export default Nav;
