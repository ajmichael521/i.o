import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <img
          className="header__logo"
          src="http://i.gzn.jp/img/2017/08/30/youtube-big-changes/00.png"
          alt=""
        />
      </div>
      <div className="header__search">
        <input placeholder="Search Youtube" type="text" />

        <SearchIcon className="header__searchIcon" />
        <MicIcon className="mic" />
      </div>
      <div className="header__right">
        <LibraryAddCheckIcon className="video  right" />
        <AppsIcon className="video  right" />
        <NotificationsNoneIcon className="right" />
        <AccountCircleIcon className="right" />
      </div>
    </div>
  );
}

export default Header;
