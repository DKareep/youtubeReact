import React from 'react';
import VideoDetail from './video_detail'

const VideoList = (props) => {
    "use strict";
    const videoListItem = props.videos.map(video => {
       return <VideoDetail key={video.etag} video={video}/>
    });
    return (
        <ul>
            {videoListItem}
        </ul>
    )
};

export default VideoList;