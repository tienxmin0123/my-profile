// Import framework react

// Import framework icons
import { AiOutlineCloseCircle } from "react-icons/ai";

// Import data

export default function modalBlog({ dataModal }) {
  const {id,titleItem,imgUrl,date,style
  } = dataModal;
  return (
    <>
      <div className="service__modal-container">
        <div className="service__modal-img">
          <img src={imgUrl} alt={imgUrl} />
        </div>
        <div className="service__modal-title">
          <h3>{imgUrl}</h3>
        </div>
        <div className="service__modal-btn-close">
          <AiOutlineCloseCircle />
        </div>
      </div>
    </>
  );
}
