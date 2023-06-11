require('dotenv').config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

//Account credentials from which our contract will be deployed
const { MNEMONIC, PROJECT_ID } = process.env;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    worldland: {
      provider: () => new HDWalletProvider(MNEMONIC,'https://rpc.lvscan.io/'),
      network_id: 12345,
      gas: 5500000,
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}