import React from "react";
import "./Video.css";

import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Video({ id, image1, image2, span1, span2, span3 }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image1: image1,
        image2: image2,
        span1: span1,
        span2: span2,
        span3: span3
      }
    });
  };

  return (
    <div className="video">
      <div className="video__container">
        {image1}

        <div className="video__description">
          {image2}
          <div className="video__name">{span1}</div>
        </div>
        <div className="video__views">
          {span2}
          {span3}
        </div>

        <button onClick={addToBasket} className="addlist">
          Add
        </button>
        <Link className="viewlist" to="/checkout">
          <LibraryAddCheckIcon className="list" />
          <span>{basket?.length}</span>
          <div className="countlist"></div>
        </Link>
      </div>
    </div>
  );
}

export default Video;
