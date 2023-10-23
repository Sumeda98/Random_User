import React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Container } from "@mui/material";
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import NightsStayIcon from '@mui/icons-material/NightsStay';

export default function TitleBar({ toggleThemeMode, darkMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Container sx={{ display: "flex" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Random Profile
            </Typography>
            <IconButton sx={{border:'1px solid'}} color="inherit" onClick={toggleThemeMode}>
              {darkMode ? < NightsStayIcon/> : <WbSunnyRoundedIcon />}
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
