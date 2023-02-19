import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface IResponseObj {
  id: string;
  playbackId: string;
  parentStream: {
    name: string;
    isActive: boolean;
    createdAt: string;
  };
}

const sessions = (req: NextApiRequest, res: NextApiResponse) => {
  const options = {
    method: "GET",
    url: "https://livepeer.studio/api/session",
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
            parentStream: { name, isActive, createdAt },
          }: IResponseObj) => ({
            id,
            playbackId,
            name,
            isActive,
            createdAt,
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
