"use client"
import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import './ReelFooter.css';

const ReelFooter = ({ channel, description, song }) => {
  return (
    <Box
      sx={{
        left: "20px",
        right: "20px",
        color: "black", 
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        zIndex: 1,
        padding:"10px 0px"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/rit.png"
          alt="Profile Image"
          width={35}
          height={35}
          style={{ borderRadius: "50%" }}
        />

        <Box sx={{ ml: 2 }}>
          <Typography sx={{ fontSize: "10px", fontWeight: "bold", mb: 0.5, color: "#000 !important" }}>
            {description}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", fontSize: "8px" }}>
            <MusicNoteIcon sx={{ fontSize: "12px", mr: 1 }} />
            <div className="song-name-container">
              <div className="song-name">
                <Typography sx={{ fontWeight: "bold", fontSize: "10px", color: "#000 !important" }}>
                  {song}
                </Typography>
              </div>
            </div>
          </Box>
        </Box>

        <Box sx={{ ml: 2 }}>
          <Button
            size="small"
            sx={{
              fontSize: "10px",
              color: "#000 !important", // Ensure the button text is black
              border: "2px solid #000",
            }}
          >
            Follow
          </Button>
        </Box>
      </Box>

      <img
        className="videoFooter_Record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt="Record Icon"
      />

      <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "#000 !important" }}>
        @{channel}
      </Typography>
    </Box>
  );
};

export default ReelFooter;
