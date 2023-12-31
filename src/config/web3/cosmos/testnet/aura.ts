import { Bech32Address } from "@keplr-wallet/cosmos";

import { COSMOS_PROXY_RPC_TESTNET } from "~/config/constants";

import { CosmosChain } from "../interface";

export const aura: CosmosChain = {
  chainId: "euphoria-2",
  chainName: "Aura Testnet",
  rpc: `${COSMOS_PROXY_RPC_TESTNET}/chain/aura`,
  rest: "https://lcd.euphoria.aura.network",
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config("aura"),
  currencies: [
    {
      coinDenom: "EAURA",
      coinMinimalDenom: "ueaura",
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "EAURA",
      coinMinimalDenom: "ueaura",
      coinDecimals: 6,
      gasPriceStep: {
        low: 0.001,
        average: 0.0025,
        high: 0.004,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: "EAURA",
    coinMinimalDenom: "ueaura",
    coinDecimals: 6,
  },
  coinType: 118,
  features: ["no-legacy-stdTx"],
  walletUrlForStaking: "https://euphoria.aurascan.io/validators",
  explorer: "https://euphoria.aurascan.io/",
  chainIdentifier: "aura",
  chainToAxelarChannelId: "channel-5",
};
