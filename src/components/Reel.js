"use client";
import React, { useRef, useState, useEffect } from "react";
import ReelFooter from "../components/ReelFooter";
import ReelSidebar from "../components/ReelSidebar";
import { Box, IconButton } from "@mui/material";
import MaxSide from "./MaxSide";
import FootMax from "./FootMax";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const Reel = ({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
  activeReel,
  setActiveReel,
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoPress = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting) {
        if (activeReel !== videoRef.current) {
          videoRef.current.play().catch((err) => console.log("Autoplay error: ", err));
          videoRef.current.muted = false;
          setActiveReel(videoRef.current);
        }
      } else {
        videoElement.pause();
        videoElement.muted = true;
      }
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    observer.observe(videoElement);

    return () => observer.disconnect();
  }, [activeReel, setActiveReel]);

  useEffect(() => {
    if (!activeReel && videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Autoplay error: ", err));
      videoRef.current.muted = false;
      setActiveReel(videoRef.current);
    }
  }, [activeReel, setActiveReel]);

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}></Box>

      <Box
        sx={{
          position: "relative",
          backgroundColor: "white",
          width: "100%",
          height: "98vh",
          scrollSnapAlign: "start",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <video
          ref={videoRef}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "98%",
            cursor: "pointer",
            padding: 4,
            borderRadius: "14px",
          }}
          loop
          muted={isMuted}
          onClick={handleVideoPress}
          src={url}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
            right: "5%",
            zIndex: 1,
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ReelFooter channel={channel} description={description} song={song} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "40%",
            right: "10px",
            zIndex: 1,
            display: { xs: "block", md: "none" },
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ReelSidebar likes={likes} shares={shares} messages={messages} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "40%",
            right: "-60px",
            zIndex: 1,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MaxSide likes={likes} shares={shares} messages={messages} />
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: { xs: "none", md: "flex" }, 
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={handleVideoPress}
            sx={{ color: "white", fontSize: "50px", backgroundColor: "rgba(0,0,0,0.5)", padding: "10px", borderRadius: "50%" }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            zIndex: 2,
            display: { xs: "none", md: "flex" }, 
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <IconButton
            onClick={handleMuteToggle}
            sx={{
              color: "white",
              fontSize: "40px",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "10px",
              borderRadius: "50%",
            }}
          >
            {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Reel;
