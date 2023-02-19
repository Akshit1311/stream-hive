import { Player } from "@livepeer/react";

// const playbackId =
//   "bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy";

// import blenderPoster from "../../public/images/blender-poster.png";

// const PosterImage = () => {
//   return (
//     <Image
//       src={blenderPoster}
//       layout="fill"
//       objectFit="cover"
//       priority
//       placeholder="blur"
//     />
//   );
// };

export const DemoPlayer: React.FC<{ playbackId: string }> = ({
  playbackId,
}) => {
  return (
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      // showPipButton
      showTitle
      aspectRatio="16to9"
      //   poster={<PosterImage />}
      controls={{
        autohide: 3000,
        defaultVolume: 0.5,
      }}
      autoPlay
      theme={{
        // borderStyles: { containerBorderStyle: "hidden" },
        radii: { containerBorderRadius: "10px" },
      }}
    />
  );
};
