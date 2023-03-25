import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const LessonPage = ({ videoURL, videoTitle }) => {
  const [currentVideo, setCurrentVideo] = useState(videoURL);
  const [currentTitle, setCurrentTitle] = useState(videoTitle);

  const handleVideoChange = (newVideoURL, newVideoTitle) => {
    setCurrentVideo(newVideoURL);
    setCurrentTitle(newVideoTitle);
  };

  const contentList = [
    { id: 1, title: 'Introduction', videoURL: 'videos/test1.mp4' },
    { id: 2, title: 'Lesson 1', videoURL: 'videos/test2.mp4' },
    { id: 3, title: 'Lesson 2', videoURL: 'videos/test1.mp4' },
  ];
  

  return (
    <div className="lesson-page">
      <div className="container-fluid">
        
        <div className="row">
        <div className="col-lg-9">
        <div className="content-tab-container bg-dark">
              <div className="content-tab-header bg-dark text-white p-3">{currentTitle}</div>
            <div className="ratio ratio-16x9">
              <ReactPlayer
                url={currentVideo}
                width="100%"
                height="100%"
                controls={true} 
                playing={true}
                light={true}
              />
            </div>
          </div>
          </div>
        {/* <div className="col-lg-8">
            <div className="ratio ratio-16x9">
              <ReactPlayer
                url={currentVideo}
                width="100%"
                height="100%"
                controls={true}
                playing={false}
                light={true}
              />
            </div>
          </div> */}
          {/* <div className="col-md-8 p-0">
            <div className="video-player-container bg-light">
              <div className="video-title p-3">{videoTitle}</div>
              <ReactPlayer url={currentVideo} controls={true} width="100%" height="100%" />
            </div>
          </div> */}
          <div className="col-lg-3 p-0 m-0">
            <div className="content-tab-container bg-white">
              <div className="content-tab-header bg-light p-3">Course content</div>
              <div className="content-tab p-3">
                {contentList.map((item) => (
                  <div key={item.id} className="content-tab-item mb-3">
                    <input type="checkbox" id={item.id} onChange={() => handleVideoChange(item.videoURL, item.title)} />
                    <label htmlFor={item.id} className="ms-3">{item.title}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
        <div className="content-tab-container bg-white">
              <div className="content-tab-header bg-light p-3">
               <b>Note:</b> <br/>
                Hi there, my name is John and I'm your instructor for First Time Manager course.

               </div>
              </div>
        </div>


      </div>
    </div>
  );
};

export default LessonPage;
