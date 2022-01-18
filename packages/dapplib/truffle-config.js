require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture stone deny spider unique grace office army gaze'; 
let testAccounts = [
"0x28b11679c5ad17543525f9ecc8c4c046c9ae9ee8bfe1d877d4ba9e6f1fd04862",
"0x12752fab458b21cb62eb7248708348a7cffe9156813b0e4f80436a656a1e8ce4",
"0x49363cce7f25e9c33ad9a917e0f4884bf0a2ce631fa30d582fb3bdf583391c44",
"0x04dfef30d54fbdbdbbef654a1c76a22e46647145a6502bb8def1f4124b7ed10f",
"0x71b20c56d64f655c51731acefeb30ebfd3267474a370c3df81d4abe176ffe6d7",
"0x01e8d867f8b542aec7191da8953a633e15a0683429d3d114d57aec33f1a4b63a",
"0x705f2669160ddf37a503afb2b1713ee02cf0211d95e483fe32a813bc351908f6",
"0xf748243075bf05714ac19c94baf0177ec54ebb6d52c9041e3d567a9d2d6bb4ec",
"0xe091fdad0948baab13c98220c32b49b5eda92200df07ffb627a8d3022ccf5147",
"0x6a1a5ffe13fd4380aa90c2960d9ba7211887bfa565add1672bce4ada68560118"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


