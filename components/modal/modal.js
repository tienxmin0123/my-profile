// Import react hooks
import { useEffect } from "react";

// Import framework icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// Import data

export default function Modal({ dataModal }) {
  const {
    imgUrlModal,
    titleModal,
    questionModal,
    descModal,
    descModalBottom,
    answerModal,
    listAnswerModal,
    date,
    style,
    actModal,
    socialModalIcon,
  } = dataModal;
  useEffect(() => {
    const items = document.querySelectorAll(".js-item");
    const modals = document.querySelectorAll(".js-modal");
    const closes = document.querySelectorAll(".js-close");
    const stops = document.querySelectorAll(".js-stop");
    ///
    function showModal(id) {
      modals[id].classList.add("is-active");
    }

    function hiddenModal(id) {
      modals[id].classList.remove("is-active");
    }

    closes.forEach((item, index) =>
      item.addEventListener("click", () => {
        hiddenModal(index);
      })
    );

    modals.forEach((item, index) =>
      item.addEventListener("click", () => {
        hiddenModal(index);
      })
    );

    stops.forEach((item, index) =>
      item.addEventListener("click", (Event) => {
        Event.stopPropagation();
      })
    );

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        showModal(index);
      });
    });
  }, []);
  return (
    <>
      <div className="service__modal-container js-stop">
        <div className="service__modal-content">
          <div className="service__modal-img">
            <img src={imgUrlModal} alt={titleModal}></img>
          </div>
          <div className="service__modal-title">
            {(date && date !== "undefined") ||
            (style && style !== "undefined") ? (
              <div className="portfolio__item-new-details">
                <span className="portfolio__item-date">{date}</span>
                <span className="portfolio__item-style">{style}</span>
              </div>
            ) : (
              ""
            )}
            <h3>{titleModal}</h3>
          </div>
          <div className="service__modal-desc">
            {descModal.map((x, idx) => (
              <p key={idx}>{x}</p>
            ))}
          </div>
          <div className="service__modal-faq">
            <div className="service__modal-question">
              <h3>{questionModal}</h3>
            </div>
            <div className="service__modal-answer">
              <div className="service__modal-answer-primary">
                {actModal && actModal !== "undefined" ? (
                  <div className="service__modal-quotes">
                    <p>{answerModal.map((item) => item)}</p>
                  </div>
                ) : (
                  <p>{answerModal[0]}</p>
                )}
              </div>
              {!questionModal && questionModal !== "undefined" ? (
                <div className="service__modal-answer-list">
                <ul>
                  {listAnswerModal && listAnswerModal !== "undefined"
                    ? listAnswerModal.map((x, idx) => {
                        return (
                          <li key={idx}>
                            <p>{x}</p>
                          </li>
                        );
                      })
                    : ""}
                </ul>
              </div>
              ) : ''}
              <div className="service__modal-answer-secondary">
                <p>{actModal && actModal !== "undefined" ? descModalBottom.map(item => item) : answerModal[1]}</p>
              </div>
            </div>
          </div>
          {actModal && actModal !== "undefined" ? (
            <div className="service__modal-social">
              <div className="service__modal-social-action">
                <span>{actModal}</span>
              </div>
              <div className="service__modal-social-list">
                <ul>
                  {socialModalIcon.map((item) => (
                    <li key={item.id}>
                      <a href={`https://${item.name}.com`}>
                        <img src={item.url} alt={item.name}></img>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="service__modal-btn-close  js-close">
          <AiOutlineCloseCircle />
        </div>
      </div>
    </>
  );
}
