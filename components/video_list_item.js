/**
 * Created by aviklar10 on 22/02/2017.
 */
import React from 'react';

const VideoListItem = (props) => {
    const video = props.video; //equals to receive {video} instead of props
    const onVideoSelect = props.onVideoSelect;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;