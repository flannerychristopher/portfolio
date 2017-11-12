import React from 'react';
import { TRACK_IDS, BASE_URL, QUERY_STRING } from '../data/music';
import '../style/Music.css';

const Music = () => {
  return (
    <div className="Music">
      {
        TRACK_IDS.map(track_id => {
          return (
            <div className="musicItem">
              <iframe
                title={track_id}
                key={track_id}
                scrolling="no"
                frameBorder="no"
                src={BASE_URL + track_id + QUERY_STRING}
              >
              </iframe>
            </div>
          )
        })
      }
    </div>
  );
}

export default Music;