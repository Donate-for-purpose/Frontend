import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { useSigner } from "wagmi";
import Navbar from "../../components/Navbar";
import { DFP__factory } from "../../src/contracts";
type Funds = {
  name: string;
  amount: BigNumber;
  provider: string;
};
function Index() {
  const { data: signer } = useSigner();
  const [funds, setFunds] = useState<Funds[]>([]);

  const redeemDonation = async (provider: string, amount: BigNumber) => {
    if (!signer) return;

    const dfpContract = DFP__factory.connect(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "",
      signer
    );

    await dfpContract.send(provider, amount);
  };
  useEffect(() => {
    if (!signer) return;

    const dfpContract = DFP__factory.connect(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? "",
      signer
    );

    dfpContract.getFunds(signer.getAddress()).then((e) => {
      setFunds([]);
      e.forEach(async (e) => {
        const providerName = await dfpContract.providers(e.provider);
        const fCopy = funds.slice();
        const newF: Funds = {
          name: providerName,
          amount: e.funds,
          provider: e.provider,
        };
        fCopy.push(newF);
        setFunds(fCopy);
      });
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
              cosmos1cdytzhqh2aq6z80t6sxg6slrt7jgzmjvs752wy
            </p>
          </div>
          <div className="bg-gray-700 h-96 overflow-x-hidden text-white overflow-scroll">
            {funds.map((e, i) => {
              return (
                <div key={i}>
                  <div className="text-md pt-4 pb-2  text-center">{e.name}</div>
                  <div className="text-md pt-4 pb-2  text-center">
                    {e.provider}
                  </div>
                  <p
                    onClick={() => redeemDonation(e.provider, e.amount)}
                    className=" px-5 py-2 rounded-lg bg-yellow-400 text-black hover:cursor-pointer hover:bg-yellow-500  border-none w-fit mx-auto "
                  >
                    {ethers.utils.formatUnits(e.amount)}
                  </p>
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
