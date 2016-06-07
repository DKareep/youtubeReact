import React from 'react';
import VideoListDetails from './video_list_detail'

const VideoList = ({videos,onVideoSelect}) => {
    "use strict";

    const videoListItem = videos.map(video => {
       return <VideoListDetails
           key={video.etag}
           video={video}
           onVideoSelect={onVideoSelect}
           />
    });
    return (
        <ul className="video-list-ul col-md-4">
            {videoListItem}
        </ul>
    )
};

export default VideoList;