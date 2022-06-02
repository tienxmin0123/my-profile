// Import slick slider framework
import Slide from "react-reveal/Slide";

export default function Contact({ dataContact }) {
  const { title, description, mapUrl, contact, contactForm } = dataContact;
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact__title">
          <h2>{title}</h2>
        </div>
        <div className="contact__desc">
          <p>{description}</p>
        </div>
        <Slide left cascade>
          <div className="contact__list">
            {contact.map((item) => {
              return (
                <div className="contact__item" key={item.id}>
                  <div className="contact__item-icon">
                    <img src={item.imgMethod} alt={item.method} />
                  </div>
                  <div className="contact__item-content">
                    <div className="contact__item-title">
                      <h3>{item.method}</h3>
                    </div>
                    <div className="contact__item-list-method">
                      <ul>
                        {item.listMethods.map((method, idx) => {
                          if (item.className === "contact__item-phone") {
                            return (
                              <li key={idx}>
                                <a
                                  className={item.className}
                                  href={`Tel: ${method}`}
                                >
                                  {method}
                                </a>
                              </li>
                            );
                          } else if (item.className === "contact__item-email") {
                            return (
                              <li key={idx}>
                                <a
                                  className={item.className}
                                  href={`mailto: ${method}`}
                                >
                                  {method}
                                </a>
                              </li>
                            );
                          } else {
                            return (
                              <li key={idx}>
                                <a href={method}>{method}</a>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Slide>
        <div className="contact__mainpart">
          <div className="contact__form">
            <div className="contact__title-form">
              <span>{contactForm.titleForm[0]}</span>
              <h3>{contactForm.titleForm[1]}</h3>
            </div>
            <form action="#">
              {contactForm.inputs.map((input) => {
                return input.type === "text" ? (
                  <div className="contact__form-group" key={input.id}>
                    <input type={input.type} placeholder={input.placeholder} />
                  </div>
                ) : (
                  <div className="contact__form-btn" key={input.id}>
                    <button type={input.type}>{input.value}</button>
                  </div>
                );
              })}
            </form>
          </div>
          <div className="contact__map">
            <iframe
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
