// Import framework
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect } from "react";

// Import components
import Modal from "./modal/modal";

// Import reveal framework
import Slide from "react-reveal/Slide";

export default function service({ dataService }) {
  useEffect(() => {
    const listItem = document.querySelectorAll(".service__item");
    console.log(listItem);

    listItem.forEach((item) => {
      const modal = item.querySelector(".service__modal");
      const modalClose = item.querySelector(".service__modal-btn-close");
      const modalContainer = modal.querySelector(".service__modal-container");
      item.addEventListener("click", () => {
        listItem.forEach((anotherItem) => {
          if (item !== anotherItem) {
            modal.addEventListener("click", () => {
              modal.classList.remove("is-active");
              modalContainer.addEventListener("click", function (event) {
                event.stopPropagation();
              });
            });
          }
        });
        modal.classList.add("is-active");
      });
      document.addEventListener("keypress", (e) => {
        if (e.key === "Escape") {
          modal.classList.remove("is-active");
        }
      });
      modalClose.addEventListener("click", () => {
        modal.classList.remove("is-active");
      });
    });
  }, []);

  const { title, desc, listItem } = dataService;
  return (
    <div className="service" id="service">
      <div className="container">
        <Slide left cascade>
          <div className="service__title">
            <h2>{title}</h2>
          </div>
          <div className="service__desc">
            <p>{desc}</p>
          </div>
        </Slide>
        <div className="service__list">
          {listItem.map((item, idx) => {
            const { imgUrl, title, titleBtn, modal } = item;
            return (
              <div className="service__item" key={idx}>
                <div className="service__item-icon">
                  <img src={imgUrl} alt={title} />
                </div>
                <div className="service__item-title">
                  <h3>{title}</h3>
                </div>
                <div className="service__item-btn">
                  <span>{titleBtn}</span>
                  <i>
                    <BsArrowRightShort />
                  </i>
                </div>
                {!modal && modal !== "undefined" ? (
                  ""
                ) : (
                  <div className="service__modal">
                    <Modal dataModal={modal} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
