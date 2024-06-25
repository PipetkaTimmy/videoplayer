import Video from 'next-video';

const VideoPlayer = () => {
  const videoUrl = '/1710766332591_GALLERY_20240318_163648.mp4';

  return <Video src={videoUrl} />;
};

export default VideoPlayer;
