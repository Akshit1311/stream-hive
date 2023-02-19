import { Player, useCreateStream } from "@livepeer/react";

import { useMemo, useState } from "react";

export const Stream = () => {
  const [streamName, setStreamName] = useState<string>("");
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);

  const isLoading = useMemo(() => status === "loading", [status]);

  return (
    <div>
      <input
        type="text"
        placeholder="Stream name"
        onChange={(e) => setStreamName(e.target.value)}
      />

      <div className="w-1/2 flex">
        {stream?.playbackId && (
          <Player
            title={stream?.name}
            playbackId={stream?.playbackId}
            autoPlay
            muted
          />
        )}
      </div>

      <div>
        {!stream && (
          <button
            onClick={() => {
              createStream?.();
            }}
            disabled={isLoading || !createStream}
          >
            Create Stream
          </button>
        )}
      </div>
    </div>
  );
};
