import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout_user } from "../../store/actions/authAction";

const AdminInfo = ({ profileModelShow, userInfo }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const isDashboard = location.pathname === "/dashborad";
  const { subAdmins, subAdminCount } = useSelector(
    (state) => state.dashboardIndex
  );

  const logout = () => {
    dispatch(logout_user({ role: userInfo.role, history }));
  };

  return (
    <div className={`adminInfo ${profileModelShow ? "show" : ""}`}>
      <div className="image-email">
        <img src={userInfo.image} alt="" />
        <span>{userInfo.email}</span>
      </div>

      <ul>
        <li>
          {userInfo.role === "sub admin" ? (
            <Link to={`/dashborad/sub-admin-profile/${userInfo.email}`}>
              Profile
            </Link>
          ) : (
              <Link to={`/dashborad/sub-admin-profile/`}>
                Profile
              </Link>
          )}
        </li>
        <li>
          {isDashboard ? (
            <Link to="/">View Site</Link>
          ) : (
            <Link to="/dashborad">Dashboard</Link>
          )}
        </li>
        <li onClick={logout}>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminInfo;
