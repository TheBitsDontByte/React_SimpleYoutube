import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
    const thumbnailUrl = video.snippet.thumbnails.default.url;


    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media" >
                <div className="media-left video-item">
                    <img className="media-object" src="http://blog.room34.com/wp-content/uploads/underdog/logo.thumbnail.png" />
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VideoListItem;