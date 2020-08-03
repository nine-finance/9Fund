const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/NineFund.json');
const compiledCampaign = require('./build/Crowdfunding.json');
const provider = new HDWalletProvider(
  'nothing fee public magic because frown observe tornado object tuna cruise have',
  'https://rinkeby.infura.io/v3/a72a96e5c484457ab73ef4aff41f251e'
);
const web3 = new Web3(provider);
let campaignAddress;
let campaign;

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ from: accounts[0] });

    await result.methods.createCampaign('100').send({
      from: accounts[0],
      gas: '1000000'
    });

  [campaignAddress] = await result.methods.getDeployedCampaigns().call();
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
  console.log('Factory deployed to', result.options.address);
  console.log('NineFund deployed to', campaign.options.address);
};
deploy();
