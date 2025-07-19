import axios from "axios";
export const fetchEthPrice = async () => {
  const res = await axios.get(
    "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr,usd"
  );

  const price = res.data.ethereum; // no await here ✅
  console.log(price.usd);
  return price.usd;
};

// Usage:
// const query = buildQueryString({ status: "open", page: 1, category: "" });
// → "status=open&page=1"

