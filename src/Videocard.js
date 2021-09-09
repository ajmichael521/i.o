import React from "react";
import { useStateValue } from "./StateProvider";

function Videocard({ id, image1 }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className="videocard">
      {image1}
      {/*<div className="videocard__description">
        {image2}
         <div className="videocard__name">{span1}</div>
        <div className="videocard__views">
          {span2}
          {span3}
  </div>
  </div>*/}
    </div>
  );
}

export default Videocard;
