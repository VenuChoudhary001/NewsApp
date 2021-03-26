import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
// import { absolutevision } from "../public";
const useStyles = makeStyles({
  root: {
    minWidth: "300px",
  },
  media: {
    minWidth: "300px",
    paddingTop: "56.25%", // 16:9
  },
});
function NewsCards({ props }) {
  const classes = useStyles();
  const { author, title, urlToImage, url, content, publishedAt } = props;

  return (
    <Card variant="outlined" className={classes.root}>
      <CardMedia
        image={urlToImage || "/absolutvision.jpg"}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {content}
        </Typography>
        <Typography variant="caption" color="textSecondary">
          Author :{author || "Anonymous"}
        </Typography>
        <br />
        <Typography variant="caption" color="textSecondary">
          Published : {publishedAt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <a href={url} target="_blank">
            Read more
          </a>
        </Button>
      </CardActions>
    </Card>
  );
}

export default NewsCards;
