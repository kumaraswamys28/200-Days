import { useState } from "react";
import useMoneyinfo from "./hooks/index";
import InputBox from "./component/Inputbox";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useMoneyinfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    } else {
      console.error("Conversion rate not found.");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            Currency Converter
          </h2>
          <div className="mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative flex justify-center mb-4">
            <button
              type="button"
              className="rounded-full bg-blue-500 text-white p-2 hover:bg-blue-600 transition-transform transform hover:scale-105"
              onClick={swap}
            >
              ↔ Swap
            </button>
          </div>
          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
