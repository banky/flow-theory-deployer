import { useNetwork, chainId } from 'wagmi';
import ERC20 from '../artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json';

export const useWethAddress = () => {
  const nullAddress = '0x0000000000000000000000000000000000000000';
  const { chain } = useNetwork();
  if (chain?.id === undefined) {
    return { contractAddress: nullAddress, abi: ERC20.abi };
  }

  const contractAddress = {
    [chainId.goerli]: '0x5AF1c2B6275ECE07351Ab808dc54864f0f2747A1',
    [chainId.rinkeby]: '0x0000000000000000000000000000000000000000',
    [chainId.mainnet]: '0x0000000000000000000000000000000000000000',
    [chainId.optimismGoerli]: '0xf5Ef6A17B7C39442024d69c320A906C9cC84Dc78',
    [chainId.polygonMumbai]: '0xdFEC82F5E4aaDFC0F68c9D38ab520DF08AfFaDC1',
  }[chain.id];

  if (contractAddress === undefined) {
    return { contractAddress: nullAddress, abi: ERC20.abi };
  }

  return {
    contractAddress,
    abi: ERC20.abi,
  };
};
