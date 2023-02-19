import { Chat } from "@pushprotocol/uiweb";
import { useRouter } from "next/router";
import React from "react";
import { DemoPlayer } from "../../../components/livepeer/DemoPlayer";

const View = () => {
  const router = useRouter();
  const { playbackId } = router.query;

  return (
    <div className="h-screen grid items-center">
      <div className="grid grid-cols-4 items-center p-12 gap-4">
        <div className="col-span-3">
          <DemoPlayer playbackId={playbackId?.toString() || ""} />
        </div>
        <div className="col-span-1 h-full">
          <div className="h-full w-full bg-black rounded-lg">
            <Chat
              account="0xa1bac06d3C3213df5A511F6504807cfbf9b9d402"
              apiKey="YoFsgsH9bO.gViUr0HiBLP17BjtOcEDORjY47E24o9lolGO3kB9o1DciRgqPsrVERmAdYUCTPog"
              supportAddress={"0xa1bac06d3C3213df5A511F6504807cfbf9b9d402"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
