import { VideoPlayer } from "@/components";

const videoJsOptions = {
  sources: [
    {
      src: "video.mp4",
      type: "video/mp4",
    },
  ],
};

export default function Home() {
  return (
    <div className='flex flex-col px-5 md:px-48 py-5'>
      <h1 className='text-center font-semibold text-black text-lg'>Video.js Demo</h1>
      <VideoPlayer options={videoJsOptions} />
    </div>
  );
}
