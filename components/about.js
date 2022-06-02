// Import reveal framework
import Slide from "react-reveal/Slide";

export default function About({ dataAbout }) {
  const {
    titleAbout,
    productAbout,
    descriptionAbout,
    questionAbout,
    answerAbout,
    imgAbout,
    descImgAbout,
    listLanguages,
    btnAbout,
  } = dataAbout;

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about__title">
          <h2>{titleAbout}</h2>
        </div>
        <div className="about__content">
          <Slide left cascade>
            <div className="about__content-left">
              <div className="about__content-info">
                <div className="about__content-produce">
                  <span>{productAbout[0]}</span>
                  <h3>{productAbout[1]}</h3>
                </div>
                <div className="about__content-desc">
                  <p>{descriptionAbout}</p>
                </div>
              </div>
              <div className="about__content-my-skills">
                <div className="about__content-faq">
                  <div className="about__content-question">
                    <h3>{questionAbout}</h3>
                  </div>
                  <div className="about__content-answer">
                    <p>{answerAbout}</p>
                  </div>
                </div>
                <div className="about__content-skills">
                  <ul className="about__content-list">
                    {listLanguages.map((x) => {
                      return (
                        <li className="about__content-item" key={x.id}>
                          <div className="about__content-item-name">
                            {x.languageName || "Other"}
                          </div>
                          <div className="about__content-item-level">
                            <div
                              className="about__content-item-level-width"
                              style={{ width: x.width }}
                            ></div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="about__content-btn">
                  <a href={btnAbout.hrefBtn} >
                    {btnAbout.titleBtn}
                  </a>
                </div>
              </div>
            </div>
          </Slide>
          <Slide right cascade>
            <div className="about__content-right">
              <div className="about__content-img">
                <img src={imgAbout} alt={productAbout}></img>
                <div className="about__content-desc-img">
                  <h3>{descImgAbout[0]}</h3>
                  <span>{descImgAbout[1]}</span>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
