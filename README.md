
# Setup

### Requires NPM & Direnv

Homebrew on Mac OSX:

`brew install node npm direnv`

Apt on Linux:

`apt-get install node npm direnv`

### Install truffle globally:

`npm install truffle -g`

### Install the local NPM packages:

`npm install`

### Environment Variables

1. `cp .envrc.example .envrc`

2. Enter your own twelve random words in the .envrc.

3. Also, we'll leverage Infura's Ethereum Ropsten testnet node, so make sure to set up an account and paste your private key in your .envrc.

4. Use `direnv allow` to export the env vars into your current terminal shell.

### Run the Ganache CLI (local EVM)

Start up the local Ethereum test node with:

`npm run ganache`

### Compile the Solidity code

Once Ganache is running, in another terminal window compile and migrate the contracts:

`truffle compile`

This will deploy the compiled contracts to the network (tip: use --network=ropsten to deploy to Ethereum's Ropsten Testnet, --network=rinkeby for rinkeby, etc)

`truffle migrate`

# Run the Project

Make sure the truffle contracts are compiled and migrated, and ganache is running.

Start the Webpack dev server.

`npm run dev`

Your server should now be running at http://127.0.0.1:8080

### truffle.js & truffle-config.js

Why is there both a truffle and truffle-config file?

* On Windows, truffle-config.js is required. You can safely delete the one you don't need (ie on Mac/Linux you can delete truffle-config.js)

# Building the Project

`npm run build`

*Note: Currently we are manually migrating contracts against the Ropsten & Rinkeby testnets, and checking the build into the repo. This is less than ideal. It would be better to use a build script such as the [netlify-build.sh](https://github.com/chuckbergeron/etherplate/blob/master/netlify-build.sh) file and compile contracts on the server.*

# Running the Tests

For the Solidity contract's truffle test suite:

`truffle test`

To run the DApp test suite (React components, etc):

`npm test`

--------------------

## Toast Messages

Examples of a bunch of different looking toast messages to show on an error message, success, info, etc.:

```
  toastr.light('test', 'message', { icon: 'info', status: 'info' })
  toastr.light('test', 'message', { icon: 'success', status: 'success' })
  toastr.light('test', 'message', { icon: 'warning', status: 'warning' })

  toastr.success('test', 'message')
  toastr.info('test', 'message')
  toastr.warning('test', 'message')
  toastr.error('test', 'message')
```

## TODO:

* Test w/ Web3-integrated browsers such as Trust
* Set up a basic server to respond to tokenURI requests and store the tokenURI in the contract (`buyToken()` function)
* Refactor React components to have both presentation and container components
* Add deepFreeze() to test immutability of Redux reducers
* Fix issues where we should be unsubscribing / canceling server requests in `componentWillUnmount()`
* Rename all services to have `-service` in the filename
* Rename all components to use standard React naming scheme: `EtherscanButton.jsx` instead of `etherscan-button.jsx`
* Follow a standard ES6 export pattern (use TokenListItem component code as an example)

## Nice-to-haves:

* Offline.js or react-detect-offline to let users know when their network connection is dead
* Find a way to prevent `truffle test` from recompiling the contracts each time it is run
* Store transactionHash in localStorage and call info on it after page refreshes if it isn't in `store.getState().tokens` pool
* Remove the build directory from the repo, build server-side on each deploy and possibly use truffle-migrate-off-chain (https://github.com/asselstine/truffle-migrate-off-chain)
* Test the happy path of filling out the form and purchasing a token via (jest/enzyme)
* Get `circleci` branch up and running, put a badge on the README for test runs
* Demo how ERC721 expects you to store data (such as the JSON response when the tokenURI is requested) as per https://eips.ethereum.org/EIPS/eip-721 (For instance, OpenSea has a server which takes a contract address and tokenID, which then does a GET request to the tokenURI to pull more info (as JSON) about the token (images, name, etc), for example: https://opensea-api.herokuapp.com/events/?asset_contract_address=0x06012c8cf97bead5deae237070f9587f8e7a266d&token_id=389343)


