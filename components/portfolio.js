import React, { Fragment } from "react";

// Import slick slider framework
import Slider from "react-slick";
import Slide from "react-reveal/Slide";
import ReactTooltip from "react-tooltip";

// Import slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Modal from "../components/modal/modal";

export default function Portfolio({ data }) {
  const { title, desc, listItem, quotesImg, componentName } = data;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  };
  const settingsTestimonials = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: false,
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
        {componentName === "blog" ? (
          <>
            {listItem.map((item) => (
              <div className={`service__modal js-modal ${componentName}`}>
                <Modal dataModal={item.modal} />
              </div>
            ))}
          </>
        ) : (
          ""
        )}
        <div className="portfolio__title">
          <h2>{title}</h2>
        </div>
        <div className="portfolio__desc">
          <p>{desc}</p>
        </div>
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
                  linkSocial,
                } = item;
                return (
                  <React.Fragment key={id}>
                    <div
                      data-tip={
                        componentName === "portfolio" ? "View More" : ""
                      }
                      className={`portfolio__item ${
                        componentName === "blog" ? "js-item" : ""
                      }`}
                    >
                      {componentName === "portfolio" ? (
                        <ReactTooltip
                          place="bottom"
                          type="light"
                          effect="float"
                        />
                      ) : (
                        ""
                      )}
                      {componentName === "portfolio" ? (
                        <a href={linkSocial}>
                          <div className="portfolio__img">
                            <img src={imgUrl} alt="img slider"></img>
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
                            <span className="portfolio__item-date">{date}</span>
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
                            <img src={imgUrl} alt="img slider"></img>
                          </div>
                          <div className="portfolio__item-info">
                            <div className="portfolio__item-author">
                              {authorName}
                            </div>
                            <div className="portfolio__item-job">{job}</div>
                          </div>
                        </div>
                        <div className="portfolio__item-icon">
                          <img src={quotesImg} alt="quotes img"></img>
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
      </div>
    </div>
  );
}
