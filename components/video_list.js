/**
 * Created by aviklar10 on 22/02/2017.
 */

// selection of specific video and showing it on the top of the screen is in lesson 29:
// https://www.udemy.com/react-redux/learn/v4/t/lecture/4288094?start=0

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return( <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}/>)
    });
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;