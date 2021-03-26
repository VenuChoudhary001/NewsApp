import React, { useContext } from "react";
import NewsCards from "../components/NewsCards";
import {
  CssBaseline,
  Divider,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import Navbar from "../components/Navbar";
import GlobalContext from "../context/context";
const useStyels = makeStyles({
  cardContainer: {
    padding: "10%",
  },
});

function index(props) {
  const { posts } = props;
  const { articles } = posts;
  const { searchPosts } = useContext(GlobalContext);

  const classes = useStyels();
  return (
    <Grid container spacing={4} direction="column">
      <Grid item xs={3}>
        <Navbar />
      </Grid>
      <Grid item></Grid>
      <Grid item container spacing={2} direction="row">
        {searchPosts
          ? searchPosts.map((item) => {
              return (
                <Grid item xs={12} sm={4} md={4}>
                  <NewsCards
                    props={item}
                    key={new Date().getTime().toString()}
                  />
                </Grid>
              );
            })
          : articles.map((item) => {
              return (
                <Grid item xs={12} sm={4} md={4}>
                  <NewsCards
                    props={item}
                    key={new Date().getTime().toString()}
                  />
                </Grid>
              );
            })}
      </Grid>
      <CssBaseline />
    </Grid>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=1cb83cccf37a4b1b84942ce07256e529"
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};

export default index;
