import React, { useState } from "react";
import { BsBell, BsListUl } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import moment from "moment";
import { Link } from "react-router-dom";
import AdminInfo from "./AdminInfo";
import toast, { Toaster } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import {
  get_notification,
  seen_notification,
  delete_notification,
} from "../../store/actions/Dashborad/dashboardAction";
import { useEffect } from "react";

const DashboradNavbar = ({ openLeftMenu }) => {
  const dispath = useDispatch();
  const { userInfo } = useSelector((state) => state.adminReducer);
  const { notifications, successMessage } = useSelector(
    (state) => state.dashboardIndex
  );
  const [profileModelShow, setProfileModelShow] = useState(false);
  const [nModelShow, setNModelShow] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarStyles, setSidebarStyles] = useState({
    width: "275px",
  });

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
  useEffect(() => {
    dispath(get_notification(userInfo.id));
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispath({
        type: "N_SUCCESS_MESSAGE_CLEAR",
      });
      dispath(get_notification(userInfo.id));
    }
  }, [successMessage]);

  const seenNotification = (id) => {
    dispath(seen_notification(id));
  };

  return (
    <>
      <div className="dashborad-navbar">
        <Toaster
          position={"bottom-center"}
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "15px",
            },
          }}
        />
        <div className="dashborad-navbar-right-side">
          <button
            onClick={openLeftMenu}
            className="w3-button w3-large w3-left w3-margin toggle-button"
          >
            &#9776;
          </button>
          <div className="website-name">
            <h2>
              <Link to={`/`}>BlogifyBlog</Link>
            </h2>
          </div>
          <div className="category">
            <ul>
              <li className="cat">
                <Link to={`/artical/category/Education`}>Education</Link>
              </li>
              <li className="cat">
                <Link to={`/artical/category/Technology`}>Technology</Link>
              </li>
              <li className="cat">
                <Link to={`/artical/category/Business`}>Business</Link>
              </li>
              <li className="cat">
                <Link to={`/artical/category/Entertainment`}>
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to={`/WriteForUs`}>Write For Us</Link>
              </li>
              <li>
                <Link to={`/Contact`}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="user">
            <div className="natification-message">
              <div className="natification">
                <div onClick={nModel}>
                  <span>
                    <BsBell />
                  </span>
                  {notifications.length > 0 && (
                    <div className="nCount">{notifications.length}</div>
                  )}
                </div>
                <div className={`natifications ${nModelShow ? "show" : ""}`}>
                  <ul>
                    {notifications.map((n, i) => (
                      <li className={n.status === "seen" ? "" : "bg"} key={i}>
                        <Link
                          onClick={() => seenNotification(n._id)}
                          to={`/artical/details/${n.slug}`}
                        >
                          {n.subject}
                        </Link>
                        <div
                          onClick={() => dispath(delete_notification(n._id))}
                          className="nDelete"
                        >
                          <FaTrash />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <label onClick={profileModel} htmlFor="adminInfo">
              <img src={userInfo.image} alt="" />
            </label>
            <div
              className="name-time"
              onClick={profileModel}
              htmlFor="adminInfo"
            >
              <h3>{userInfo.name}</h3>
              <span>{moment(userInfo.createdAt).format("ll")}</span>
            </div>
          </div>
        </div>
      </div>
      <AdminInfo profileModelShow={profileModelShow} userInfo={userInfo} />
    </>
  );
};

export default DashboradNavbar;
