import { Card, Divider, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  cardStyle,
  flexCenterStyle,
  imgContainer,
  imgUser,
} from "../assets/Style";
import axios from "axios";

const RandomUser = () => {
  const [userData, setUserData] = useState([]);

  const fetchRandomUser = (DarkMode) => {
    axios
      .get("https://randomuser.me/api/?nat=gb,us,au")
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
    fetchRandomUser();
  }, []);

  const handleGenerateClick = () => {
    fetchRandomUser();
  };

  const userDOB = new Date(userData.dob?.date);

  const year = userDOB.getFullYear();
  const month = (userDOB.getMonth() + 1).toString().padStart(2, "0");
  const day = userDOB.getDate().toString().padStart(2, "0");

  const formattedDOB = `${year}-${month}-${day}`;
  // console.log(formattedDOB);

  return (
    <div>
      <div style={flexCenterStyle}>
        <Card  sx={cardStyle}>
          <div style={flexCenterStyle}>
            <div style={imgContainer}>
              <img style={imgUser} src={userData?.picture?.large} alt="Image" />
            </div>
          </div>
          <Divider sx={{ mt: 2 }}></Divider>
          <div style={{ textAlign: "center" }}>
            {userData ? (
              <div>
                <Typography variant="h6">
                  {userData.name?.title +
                    ". " +
                    userData.name?.first +
                    " " +
                    userData.name?.last}
                </Typography>
                <Typography variant="subtitle1">{userData?.email}</Typography>
                <Typography variant="subtitle1">{formattedDOB}</Typography>
                <Typography variant="subtitle1">{userData?.phone}</Typography>
                <Typography variant="subtitle1">
                  {userData.location?.street.number +
                    ", " +
                    userData.location?.street.name +
                    ", " +
                    userData.location?.city +
                    ", " +
                    userData.location?.state +
                    ", " +
                    userData.location?.country}
                </Typography>
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
