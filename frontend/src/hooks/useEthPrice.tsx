// hooks/useEthPrice.ts
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useEthPrice = () => {
  return useQuery({
    queryKey: ['ethPrice'],
    queryFn: async () => {
      const res = await axios.get(
        'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr,usd'
      );
      console.log(res.data.ethereum.usd)
      return res.data.ethereum; // { usd: 3200, inr: 267000 }
    },
    refetchInterval: 60000, // refresh every 60 sec
  });
};
