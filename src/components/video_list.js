import React from 'react';
import VideoDetail from './video_detail'

const VideoList = ({videos}) => {
    "use strict";
    const videoListItem = videos.map(video => {
       return <VideoDetail key={video.etag} video={video}/>
    });
    return (
        <ul>
            {videoListItem}
        </ul>
    )
};

export default VideoList;