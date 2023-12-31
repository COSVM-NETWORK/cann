import { useQuery } from "react-query";

import { useSwapStore } from "~/store";

import { getGasFee } from "~/utils/getGasFee";

export function useGetRelayerGasFee() {
  const srcChain = useSwapStore((state) => state.srcChain);
  const destChain = useSwapStore((state) => state.destChain);
  const asset = useSwapStore((state) => state.asset);

  return useQuery(
    ["relayer-gas-fee", asset?.id, destChain.id, srcChain.id],
    getGasFee.bind(null, srcChain, destChain, asset),
    { cacheTime: 10_000, staleTime: 10_000 }
  );
}
