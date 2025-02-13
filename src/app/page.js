"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Reel from "@/components/Reel";

const App = () => {
  const [activeReel, setActiveReel] = useState(null);

  return (
    <Box
      sx={{
        padding: { xs: "0", md: "0px 520px" },
      }}
    >
      <div className="app">
        <div className="app-videos">
          <Reel
            url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
            channel="ActionReplay"
            description="windows editing beast"
            song="i am a windows PC"
            likes={239}
            shares={345}
            messages={890}
            activeReel={activeReel}
            setActiveReel={setActiveReel}
          />
          <Reel
            url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
            channel="TechKnowledge"
            description="live in Windows"
            song="Kdenlive is great"
            likes={390}
            shares={355}
            messages={990}
            activeReel={activeReel}
            setActiveReel={setActiveReel}
          />
        </div>
      </div>
    </Box>
  );
};

export default App;
