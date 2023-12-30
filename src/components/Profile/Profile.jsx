import React, { useRef } from 'react';
import suisei from '../../assets/images/suisei.png';
import Animation from '../Animation/Animation';

import './Profile.css';

export default function Header() {
  const profileRef = useRef(null);

  return (
    <div className="profile" ref={profileRef}>
      <Animation containerRef={profileRef} />
      <div className="profile-wrap">
        <header>
          <h1>Hi, I'm Pitiphong</h1>
          <h3>A Software Engineer Student</h3>
        </header>
        <div className="profile-picture">
          <img className="suisei" src={suisei} alt="suisei picture" />
        </div>
      </div>
    </div>
  );
}
