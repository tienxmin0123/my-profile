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
    answerModal,
    listAnswerModal,
  } = dataModal;
  useEffect(() => {
    const items = document.querySelectorAll(".js-item");
    const modals = document.querySelectorAll(".js-modal");
    const closes = document.querySelectorAll(".js-close");
    const stops = document.querySelectorAll(".js-stop");
    ///
    function showBuyTickets(id) {
      modals[id].classList.add("is-active");
    }

    function hidenBuy(id) {
      modals[id].classList.remove("is-active");
    }

    closes.forEach((item, index) =>
      item.addEventListener("click", () => {
        hidenBuy(index);
      })
    );

    modals.forEach((item, index) =>
      item.addEventListener("click", () => {
        hidenBuy(index);
      })
    );

    stops.forEach((item, index) =>
      item.addEventListener("click", (Event) => {
        Event.stopPropagation();
      })
    );

    items.forEach((item, index) => {
      item.addEventListener("click", () => {
        showBuyTickets(index);
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
                <p>{answerModal[0]}</p>
              </div>
              <div className="service__modal-answer-list">
                <ul>
                  {listAnswerModal.map((x, idx) => {
                    return (
                      <li key={idx}>
                        <p>{x}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="service__modal-answer-secondary">
                <p>{answerModal[1]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service__modal-btn-close  js-close" >
          <AiOutlineCloseCircle />
        </div>
      </div>
    </>
  );
}
