import { Framework, SuperToken } from "@superfluid-finance/sdk-core";
import React, { useEffect, useState } from "react";
import { useProvider, useSigner } from "wagmi";
import { ethers, providers, Signer } from "ethers";

const chainId = 5;

interface IData {
  sf: Framework | null;
  signer: Signer | null;
  daix: SuperToken | null;
}

const useSuperfluid = () => {
  const [data, setData] = useState<IData>({
    sf: null,
    signer: null,
    daix: null,
  });

  const provider = useProvider();
  const signer = useSigner();
  useEffect(() => {
    (async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const _sf = await Framework.create({
        chainId: Number(chainId),
        provider,
      });

      const sfSigner = _sf.createSigner({
        signer,
      });

      const daix = await _sf.loadSuperToken("fDAIx");

      setData({
        sf: _sf,
        signer: sfSigner,
        daix,
      });
    })();
  }, []);

  return { ...data };
};

export default useSuperfluid;
