import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Box } from "@mui/material";
import noImageFound from "../assets/noImageFound.png";
import { formatDate } from "../utils";
import BackButton from "../components/backButton";
function BlogPostDetails({ listData }) {
  const { id } = useParams();
  const post = listData[id];

  return (
    <Box>
      <Card sx={{ width: "100%", height: "100%", position: "relative" }}>
        <BackButton tooltip="Go to Homepage" />
        <CardMedia
          component="img"
          height="300"
          image={post.urlToImage ? post.urlToImage : noImageFound}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.content}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Source: {post.source.name}
          </Typography>
          <Typography variant="body2" color="text.primary">
            PublishedAt: {formatDate(post.publishedAt)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default BlogPostDetails;
