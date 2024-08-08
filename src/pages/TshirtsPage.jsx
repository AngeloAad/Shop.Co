import React, { useEffect, useState } from "react";
import { NavBar, Footer } from "../components";
import Subscribe from "../sections/Subscribe";
import { close } from "../assets/icons";
import BreadCrumb from "../components/BreadCrumb";
import { clothes, tshirts } from "../constants";
import { useLocation, useSearchParams } from "react-router-dom";
import TshirtCard from "../components/TshirtCard";
import RatingAndReviews from "../components/RatingAndReviews";
import YouMightCard from "../components/YouMightCard";

const TshirtsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [isClosed, setIsClosed] = useState(false);
  const [searchParams] = useSearchParams();
  const item = searchParams.get("clothes"); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const tempProduct = clothes.find((product) => product.key === item);

    if (tempProduct) {
      setSelectedProduct(tempProduct);
      changeSimilarProduct(tempProduct.key);
    }
  }, [item]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    changeSimilarProduct(product.key);
  };

  const changeSimilarProduct = (key) => {
    const tempSimilarProducts = tshirts.filter(
      (product) => product.key !== key
    );
    setSimilarProducts(tempSimilarProducts);
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  return (
    <main className="relative max-container">
      {!isClosed && (
        <div className="w-full bg-black sm:h-[38px] h-[34px] sm:py-[9.5px] py-[8.5px]">
          <div className="flex justify-between items-center padding-x">
            <div className="flex-grow flex justify-center items-center">
              <p className="font-archivo text-sm text-white font-thin sm:text-[14px] text-[12px]">
                Sign up and get 20% off your first order. &nbsp;
                <span className="font-light underline max-ss:hidden cursor-pointer">
                  Sign Up Now
                </span>
              </p>
            </div>
            <div className="flex justify-end items-center">
              <button onClick={handleClose}>
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
        </div>
      )}

      <section>
        <NavBar />
      </section>

      <section className="pt-6 padding-x">
        <div className="border-b border-b-gray-400" />
        <BreadCrumb />
      </section>

      <section className="pt-8 padding-x">
        <div>
          {selectedProduct && (
            <TshirtCard
              imgURL={selectedProduct.imgURL}
              name={selectedProduct.name}
              rating={selectedProduct.rating}
              ratingNumber={selectedProduct.ratingNumber}
              price={selectedProduct.price}
              originalPrice={selectedProduct.originalPrice}
              discount={selectedProduct.discount}
              description={selectedProduct.description}
            />
          )}
        </div>
      </section>

      <section className="pt-16 padding-x">
        <RatingAndReviews />
      </section>

      <section className="padding-x">
        <h2
          className="flex justify-center items-center 
      font-montserrat font-black sm:text-[48px] text-[32px] pt-[110px]"
        >
          YOU MIGHT ALSO LIKE
        </h2>
        <div className="flex-center flex-wrap mt-10 gap-y-10">
          {similarProducts.map((product) => (
            <div
              key={product.key}
              onClick={() => {
                handleProductClick(product);
                scrollToTop();
              }}
            >
              <YouMightCard product={product} />
            </div>
          ))}
        </div>
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

export default TshirtsPage;
