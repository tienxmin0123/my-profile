// Import framework
import { useEffect } from "react";

// Import icon
import { FaMoon, FaSun } from "react-icons/fa";

export default function sidebar({ dataSidebar }) {
  const { nameAuthor, imgAuthorUrl, email, logoUrl, listComponent } =
    dataSidebar;

  useEffect(() => {
    const myBlog = document.querySelector(".my-blog");
    const btnList = myBlog.querySelector(".header__btn-switch-list");
    const btnClose = myBlog.querySelector(".header__btn-switch-close");
    const listBtnNormalMode = myBlog.querySelectorAll(".normal-mode");
    const listBtnDarkMode = myBlog.querySelectorAll('.dark-mode')

    btnList.addEventListener("click", () => {
      myBlog.classList.add("active");
    });
    btnClose.addEventListener("click", () => {
      myBlog.classList.remove("active");
    });
    listBtnNormalMode.forEach((btnNormalMode) => {
      btnNormalMode.addEventListener("click", () => {
        myBlog.classList.add("dark-mode");
      });
    });
    listBtnDarkMode.forEach((btnDarkMode) => {
      btnDarkMode.addEventListener("click", () => {
        myBlog.classList.remove("dark-mode");
      });
    });
  });
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header-logo">
          <img src={logoUrl} alt="logo" />
        </div>
        <div className="sidebar__header-icon">
          <i className="normal-mode">
            <FaMoon />
          </i>
          <i className="dark-mode">
            <FaSun />
          </i>
        </div>
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__menu-list">
          {listComponent.map((x) => {
            return (
              <li className={`sidebar__menu-item #${x.nameComponent} ${x.active ? x.active : ''}`} key={x.id}>
                <a href={`#${x.nameComponent}`} className={`sidebar__menu-item-link`}>
                  <img src={x.iconComponent} alt="logo link" />
                  <span>{x.nameComponent}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sidebar__footer">
        <div className="sidebar__footer-img">
          <img src={imgAuthorUrl} alt="author" />
        </div>
        <div className="sidebar__footer-info">
          <div className="sidebar__footer-info-name">{nameAuthor}</div>
          <a
            href="mailto:tienxmin0123@gmail.com"
            className="sidebar__footer-info-email"
            target="_blank"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
