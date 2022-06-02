// Import data
import { dataHome } from "../../api/data-home";
import { dataAbout } from "../../api/data-about";
import { dataService } from "../../api/data-services";
import { dataPortfolio } from "../../api/data-portfolio";
import { dataTestimonials } from "../../api/data-testimonials";
import { dataBlog } from "../../api/data-blog";
import { dataContact } from "../../api/data-contact";

// Import components
import Home from "../home";
import About from "../about";
import Service from "../service";
import Portfolio from "../portfolio";
import Contact from "../contact";

// Import react hooks
import { useEffect } from "react";

export default function Content() {
  useEffect (() => {
    const contentPage = document.querySelector(".content");
    const listComponent = contentPage.childNodes;
    const listChildrenElement = document.querySelectorAll(
      ".sidebar__menu-item"
    );
    window.addEventListener("scroll", () => {
      let current = "";
      listComponent.forEach((item) => {
        const itemTop = item.offsetTop;
        const itemHeight = item.clientHeight;
        if (window.pageYOffset >= itemTop - itemHeight / 3) {
          current = item.getAttribute("id");
        }
      });
      listChildrenElement.forEach((liElement) => {
        liElement.classList.remove("active");
        if (liElement.classList.contains(`#${current}`)) {
          liElement.classList.add("active");
        }
      });
    });
  }, []);
  return (
    <div className="content">
      <Home dataHome={dataHome} />
      <About dataAbout={dataAbout} />
      <Service dataService={dataService} />
      <Portfolio data={dataPortfolio} />
      <Portfolio data={dataTestimonials} />
      <Portfolio data={dataBlog} />
      <Contact dataContact={dataContact} />
    </div>
  );
}
