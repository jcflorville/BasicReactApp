import React from 'react';

const VideoDetails = ({video}) => {
	if(!video){
		return <div>Loading...</div>
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	return (
		<div className="video-detail col-md-8">
			<div className="video-detail col-md-8">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details col-md-8">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
}

export default VideoDetails;
