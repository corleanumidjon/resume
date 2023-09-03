import React from "react";
import { Link } from "react-router-dom";
import Container from "../../Utils/Container/Container";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useTranslation } from "react-i18next";
import PrayerTimes from "../../Assets/Imgs/Prayer-times.png";
import CRMschool from "../../Assets/Imgs/CRM-school.png";
import Chat from "../../Assets/Imgs/Chat.png";
import ToDo from "../../Assets/Imgs/To-Do-List.png";
import Clock from "../../Assets/Imgs/Clock.png";
import Calculator from "../../Assets/Imgs/Calc-Pro.png";
import ProductsUsers from "../../Assets/Imgs/Products-and-Users.png";
import RickMorty from "../../Assets/Imgs/Rick-and-Morty.png";
import WhoGoesFirst from "../../Assets/Imgs/Who-goes-first.png";
import PhonesCart from "../../Assets/Imgs/Trolley-of-Phones.png";
import Slider from "../../Assets/Imgs/Slider.png";
import GitHub from "../../Assets/Imgs/Pagination.png";
import "./Portfolio.scss";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section id="portfolio" className="portfolio">
        <h2 className="portfolio__title">{t("portfolio-title")}</h2>
        <ul className="portfolio__list">
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://wondrous-boba-0626c0.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Prayer Times</h3>
                <img
                  className="portfolio__img"
                  src={PrayerTimes}
                  alt="Daily-Prayer-Times"
                />
                <p className="portfolio__text">{t("portfolio-PrayerTimes")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://64b7ebb944ae94172c1a3974--steady-rugelach-8bd1c5.netlify.app/" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">CRM-school</h3>
                <img
                  className="portfolio__img"
                  src={CRMschool}
                  alt="CRM-school"
                />
                <p className="portfolio__text">{t("portfolio-crm")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://rad-sable-eb0656.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">PIZZA</h3>
                <img
                  className="portfolio__img"
                  src={Chat}
                  alt="Chat with Celebrities"
                />
                <p className="portfolio__text">{t("portfolio-chat")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://64b7e97561cdf41598a08476--bucolic-sprinkles-9523dd.netlify.app/" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">OLX</h3>
                <img className="portfolio__img" src={ToDo} alt="To-Do List" />
                <p className="portfolio__text">{t("portfolio-todo")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://64b7f8be9617661f4d3308f7--teal-marshmallow-34c5a2.netlify.app/" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Academy</h3>
                <img className="portfolio__img" src={Clock} alt="Clock" />
                <p className="portfolio__text">{t("portfolio-clock")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://cosmic-churros-1c8d98.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Calculator</h3>
                <img
                  className="portfolio__img"
                  src={Calculator}
                  alt="Calculator"
                />
                <p className="portfolio__text">{t("portfolio-calculator")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://stupendous-torte-cb7ee1.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Products and Users</h3>
                <img
                  className="portfolio__img"
                  src={ProductsUsers}
                  alt="Products-and-Users"
                />
                <p className="portfolio__text">
                  {t("portfolio-ProductsUsers")}
                </p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://musical-cucurucho-012336.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Rick and Morty</h3>
                <img
                  className="portfolio__img"
                  src={RickMorty}
                  alt="Rick-and-Morty"
                />
                <p className="portfolio__text">{t("portfolio-RickMorty")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://venerable-seahorse-2a616a.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Travel</h3>
                <img
                  className="portfolio__img"
                  src={WhoGoesFirst}
                  alt="Who-goes-first"
                />
                <p className="portfolio__text">{t("portfolio-WhoGoesFirst")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://64b7ed5bd05a5c125b719dc1--bejewelled-pasca-ec5c27.netlify.app/"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Hotel</h3>
                <img
                  className="portfolio__img"
                  src={PhonesCart}
                  alt="Trolley-of-Phones"
                />
                <p className="portfolio__text">{t("portfolio-phones")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link to="https://regal-semifreddo-f964e8.netlify.app" target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">Slider</h3>
                <img className="portfolio__img" src={Slider} alt="Slider" />
                <p className="portfolio__text">{t("portfolio-slider")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="flipInX">
            <Link
              to="https://64f3f6e77209f0507fb91c8d--fancy-tiramisu-b556a6.netlify.app"
              target="_blank">
              <li className="portfolio__item">
                <h3 className="portfolio__l-title">YOU TUBE</h3>
                <img
                  className="portfolio__img"
                  src={GitHub}
                  alt="Pagination-GitHub"
                />
                <p className="portfolio__text">{t("portfolio-github")}</p>
              </li>
            </Link>
          </AnimationOnScroll>
        </ul>
      </section>
    </Container>
  );
};

export default Portfolio;
