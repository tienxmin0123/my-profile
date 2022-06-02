// Import React hooks
import { useEffect } from "react";

// Import reveal framework
import Slide from "react-reveal/Slide";
import Typed from "react-typed";

export default function Home({ dataHome }) {
  const {
    imgHome,
    titleHome,
    introduceHome,
    descriptionHome,
    btnHome,
    socialHome,
  } = dataHome;

  // useEffect(() => {
  //   const textElement = document.querySelector(".home__content-title h1");
  //   const text = textElement.textContent;
  //   let speed = 200;
  //   let index = 1;
  //   const writeText = () => {
  //     textElement.innerText = `${text.slice(0, index)} |`;
  //     index++;
  //     if (index > text.length) index = 1;
  //     setTimeout(writeText, speed);
  //   };
  //   writeText();
  // }, []);
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="home__content-img">
          <img src={imgHome} alt={titleHome}></img>
        </div>
        <div className="home__content-body">
          <div className="home__content-introduce">
            <h3>{introduceHome}</h3>
          </div>
          <div className="home__content-title">
            <h1>
              <Typed
                strings={[`${titleHome[0]}`, `${titleHome[1]}`]}
                typeSpeed={150}
                backSpeed={50}
                loop
              />
            </h1>
          </div>
          <div className="home__content-desc">
            <p>{descriptionHome}</p>
          </div>
          <Slide bottom cascade>
            <div className="home__content-social">
              {socialHome.map((x) => {
                return (
                  <div className="home__content-social-link" key={x.id}>
                    <a href={`https://www.${x.name}.com`}>
                      <img
                        src={`/assets/images/${x.name}.svg`}
                        alt={x.name}
                      ></img>
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="home__content-btn">
              <a href={btnHome.href}>{btnHome.name}</a>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
