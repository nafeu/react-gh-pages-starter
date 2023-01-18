import React from 'react';
import { useNavigate } from "react-router-dom";

import './index.css';

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
    <div onClick={handleClick} className="cursor-pointer">[YOUR_APP_NAME]</div>
  );
}

export default Logo;
