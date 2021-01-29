import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMoney } from "../redux/user";

function ATM() {
  // access Redux store dispatch with useDispatch
  const dispatch = useDispatch();
  const [money, setMoney] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    // { type: "user/addMoney", payload: money }
    const action = addMoney(money);
    dispatch(action);
    setMoney(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="money">Amount</label>
      <input
        type="number"
        id="money"
        value={money}
        onChange={(e) => setMoney(parseInt(e.target.value))}
      />
      <button type="submit">Add Funds</button>
    </form>
  );
}

export default ATM;
