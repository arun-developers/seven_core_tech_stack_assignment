import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Loader from "../components/loader";
import { formatDate, truncateText } from "../utils";
import noImageFound from "../assets/noImageFound.png";
import PaginationRounded from "../components/pagination";
import { useNavigate } from "react-router-dom";

function BlogPostList(props) {
  const { listData, loading, page, setPage } = props;
  const [showMore, setShowMore] = useState({});
  const navigate = useNavigate();
  const handleCardClick = (e, index) => {
    navigate(`/post/${index}`)
  }

  return (
    <Grid
      sx={{ alignItems: "center", justifyContent: "center" }}
      container
      spacing={2}
    >
      {loading ? (
        <Loader />
      ) : (
        listData &&
        listData.length > 0 &&
        listData.map((list, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardActionArea onClick={(e) => handleCardClick(e,index)}>
              <Card
                sx={{
                  height: 600,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardMedia
                  sx={{ height: 200 }}
                  image={list.urlToImage ? list.urlToImage : noImageFound}
                  title={list.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {list.title}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Author: {list.author}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    Source: {list.source.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {truncateText(list.content, 200)}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    PublishedAt: {formatDate(list.publishedAt)}
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))
      )}
      <PaginationRounded page={page} setPage={setPage} />
    </Grid>
  );
}

export default BlogPostList;
