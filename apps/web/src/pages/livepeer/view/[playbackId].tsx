import React from "react";
import { DemoPlayer } from "../../../components/livepeer/DemoPlayer";

const view = () => {
  return (
    <div className="h-screen grid items-center">
      <div className="grid grid-cols-4 items-center p-12 gap-4">
        <div className="col-span-3">
          <DemoPlayer playbackId="7d188inrq6gz1zy0" />
        </div>
        <div className="col-span-1 h-full">
          <div className="h-full w-full bg-black rounded-lg">dfd</div>
        </div>
      </div>
    </div>
  );
};

export default view;
