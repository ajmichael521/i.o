import Home from "@material-ui/icons/Home";
import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ExploreIcon from "@material-ui/icons/Explore";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
import HistoryIcon from "@material-ui/icons/History";
import YouTubeIcon from "@material-ui/icons/YouTube";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import SportsIcon from "@material-ui/icons/Sports";
import SettingsIcon from "@material-ui/icons/Settings";
import ReportIcon from "@material-ui/icons/Report";
import HelpIcon from "@material-ui/icons/Help";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Body from "./Body";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Checkout">
            <Header />
            {/* <Footer className="app__footer" />*
            <Sidebar title="Home" Icon={<Home />} />
            <Sidebar title="Explore" Icon={<ExploreIcon />} />
            <Sidebar title="Subscription" Icon={<SubscriptionsIcon />} />
            <div className="line"></div>
            <Sidebar title="Library" Icon={<LibraryAddIcon />} />
            <Sidebar title="History" Icon={<HistoryIcon />} />
            <Sidebar title="Your Videos" Icon={<YouTubeIcon />} />
            <Sidebar title="Watch Later" Icon={<WatchLaterIcon />} />
            <Sidebar title="Liked Videos" Icon={<ThumbUpIcon />} />
            <div className="line"></div>
            <h2>Subscriptions</h2>
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <div className="line"></div>
            <h2>More From Youtube</h2>
            <Sidebar title="Youtube Premium" Icon={<YouTubeIcon />} />
            <Sidebar title="Gaming" Icon={<SportsEsportsIcon />} />
            <Sidebar title="Sports" Icon={<SportsIcon />} />
            <div className="line"></div>
            <Sidebar title="Settings" Icon={<SettingsIcon />} />
            <Sidebar title="Report" Icon={<ReportIcon />} />
            <Sidebar title="Help" Icon={<HelpIcon />} />
  <Sidebar title="Send feedback" Icon={<ArrowForwardIcon />} />*/}
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            {/* <Footer className="app__footer" />*/}
            <Sidebar title="Home" Icon={<Home />} />
            <Sidebar title="Explore" Icon={<ExploreIcon />} />
            <Sidebar title="Subscription" Icon={<SubscriptionsIcon />} />
            <div className="line"></div>
            <Sidebar title="Library" Icon={<LibraryAddIcon />} />
            <Sidebar title="History" Icon={<HistoryIcon />} />
            <Sidebar title="Your Videos" Icon={<YouTubeIcon />} />
            <Sidebar title="Watch Later" Icon={<WatchLaterIcon />} />
            <Sidebar title="Liked Videos" Icon={<ThumbUpIcon />} />
            <div className="line"></div>
            <h2>Subscriptions</h2>
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <Sidebar title="Adam Khoo" Icon={<AccountCircleIcon />} />
            <div className="line"></div>
            <h2>More From Youtube</h2>
            <Sidebar title="Youtube Premium" Icon={<YouTubeIcon />} />
            <Sidebar title="Gaming" Icon={<SportsEsportsIcon />} />
            <Sidebar title="Sports" Icon={<SportsIcon />} />
            <div className="line"></div>
            <Sidebar title="Settings" Icon={<SettingsIcon />} />
            <Sidebar title="Report" Icon={<ReportIcon />} />
            <Sidebar title="Help" Icon={<HelpIcon />} />
            <Sidebar title="Send feedback" Icon={<ArrowForwardIcon />} />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
