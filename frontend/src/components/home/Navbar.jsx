import React, { useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { BsListUl } from "react-icons/bs";
import { useSelector } from "react-redux";
import AdminInfo from "../dashborad/AdminInfo";
import { Helmet } from "react-helmet";

const Navbar = ({ nav }) => {
  const [profileModelShow, setProfileModelShow] = useState(false);
  const [nModelShow, setNModelShow] = useState(false);
  const { userInfo } = useSelector((state) => state.adminReducer);

  const profileModel = () => {
    if (profileModelShow) {
      setProfileModelShow(false);
    } else {
      setNModelShow(false);
      setProfileModelShow(true);
    }
  };
  const nModel = () => {
    if (nModelShow) {
      setNModelShow(false);
    } else {
      setProfileModelShow(false);
      setNModelShow(true);
    }
  };

  return (
    <>
     <Helmet>
                <title>BlogifyBlog - Home</title>
                <meta name="description" content="Explore a diverse world of knowledge on BlogifyBlog. Immerse yourself in a vast array of categories and tags, covering topics from technology and science to health, business, and entertainment. Read, learn, and contribute by publishing your own articles. Join our thriving community where curiosity meets expertise. Start your journey with BlogifyBlog today!" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="blog, articles, categories, tags, trends, insights, community, BlogifyBlog, Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media" />
                <meta name="author" content="BlogifyBlog" />
                <meta property="og:title" content="BlogifyBlog - Home" />
                <meta property="og:description" content="Explore a diverse world of knowledge on BlogifyBlog. Immerse yourself in a vast array of categories and tags, covering topics from technology and science to health, business, and entertainment. Read, learn, and contribute by publishing your own articles. Join our thriving community where curiosity meets expertise. Start your journey with BlogifyBlog today!" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.blogifyblog.com"/>
                <meta property="og:image" content="https://www.blogifyblog.com/app-image.png"/>
                <meta property="article:tag" content="Education, Technology,  Science, Religious, Health, Fitness, Business, Finance, Food, Cooking, Entertainment, Sports, Travel, Social Media" />
        </Helmet>
    
    <div ref={nav} id="navbar" className="navbar">
      <div className="container">
        <div className="row">
          <input type="checkbox" id="toggle" />
          <div className="col-4">
            <div className="image-menubar">
              <Link className="image" to="/">
               <h2>BlogifyBlog</h2> 
              </Link>
              <label className="menu_icon" htmlFor="toggle">
                <BsListUl />
              </label>
            </div>
          </div>
          <div className="col-8">
            <ul className="link-list toggle">
            <li className="link-item">
                <Link to="/">Home</Link>
              </li>
              <li className="link-item">
                <Link to="/artical/category/Education">Education</Link>
              </li>
              <li className="link-item">
                <Link to="/artical/category/Technology">Technology</Link>
              </li>
              <li className="link-item">
                <Link to="/artical/category/Business">Business</Link>
              </li>
              <li className="link-item">
                <Link to="/artical/category/News and Current Event">News</Link>
              </li>
              {/* <li className="link-item">
                <Link to="/artical/category/Health and Fitness">Health</Link>
              </li> */}
              <li className="link-item">
                <Link to="/artical/category/Religious">Religous</Link>
              </li>
              <li className="link-item">
                <Link to="/writeforus">WriteForUs</Link>
              </li>
              <li className="link-item">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="link-item">
                
                {userInfo && userInfo.role === "sub admin" && userInfo.accessStatus==="unblock" ? (
                  <>
                    
                    <div className="profile-details" onClick={profileModel}>
      <label htmlFor="adminInfo">
        <img src={userInfo.image} alt="user-image" />
      </label>
      <div className="name-time">
        <h3>{userInfo.name}</h3>
        <span>{moment(userInfo.createdAt).format("ll")}</span>
      </div>
      <AdminInfo profileModelShow={profileModelShow} userInfo={userInfo} />
    </div>
                  </>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
