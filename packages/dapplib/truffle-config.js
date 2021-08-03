require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid narrow fortune stone strategy radar pulse property inside light army gaze'; 
let testAccounts = [
"0xd8139bf04dda6254c743771b64dd99b1f50cb2b70243d30ae237a102a2ac5754",
"0x1761ffd909650d24458a35ac8fbbbe3e91d60734ffeb4854eb3a9479d5e6b6e3",
"0xf5df61f6000ada0cd07de8d4f8a39876f1014372ffbe27c6c8ee8781e513043c",
"0x502a42f3e17d8922e35c083e5a9f28ce07237f226d08664bc2d8f667d62e0b9f",
"0x11d9e20e53f45e5712fab1446d170b8c7cf9c54fd8bd1a9b2eb2327f4ff87d56",
"0xaff975001603a82e916b0a1e613ffb1b1ddc2f182385e0fd49f670a06c8aa57d",
"0x71b552128a6feab1b89b8f6f9ba3d44b92128902b08e56d5fd41aef2c145c2a7",
"0x89cb8ee45706825e33f341cddfc728f57165f27f34cee1aeb21eb398afcc49a3",
"0x071c2f9765a4ad3c1bfcb7618a2d0b2a54351285985c6d8508cc73a18605284d",
"0x8e160b205287ff434840dcd8c42d4dee36b8df01cc7e01ef06079b418cea6800"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

