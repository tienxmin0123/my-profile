// Import framework react

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
  return (
    <>
      <div className="service__modal-container">
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
        <div className="service__modal-btn-close">
          <AiOutlineCloseCircle />
        </div>
      </div>
    </>
  );
}
