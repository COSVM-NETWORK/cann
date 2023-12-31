import { ChainExtension } from "../interface";

export const filecoin: ChainExtension = {
  id: 314159,
  name: "Filecoin EVM Testnet",
  network: "filecoin",
  networkNameOverride: "filecoin-2",
  nativeCurrency: {
    name: "FIL",
    symbol: "FIL",
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: "Filecoin EVM Explorer",
      url: "https://calibration.filfox.info",
    },
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/filecoin_testnet"],
    },
    public: {
      http: ["https://rpc.ankr.com/filecoin_testnet"],
    },
  },
  testnet: true,
};
