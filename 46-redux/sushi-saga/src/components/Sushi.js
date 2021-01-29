import React from "react";
import { useDispatch } from "react-redux";
import { eatSushi } from "../redux/sushi";
import { subtractMoney } from "../redux/user";

function Sushi({ sushi }) {
  const dispatch = useDispatch();

  function handleClick() {
    const action = eatSushi(sushi);
    dispatch(action);
    // const action2 = subtractMoney(sushi.price);
    // dispatch(action2);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {sushi.isEaten ? null : (
          <img src={sushi.img_url} alt={sushi.name} width="100%" />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
