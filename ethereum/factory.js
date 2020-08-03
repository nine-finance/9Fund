import web3 from './web3';
import Factory from './build/NineFund.json';

const instance = new web3.eth.Contract(
  JSON.parse(Factory.interface),
  '0x0C351da4652AB034Fd5F9Bda5747D3BbD208C539'
);

export default instance;
