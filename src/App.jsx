import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import { close } from "./assets/icons";
import Clients from "./components/Clients";
import NewArrival from "./sections/NewArrival";
import TopSelling from "./sections/TopSelling";
import Browse from "./sections/Browse";
import Testimonials from "./sections/Testimonials";
import Subscribe from "./sections/Subscribe";
import { Footer } from "./components";

const App = () => {
  return (
    <main className="relative max-container">
      
      <div className="w-full bg-black sm:h-[38px] h-[34px] sm:py-[9.5px] py-[8.5px]">
        <div className="flex justify-between items-center padding-x">
          <div className="flex-grow flex justify-center items-center">
            <p className="font-archivo text-sm text-white font-thin sm:text-[14px] text-[12px]">
              Sign up and get 20% off to your first order. &nbsp;
              <span className="font-light underline max-ss:hidden">
                Sign Up Now
              </span>
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button>
              <img src={close} alt="close" />
            </button>
          </div>
        </div>
      </div>

      <section>
        <NavBar />
      </section>

      <section id="home" className="flex md:flex-row flex-col padding-x">
        <Hero />
      </section>

      <section>
        <Clients />
      </section>

      <section className="padding-x">
        <NewArrival />
      </section>

      <section className="padding-x">
        <TopSelling />
      </section>

      <section className="padding-x">
        <Browse />
      </section>

      <section className="padding-x">
        <Testimonials />
      </section>

      <section className="padding-x sm:pt-20 pt-16">
        <Subscribe />
      </section>

      <section className="padding-x sm:pt-20 pt-16">
        <Footer />
      </section>
    </main>
  );
};

export default App;
