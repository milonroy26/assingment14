"use client";

import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const myVideo = useRef();
  const playBtn = useRef();

  const openVideo = () => {
    myVideo.current.style.display = "block";
    if (myVideo.paused) {
      myVideo.play();
      playBtn.current.src = "public/images/pause.png";
    } else {
      playBtn.current.src = "images/pause.png";
    }
  };
  return (
    <div>
      <div className="hero">
        <video ref={myVideo} id="backVideo" autoPlay muted loop>
          <source src="images/video.mp4" type="video/mp4" />
        </video>

        <img
          className="menu-icon"
          src="https://w2.chabad.org/media/images/1065/TVEm10658964.jpg"
          alt=""
        />

        <div className="sidebar">
          <div className="top-links">
            <li>
              <Link href="/">হোম</Link>
            </li>
            <li>
              <Link href="/dashboard/learning">এসো শিখী</Link>
            </li>
          </div>

          <div>
            <h1 className="text-white">Welcome to My Little School</h1>
            <h3 className="text-slate-50">washington, USA</h3>

            <Link href={"/login"}>
              <button className="btn  mt-6">Login Now</button>
            </Link>
          </div>
        </div>

        <button id="btn" className="play-btn" onClick={openVideo}>
          <img
            ref={playBtn}
            className="w-[56px]"
            src="images/play.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
