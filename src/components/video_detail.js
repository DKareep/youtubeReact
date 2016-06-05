import React from 'react';

const VideoDetails = ({video}) => {
    "use strict";
    const imgUrl = video.snippet.thumbnails.default.url;
    console.log(video);
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src="" alt="" className="media-object" src={imgUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoDetails;