import { Framework } from "@superfluid-finance/sdk-core";
import { useSigner } from "wagmi";
// import { provider } from "../rainbowlit/Rainbow";
import { useProvider } from "wagmi";

interface ISuperfluidProps {
  recipient: string;
  flowRate: string;
}

const Superfluid = async ({ recipient, flowRate }: ISuperfluidProps) => {
  const provider = useProvider();

  //     const provider = new BrowserProvider(window.ethereum);
  //   await provider.send("eth_requestAccounts", []);
  //   const signer:Promise<JsonRpcSigner>= provider.getSigner();
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const sf: Framework = await Framework.create({
    chainId: Number(chainId),
    provider,
  });

  // const { data, error, isLoading, refetch } = useSigner();

  const superSigner = sf.createSigner({ web3Provider: provider });
  const daix = await sf.loadSuperToken("fDAIx");
  try {
    const createFlowOp = await daix.createFlow({
      sender: await superSigner.getAddress(),
      receiver: recipient,
      flowRate: flowRate,
    });
    const result = await createFlowOp.exec(superSigner);
    console.log(result);
  } catch (error) {
    console.log(
      "Error occured, Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
  }
  const isWalletConnected: string | null =
    localStorage.getItem("wagmi.connected");
  if (isWalletConnected !== "true") {
    alert("Please connect your wallet to continue");
    return;
  }

  return (
    <div>
      <form>
        <input name="flowRate" />
      </form>
    </div>
  );
};

export default Superfluid;
