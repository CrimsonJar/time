import React from "react";
import DateTimePretty from "./DateTimePretty";

const Video = (props) => {
  return (
    <div className='video'>
      <iframe
        title='video'
        src={props.url}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
      ></iframe>
      {/* <DateTime date={props.date} /> */}
      <DateTimePretty date={props.date} />
    </div>
  );
};

export default Video;
