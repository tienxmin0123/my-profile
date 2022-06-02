// Import framework react

// Import framework icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// Import data

export default function ModalBlog({ dataModal }) {
  console.log(dataModal);
  dataModal.forEach((item, idx) => {
    const { id, titleItem, imgUrl, date, style, modal } = dataModal[idx];
    return (
      <div className="service__modal-container">
        <div className="service__modal-img">
          <img src={imgUrl} alt={imgUrl}></img>
        </div>
        <div className="service__modal-title">
          <h3>{titleItem}</h3>
        </div>
        <div className="service__modal-btn-close">
          <AiOutlineCloseCircle />
        </div>
      </div>
    );
  });
}
