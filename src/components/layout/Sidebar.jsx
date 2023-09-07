"use client";
import {
  FaAngleRight,
  FaBell,
  FaBuildingLock,
  FaCircleQuestion,
  FaCommentDots,
  FaDownload,
  FaGear,
  FaTableColumns,
} from "react-icons/fa6";

const Sidebar = ({ active, togglehendelar }) => {
  return (
    <>
      <div
        className={`sidebars w-[200px] fixed top-12 z-[999] ${
          active ? "open" : ""
        }`}
      >
        <button className="toggle" onClick={togglehendelar}>
          <i className="text-[#ff328e]">
            <FaAngleRight></FaAngleRight>
          </i>
        </button>

        <div className="logo">
          <img
            src="https://bdassistant.com/assets/image/svgs/profile-user.svg"
            alt=""
          />
          <h3>Milon Roy</h3>
        </div>

        <nav>
          <div className="nav-title">Management</div>

          <ul>
            <li className="nav-item active">
              <i>
                <FaTableColumns></FaTableColumns>
              </i>
              <span>Dashbord</span>
            </li>

            <li className="nav-item">
              <i>
                <FaBell></FaBell>
              </i>
              <span>Notifications</span>
            </li>

            <li className="nav-item">
              <i>
                <FaDownload></FaDownload>
              </i>
              <span>Dawnload App</span>
            </li>

            <li className="nav-item">
              <i>
                <FaBuildingLock></FaBuildingLock>
              </i>
              <span>Privacy Policy</span>
            </li>

            <li className="nav-item">
              <i>
                <FaGear></FaGear>
              </i>
              <span>Settings</span>
            </li>
          </ul>

          <hr />

          <div className="nav-title">Supports</div>

          <ul>
            <li className="nav-item">
              <i>
                <FaCircleQuestion></FaCircleQuestion>
              </i>
              <span>Get Help</span>
            </li>

            <li className="nav-item">
              <i>
                <FaCommentDots></FaCommentDots>
              </i>
              <span>Send Feedback</span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
