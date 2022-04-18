require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
        chainId:  4,
		    from: process.env.RINKEBY_ACCOUNT,
        accounts: [process.env.RINKEBY_PRIVATE_KEY]
	  }
  }
};
