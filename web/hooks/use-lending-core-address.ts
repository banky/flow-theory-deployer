import { useNetwork, chainId } from 'wagmi';
import LendingCore from '../../artifacts/contracts/LendingCore.sol/LendingCore.json';

export const useLendingCoreAddress = () => {
  const nullAddress = '0x0000000000000000000000000000000000000000';
  const { chain } = useNetwork();
  if (chain?.id === undefined) {
    return { contractAddress: nullAddress, abi: LendingCore.abi };
  }

  const contractAddress = {
    [chainId.goerli]: '0x5990980b36BaE3EF45C6D302917916150D3b5B16',
    [chainId.rinkeby]: '0x0000000000000000000000000000000000000000',
    [chainId.mainnet]: '0x0000000000000000000000000000000000000000',
    [chainId.optimismGoerli]: '0x0000000000000000000000000000000000000000',
    [chainId.polygonMumbai]: '0x0000000000000000000000000000000000000000',
  }[chain.id];

  if (contractAddress === undefined) {
    return { contractAddress: nullAddress, abi: LendingCore.abi };
  }

  return {
    contractAddress,
    abi: LendingCore.abi,
  };
};
