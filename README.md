# eth_wallet(Blockchain Wallet)

## Dependencies
- Node.js
```sh
 (https://nodejs.org/)
```
- Ganache 
```sh
 (https://www.trufflesuite.com/ganache)
```
- Truffle 
```sh
 $ npm install -g truffle@5.1.14)
```
- Metamask
```sh
 (https://metamask.io/)
```

##Project Setup
```sh
$ git clone https://github.com/svermen/eth_wallet
```
```sh
$ cd eth_wallet
```
```sh
$ npm install
```
```sh
$ npm install @openzeppelin/contracts 
```
```sh
Set vars in "migrations/1_initial_migration.js"
await tokenMock.mint(
        'Replace Ganache Address Here',
        '1000000000000000000000'
    ) 
```
```sh
$ truffle migrate --reset
```
```sh
Set vars in "App.js"
const daiTokenAddress = "0x8Be547B38c080fc8Eb9BbbcBb77A15AB7a8C686D" // Replace DAI Address Here

This value can be obtained from "abis/DaiTokenMock.json"
```
```sh
$ npm run start
```
##Tutorial done: https://www.youtube.com/watch?v=wSTbBIK8qrY&list=PUY0xL8V6NzzFcwzHCgB8orQ&index=86