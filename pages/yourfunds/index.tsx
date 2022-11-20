import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import Navbar from "../../components/Navbar";
import { DFP__factory } from "../../src/contracts";
import YChild from "./ychild/ychild";
type Funds = {
  amount: BigNumber;
  provider: string;
};
function Index() {
  const { data: signer } = useSigner();
  const [funds, setFunds] = useState<Funds[]>([]);
  const [addr, setAddr] = useState("");

  useEffect(() => {
    if (!signer) return;

    signer.getAddress().then(setAddr);
    const dfpContract = DFP__factory.connect(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "",
      signer
    );

    dfpContract.getFunds(signer.getAddress()).then((e) => {
      setFunds([]);
      const _funds: Funds[] = [];
      e.forEach((e) => {
        const newF: Funds = {
          amount: e.funds,
          provider: e.provider,
        };
        _funds.push(newF);
      });
      setFunds(_funds);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signer]);
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 pt-20 w-full h-screen lg:h-screen ">
        <div className=" bg-gray-800 bg-opacity-50 rounded-lg w-11/12 md:w-8/12 lg:w-6/12  mx-auto p-10">
          <h2 className="text-white text-4xl pt-0 mx-auto w-full text-center font-semibold">
            Your funds
          </h2>
          <div className="relative mb-4 mt-8">
            <label htmlFor="c" className="leading-7 text-lg text-gray-400">
              Your Address
            </label>
            <p className="overflow-hidden px-5 py-2 rounded-lg bg-gray-600 text-white border-none">
              {addr}
            </p>
          </div>
          <div className="bg-gray-700 h-96 overflow-x-hidden text-white overflow-scroll">
            {funds.map((e, i) => {
              return (
                <div key={i}>
                  <YChild amount={e.amount} provider={e.provider}></YChild>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
