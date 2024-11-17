import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import img from "../components/img/bg1.jpg";
import img2 from "../components/img/bg1.jpg";
import img3 from "../components/img/bg1.jpg";

const Doucment1 = () => {
  const data = [
    {
      imgUrl: img,
      content: "This is sample card 1",
    },
    {
      imgUrl: img2,
      content: "This is sample card 2",
    },
    {
      imgUrl: img3,
      content: "This is sample card 3",
    },
    {
      imgUrl: img,
      content: "This is sample card 1",
    },
    {
      imgUrl: img2,
      content: "This is sample card 2",
    },
    {
      imgUrl: img3,
      content: "This is sample card 3",
    },
  ];

  return (
    <div style={{ padding: "30px" }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid key={index} item md={6} lg={4} sm={6}>
            <Card>
              <img src={item.imgUrl} alt="" style={{ maxWidth: "100%" }} />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Doucment1;
