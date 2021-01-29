import { useState } from "react";

function Wallet() {
  const [money, setMoney] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(money);
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

export default Wallet;
