import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const ReelSidebar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "30%",
        right: "5%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Box sx={{ padding: "10px", textAlign: "center" }}>
        <i
          className="fab fa-tiktok"
          style={{
            color: "#000",
            fontSize: "2.5em",
            borderRadius: "50%",
            textShadow: "3px 3px #ff3353fc, -3px -3px cyan",
          }}
        ></i>
      </Box>

      <Box sx={{ padding: "10px", textAlign: "center" }}>
        {liked ? (
          <FavoriteIcon
            fontSize="medium"
            onClick={() => setLiked(false)}
            sx={{ cursor: "pointer",color:"#000" }}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="small"
            onClick={() => setLiked(true)}
            sx={{ cursor: "pointer",color:"#000" }}
          />
        )}
        <Typography sx={{ marginTop: "5px" ,color:"#000"}}>{liked ? likes + 1 : likes}</Typography>
      </Box>

      <Box sx={{ padding: "10px", textAlign: "center" ,color:"#000"}}>
        <MessageIcon fontSize="small" />
        <Typography sx={{ marginTop: "5px" ,color:"#000"}}>{messages}</Typography>
      </Box>

      <Box sx={{ padding: "10px", textAlign: "center",color:"#000" }}>
        <TelegramIcon fontSize="small" />
        <Typography sx={{ marginTop: "5px" ,color:"#000"}}>{shares}</Typography>
      </Box>
      <Box sx={{ padding: "10px", textAlign: "center",color:"#000" }}>
        <BookmarkBorderIcon fontSize="small" />
        <Typography sx={{ marginTop: "5px" ,color:"#000"}}>{shares}</Typography>
      </Box>
      <Box sx={{ padding: "10px", textAlign: "center",color:"#000" }}>
        <MoreVertIcon fontSize="small" />
      </Box>
    </Box>
  );
};

export default ReelSidebar;
