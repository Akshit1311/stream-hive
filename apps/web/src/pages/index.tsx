import { useCreateStream } from "@livepeer/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

const Home = () => {
  const [streamName, setStreamName] = useState("");

  const router = useRouter();
  const {
    mutate: createStream,
    data: stream,
    status,
  } = useCreateStream(streamName ? { name: streamName } : null);

  const isLoading = useMemo(() => status === "loading", [status]);

  const createStreamFunc = async () => {
    const _streamName = window.prompt(
      "Please enter a valid stream name",
      "Never Stop Building!"
    );

    if (!_streamName) return alert("Please enter a valid stream name");

    setStreamName(_streamName);
  };

  useEffect(() => {
    console.log({ status });
    if (status === "success") {
      router.push(`/livepeer/view/${stream?.playbackId}`);
    }
  }, [status]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Stream Hive!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by viewing or
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg text-green-600 font-bold">
            livestreaming
          </code>
        </p>

        <div className="p-4 flex gap-4">
          <button
            className="border border-blue-500 text-blue-500 py-3 px-4"
            onClick={!streamName ? createStreamFunc : createStream}
            disabled={isLoading}
          >
            {isLoading
              ? "Loading..."
              : streamName
              ? "Start Streaming"
              : "Enter Stream Name"}
          </button>
          <button
            className="border border-blue-500 text-white bg-blue-500 py-3 px-4"
            onClick={() => router.push("/livepeer/streams")}
          >
            View Streams
          </button>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
