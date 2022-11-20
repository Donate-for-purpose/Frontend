import { BigNumber, ethers } from 'ethers'
import React, { useEffect, useState } from 'react'
import { useSigner } from 'wagmi';
import { DFP__factory } from '../../../src/contracts';

type Props = {
    provider:string,
    amount:BigNumber
}

export default function YChild(p:Props) {
    const [name,setName] = useState("")
    const { data: signer } = useSigner();

    useEffect(()=>{
        if (!signer) return;
        const dfpContract = DFP__factory.connect(
            process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "",
            signer
          );
        dfpContract.providers(p.provider).then(setName);
    },[p])
   const redeemDonation = async (provider: string, amount: BigNumber) => {
        if (!signer) return;
    
        const dfpContract = DFP__factory.connect(
          process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "",
          signer
        );
    
        await dfpContract.send(provider, amount);
      };
  return (
    <>
    <div className="text-md pt-4 pb-2  text-center">{name}</div>
                  <div className="text-md pt-4 pb-2  text-center">
                    {p.provider}
                  </div>
                  <p
                    onClick={() => redeemDonation(p.provider, p.amount)}
                    className=" px-5 py-2 rounded-lg bg-yellow-400 text-black hover:cursor-pointer hover:bg-yellow-500  border-none w-fit mx-auto "
                  >
                    {ethers.utils.formatUnits(p.amount)}
                  </p></>
  )
}
