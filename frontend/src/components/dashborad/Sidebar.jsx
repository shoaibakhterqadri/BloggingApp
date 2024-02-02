import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import {
  FaEye,
  FaPlusCircle,
  FaRegCaretSquareRight,
  FaTag,
} from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { BsBell, BsListUl } from "react-icons/bs";
import DashboradNavbar from "./DashboradNavbar";
import { useSelector } from "react-redux";

const Sidebar = ({ openLeftMenu }) => {
  const [sidebarStyles, setSidebarStyles] = useState({
    width: "250px",
  });

  const { userInfo } = useSelector((state) => state.adminReducer);

  function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }

  function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }

  return (
    <>
      <DashboradNavbar openLeftMenu={openLeftMenu} />

      <div
        className={`dashborad-main-content-sidebar w3-sidebar w3-bar-block w3-card w3-animate-left  `}
        style={{ display: "none" }}
        id="leftMenu"
      >
        <div className="heading">
          <h2
            className="w3-button w3-large w3-left w3-margin toggle-button"
            onClick={closeLeftMenu}
          >&#9776;</h2>
          <label className="bar" htmlFor="sidebar">
            <span>
              <BsListUl />
            </span>
          </label>
          <h3>
            <Link to={`/`}>BlogifyBlog</Link>
          </h3>
        </div>

        <ul>
          <input type="checkbox" id="article" />
          <input type="checkbox" id="category" />
          <input type="checkbox" id="tag" />
          <input type="checkbox" id="user" />
          <li>
            <Link className="link" to="/dashborad">
              <label>
                <h3>
                  <span>
                    <AiFillDashboard />
                  </span>
                  <span>Dashborad</span>
                </h3>
              </label>
            </Link>
          </li>
          <li>
            <label htmlFor="article">
              <h3>
                <span>
                  <RiArticleLine />
                </span>
                <span>Article</span>
              </h3>
              <span className="right_icon1">
                <BsChevronRight />
              </span>
            </label>
            <div className="article_category">
              <Link to="/dashborad/all-article">
                <span>
                  <FaEye />
                </span>
                <span>All Article</span>
              </Link>
              <Link to="/dashborad/article-add">
                <span>
                  <FaPlusCircle />
                </span>
                <span>Add Article</span>
              </Link>
            </div>
          </li>
          <li>
            <label htmlFor="category">
              <h3>
                <span>
                  <FaRegCaretSquareRight />
                </span>
                <span>Category</span>
              </h3>
              <span className="right_icon2">
                <BsChevronRight />
              </span>
            </label>
            <div className="category_category">
              <Link to="/dashborad/all-category">
                <span>
                  <FaEye />
                </span>
                <span>All Category</span>
              </Link>
              {userInfo.role === "admin" && (
                <Link to="/dashborad/add-category">
                  <span>
                    <FaPlusCircle />
                  </span>
                  <span>Add Category</span>
                </Link>
              )}
            </div>
          </li>
          <li>
            <label htmlFor="tag">
              <h3>
                <span>
                  <FaTag />
                </span>
                <span>Tag</span>
              </h3>
              <span className="right_icon3">
                <BsChevronRight />
              </span>
            </label>
            <div className="tag_category">
              <Link to="/dashborad/all-tag">
                <span>
                  <FaEye />
                </span>
                <span>All Tag</span>
              </Link>
              {userInfo.role === "admin" && (
                <Link to="/dashborad/add-category">
                  <span>
                    <FaPlusCircle />
                  </span>
                  <span>Add Tag</span>
                </Link>
              )}
            </div>
          </li>
          <li>
            <Link to="/dashborad/all-sub-admin">
              <label>
                <h3>
                  <span>
                    <FaEye />
                  </span>
                  <span>All sub-admin</span>
                </h3>
              </label>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
