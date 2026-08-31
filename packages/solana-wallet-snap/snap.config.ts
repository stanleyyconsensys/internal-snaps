/* eslint-disable import-x/no-nodejs-modules, no-restricted-globals -- Snap configuration executes in Node.js. */
import type { SnapConfig } from '@metamask/snaps-cli';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

const environment = {
  ENVIRONMENT: process.env.ENVIRONMENT ?? '',
  LOG_LEVEL: process.env.LOG_LEVEL ?? '',
  RPC_URL_MAINNET_LIST: process.env.RPC_URL_MAINNET_LIST ?? 'https://api.testnet.solana.com',
  RPC_URL_DEVNET_LIST: process.env.RPC_URL_DEVNET_LIST ?? 'https://api.testnet.solana.com',
  RPC_URL_TESTNET_LIST: process.env.RPC_URL_TESTNET_LIST ?? 'https://api.testnet.solana.com',
  RPC_URL_LOCALNET_LIST: process.env.RPC_URL_LOCALNET_LIST ?? 'https://api.testnet.solana.com',
  RPC_WEB_SOCKET_URL_MAINNET: process.env.RPC_WEB_SOCKET_URL_MAINNET ?? 'wss://api.testnet.solana.com',
  RPC_WEB_SOCKET_URL_DEVNET: process.env.RPC_WEB_SOCKET_URL_DEVNET ?? 'wss://api.testnet.solana.com',
  RPC_WEB_SOCKET_URL_TESTNET: process.env.RPC_WEB_SOCKET_URL_TESTNET ?? 'wss://api.testnet.solana.com',
  RPC_WEB_SOCKET_URL_LOCALNET: process.env.RPC_WEB_SOCKET_URL_LOCALNET ?? 'wss://api.testnet.solana.com',
  EXPLORER_BASE_URL: process.env.EXPLORER_BASE_URL ?? '',
  PRICE_API_BASE_URL: process.env.PRICE_API_BASE_URL ?? '',
  TOKEN_API_BASE_URL: process.env.TOKEN_API_BASE_URL ?? '',
  STATIC_API_BASE_URL: process.env.STATIC_API_BASE_URL ?? '',
  SECURITY_ALERTS_API_BASE_URL: process.env.SECURITY_ALERTS_API_BASE_URL ?? '',
  NFT_API_BASE_URL: process.env.NFT_API_BASE_URL ?? '',
  LOCAL_API_BASE_URL: process.env.LOCAL_API_BASE_URL ?? '',
};

const config: SnapConfig = {
  input: resolve(__dirname, 'src/index.ts'),
  server: {
    port: 8080,
  },
  environment,
  polyfills: {
    buffer: true,
    crypto: true,
  },
};

export default config;
