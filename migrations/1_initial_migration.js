const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
    await deployer.deploy(Migrations);
    await deployer.deploy(DaiTokenMock);
    const tokenMock = await DaiTokenMock.deployed()
        // Mint 1,000 Dai Tokens for the deployer
    await tokenMock.mint(
            '0x04E9F24FBA3279a6515063f00B43C006F37514F3',
            '1000000000000000000000'
        ) // Replace Ganache Address Here
};