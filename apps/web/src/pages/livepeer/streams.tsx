import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

interface IStreamResponseObj {
  id: string;
  playbackId: string;
  name: string;
  record: boolean;
  isActive: boolean;
  createdAt: string;
}

const fetchStreams = async () =>
  await fetch("/api/streams").then((res) => res.json());

const Streams = () => {
  const {
    data: streams,
    isLoading,
    error,
    isError,
    isFetched,
  } = useQuery("streams", fetchStreams);

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return <span>Error: {isError}</span>;
  }

  return (
    <div className="grid grid-flow-col gap-4 p-8">
      {streams.map(
        ({
          id,
          name,
          playbackId,
          isActive,
          createdAt,
          record,
        }: IStreamResponseObj) => (
          <div key={id} className="bg-blue-500 p-4 rounded-lg">
            <div className="bg-white rounded-md p-3 font-extrabold pt-16 pr-16 text-3xl uppercase text-blue-500">
              {name}
            </div>

            <div className="pt-4">
              <div className="flex justify-between">
                <div className="bg-white w-fit font-bold flex items-center gap-2 px-2 text-sm rounded-lg mb-4">
                  {record ? (
                    <div className="h-3 w-3 bg-red-500 rounded-full "></div>
                  ) : (
                    <div className="h-3 w-3 bg-gray-500 rounded-full "></div>
                  )}{" "}
                  REC
                </div>
                <div>
                  {isActive ? (
                    <span className="text-green-600 font-bold">Active</span>
                  ) : (
                    <span className="text-red-600 font-bold">Inactive</span>
                  )}
                </div>
              </div>
              <p className="text-white">{new Date(createdAt).toString()}</p>

              <button
                onClick={() => router.push(`/livepeer/view/${playbackId}`)}
                className="mt-4 bg-white text-center w-full p-2 rounded-lg outline-none font-bold text-slate-700"
              >
                Join Livestream
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Streams;
