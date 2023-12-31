import React from "react";
import Container from "../../Utils/Container/Container";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id="contact" className="contact">
        <div className="contact__titles">
          <h2 className="contact__title">{t("contact-title")}</h2>
          <p className="contact__text">{t("contact-text")}</p>
        </div>
        <AnimationOnScroll animateIn="fadeInUp">
          <div className="contact__btns">
            <Link to="mailto: nayimovumidjon44@gmail.com" target="_blank">
              <button className="contact__btn">
                <MdEmail className="contact__icon" />{" "}
                nayimovumidjon44@gmail.com
              </button>
            </Link>
            <Link to="tel: +998912477670" target="_blank">
              <button className="contact__btn">
                <FaPhoneAlt className="contact__icon-tel" /> (91) 247-76-70 
              </button>
            </Link>
            <Link to="https://t.me/umidjon7670" target="_blank">
              <button className="contact__btn">
                <FaTelegramPlane className="contact__icon" /> Umidjon
                Nayimov
              </button>
            </Link>
          </div>
        </AnimationOnScroll>
      </section>
    </Container>
  );
};

export default Contact;
