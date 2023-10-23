import { Card, Divider, Button, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  cardStyle,
  flexCenterStyle,
  imgContainer,
  imgUser,
  textColor,
} from "../assets/Style";
import axios from "axios";

const RandomUser = () => {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const user = response.data.results[0];
        setUserData(user);
        // console.log(user);
      })
      .catch((error) => {
        console.error("Error fetching random user data:", error);
      });
  };

  useEffect(() => {
    fetchRandomUser(); // Fetch a random user when the component mounts
  }, []);

  const handleGenerateClick = () => {
    fetchRandomUser(); // Fetch a new random user when the button is clicked
  };

  return (
    <div>
      <div style={flexCenterStyle}>
        <Card sx={cardStyle}>
          <div style={flexCenterStyle}>
            <div style={imgContainer}>
              <img style={imgUser} src={userData?.picture?.large} alt="Image" />
            </div>
          </div>
          <Divider sx={{ mt: 2 }}></Divider>
          <div style={{ textAlign: "center" }}>
            {userData ? (
              <div>
                <h3 style={textColor}>
                  {userData.name?.title +
                    ". " +
                    userData.name?.first +
                    " " +
                    userData.name?.last}
                </h3>
                <h4 style={textColor}>{userData?.email}</h4>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Card>
      </div>
      <div style={flexCenterStyle}>
        <Button
          variant="contained"
          sx={{ mt: 3, textTransform: "capitalize" }}
          onClick={handleGenerateClick}
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default RandomUser;
