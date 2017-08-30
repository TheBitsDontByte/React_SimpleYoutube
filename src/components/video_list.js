import React from "react";
import VideoListItem from "./video_list_item"



const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <div key={video.etag} className="video-list-item-div">
                <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    
                    video={video}
                />
            </div>);
    });


    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;