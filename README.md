# FlightSurety

FlightSurety is a sample application project for Udacity's Blockchain course.

## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle), dApp scaffolding (using HTML, CSS and JS) and server app scaffolding.

To install, download or clone the repo, then:

`npm install`
`truffle compile`

## Versions used in project

Truffle version
`truffle: ^5.1.65`

Web3 version
`web3: ^1.8.2`

## Develop Client

To run truffle tests:

`truffle develop`
`truffle test`

To use the dapp:

`truffle migrate`
`npm run dapp`

To view dapp:

`http://localhost:8000`

## Develop Server

`npm run server`
`truffle test ./test/oracles.js`

## Deploy

To build dapp for prod:
`npm run dapp:prod`

Deploy the contents of the ./dapp folder

## Screenshots

![ganache-cli](images/ganache_CLI.jpg)
![ganache-cli continued](images/ganache_CLI2.jpg)
![ganache-cli continued](images/ganache_CLI3.jpg)

![Run the Dapp](images/runDapp1.jpg)
![Run the Dapp continued](images/runDapp2.jpg)
![Run the Dapp continued](images/runDapp3.jpg)

![Run the server](images/runServer.jpg)

![Truffle tests](images/t_test1.jpg)
![Truffle tests 2](images/t_test2.jpg)
![Truffle tests 3](images/t_test3.jpg)
![Truffle tests 4](images/t_test4.jpg)
![Truffle tests 5](images/t_test5.jpg)

![Truffle Migrations](images/t_migrate.jpg)
![Truffle Migrations 2](images/t_migrate2.jpg)

## Resources

* [How does Ethereum work anyway?](https://medium.com/@preethikasireddy/how-does-ethereum-work-anyway-22d1df506369)
* [BIP39 Mnemonic Generator](https://iancoleman.io/bip39/)
* [Truffle Framework](http://truffleframework.com/)
* [Ganache Local Blockchain](http://truffleframework.com/ganache/)
* [Remix Solidity IDE](https://remix.ethereum.org/)
* [Solidity Language Reference](http://solidity.readthedocs.io/en/v0.4.24/)
* [Ethereum Blockchain Explorer](https://etherscan.io/)
* [Web3Js Reference](https://github.com/ethereum/wiki/wiki/JavaScript-API)
