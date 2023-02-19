import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface IStreamResponseObj {
  id: string;
  playbackId: string;
  name: string;
  record: boolean;
  isActive: boolean;
  createdAt: string;
}

const sessions = (req: NextApiRequest, res: NextApiResponse) => {
  const options = {
    method: "GET",
    url: "https://livepeer.studio/api/stream?streamsonly=1",
    headers: { Authorization: `Bearer ${process.env.STUDIO_API_KEY}` },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return res.status(200).send(
        response.data.map(
          ({
            id,
            playbackId,
            name,
            isActive,
            createdAt,
            record,
          }: IStreamResponseObj) => ({
            id,
            playbackId,
            name,
            isActive,
            createdAt,
            record,
          })
        )
      );
    })
    .catch(function (error) {
      res
        .status(400)
        .json({ message: "Bad Request", err: JSON.stringify(error) });
    });
};

export default sessions;
