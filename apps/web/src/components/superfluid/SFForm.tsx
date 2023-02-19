import { ethers } from "ethers";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useAccount } from "wagmi";
import useSuperfluid from "./useSuperfluid";

const SFForm = () => {
  const [formData, setFormData] = useState({
    recipient: "",
    flowRate: 0,
  });
  const { address } = useAccount();
  let { sf, daix, signer } = useSuperfluid();
  const createflow = async () => {
    if (!sf) return;

    // if (!address) return;

    //   const calculateFlowRate = (flowRate) => {
    //     const amountInWei = ethers.utils.parseUnits(flowRate, 18);
    //     const secondsAmount = ethers.utils.formatEther(amountInWei.toString());
    //     return secondsAmount;
  };

  const onChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // calculateFlowRate(formData.flowRate);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!daix) return console.log("daix is null");
    const amountInWei = ethers.BigNumber.from(formData.flowRate);
    const flowop = daix.createFlow({
      sender: address,
      receiver: "0xa1bac06d3C3213df5A511F6504807cfbf9b9d402",
      flowRate: amountInWei.toString(),
    });
    if (signer === null) return console.log("signer is null");
    await flowop.exec(signer);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="recipient"
        onChange={onChangeValues}
        value={formData.recipient}
      />
      <input
        type="number"
        name="flowRate"
        onChange={onChangeValues}
        value={formData.flowRate}
      />
      <button>Submit</button>
    </form>
  );
};

export default SFForm;
