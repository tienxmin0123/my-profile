import React, { Fragment } from "react";

// Import slick slider framework
import Slider from "react-slick";
import Slide from "react-reveal/Slide";

// Import slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Portfolio({ data }) {
  const { title, desc, listItem, quotesImg, componentName } = data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const settingsTestimonials = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div
      className={`${
        componentName === "portfolio" ? "" : componentName
      } portfolio`}
      id={componentName}
    >
      <div className="container">
        <div className="portfolio__title">
          <h2>{title}</h2>
        </div>
        <div className="portfolio__desc">
          <p>{desc}</p>
        </div>
        <Slide left cascade>
          <div className="portfolio__slicks">
            {componentName === "portfolio" || componentName === "blog" ? (
              <Slider {...settings}>
                {listItem.map((item) => {
                  const {
                    id,
                    titleItem,
                    imgUrl,
                    date,
                    style,
                    authorName,
                    job,
                    modal,
                  } = item;
                  return (
                    <React.Fragment key={id}>
                      <div className="portfolio__item">
                        {componentName === "portfolio" ? (
                          <a href={`#${componentName}`}>
                            <div className="portfolio__img">
                              <img src={imgUrl} alt="img slider" />
                            </div>
                          </a>
                        ) : (
                          <div className="portfolio__img">
                            <img src={imgUrl} alt="img slider" />
                          </div>
                        )}
                        {componentName === "blog" ? (
                          <div className="portfolio__item-info">
                            <div className="portfolio__item-new-details">
                              <span className="portfolio__item-date">
                                {date}
                              </span>
                              <span className="portfolio__item-style">
                                {style}
                              </span>
                            </div>
                            <div className="portfolio__item-title">
                              <h3>{titleItem}</h3>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}
              </Slider>
            ) : (
              <Slider {...settingsTestimonials}>
                {listItem.map((item) => {
                  const {
                    id,
                    titleItem,
                    imgUrl,
                    date,
                    style,
                    authorName,
                    description,
                    job,
                    modal,
                  } = item;
                  return (
                    <React.Fragment key={id}>
                      <div className="portfolio__item">
                        <div className="portfolio__item-top">
                          <div className="portfolio__item-author">
                            <div className="portfolio__img">
                              <img src={imgUrl} alt="img slider" />
                            </div>
                            <div className="portfolio__item-info">
                              <div className="portfolio__item-author">
                                {authorName}
                              </div>
                              <div className="portfolio__item-job">{job}</div>
                            </div>
                          </div>
                          <div className="portfolio__item-icon">
                            <img src={quotesImg} alt="quotes img" />
                          </div>
                        </div>
                        <div className="portfolio__item-desc">
                          <p>{description}</p>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
              </Slider>
            )}
          </div>
        </Slide>
      </div>
    </div>
  );
}