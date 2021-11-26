import React from "react";
import "./Topbar.css";
import dp from "./dp.jpg"
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from '@mui/icons-material/Settings';
function Topbar() {
  return (
    <div className="topbar">
    <div className="topbarWrapper">
      <div className="topLeft">
        <span className="logo">lamaadmin</span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
          <CircleNotificationsIcon />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <LanguageIcon />
          <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
          <SettingsIcon />
        </div>
        <img src={dp} alt="" className="topAvatar" />
      </div>
    </div>
  </div>
  );
}

export default Topbar;
