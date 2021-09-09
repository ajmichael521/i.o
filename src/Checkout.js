import React from "react";
import "./Checkout.css";
import Videocard from "./Videocard";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Checkout({ id, image1, image2, span1, span2, span3 }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <>
      <div className="checkout">
        {basket.map((item) => (
          <Videocard
            id={item.id}
            image1={item.image1}
            image2={item.image2}
            span1={item.span1}
            span2={item.span2}
            span3={item.span3}
          />
        ))}

        <a className="link" href="/">
          <span>Back To Homepage</span>
        </a>
      </div>
    </>
  );
}

export default Checkout;
