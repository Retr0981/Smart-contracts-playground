const LaunchPoolStaking = artifacts.require("LaunchPoolStaking");
const LaunchPoolToken = artifacts.require("LaunchPoolToken")

const account = "0x1eF8deb274e6b2ac1230d7C024Bed1781f67eE17"

module.exports = function (deployer) {

    deployer.then(async () => {
        

        /**** Deploying LaunchPoolToken */
        /**
         * @param initialSupply The initial supply minted at deployment
         * @param account The initial account to grant all the tokens
         */
    await deployer.deploy(LaunchPoolToken, "20000000000000000000000000", account)

    /** 
    * @param _lpt Address of the LPT reward token
    * @param _maxLPTAvailableForFarming Maximum number of LPT that will be distributed between the start and end of farming
    * @param _startBlock Block number when farming will begin for all pools
    * @param _endBlock Block number when farming will end for all pools
    */
      await deployer.deploy(LaunchPoolStaking, LaunchPoolToken.address, "10000000000000000000000000", );
    })

  
};
