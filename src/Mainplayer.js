import React from "react";

function Mainplayer(props) {
    var video= props.videos[0]
    console.log(video)
   
    return(
        <div id="mainplayer" className="video-item" >
                      <img id="thumbnail" src={video.thumbnail_url} alt={video.title}></img>
                      <div>
                          <div id="video-actions">
                              <p>
                              <b><span id="views-count">{video.views}k</span> views</b><span>   </span>
                              <b> <span id="likes-count">{video.likes}k</span> likes</b>
                              </p>
                            
                          </div>
                          <h2 id="channelname"><span><img id="logo" src={video.channelLogoUrl} alt={video.title}></img></span>{video.channelName}</h2>
                          <h3 id="video-title">{video.title}</h3>
                      </div>
                  </div>
    )

         
}

export default Mainplayer;