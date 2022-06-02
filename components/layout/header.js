// Import icon
import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsList } from "react-icons/bs";


export default function Header({ dataHeader }) {
  let { logoUrl } = dataHeader;
  return (
    <div className="sidebar header">
      <div className="sidebar__header-logo">
        <img src={logoUrl} alt="logo" />
      </div>
      <div className="sidebar__header-icon">
        <div className="sidebar__header-switch-mode">
          <i className="normal-mode">
            <FaMoon />
          </i>
          <i className="dark-mode">
            <FaSun />
          </i>
        </div>
        <div className="header__btn-switch">
          <i className = 'header__btn-switch-close'><AiOutlineCloseCircle/></i>
          <i className = 'header__btn-switch-list'><BsList/></i>
        </div>
      </div>
    </div>
  );
}
