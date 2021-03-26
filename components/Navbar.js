import React from "react";
import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import GlobalContext from "../context/context";

const useStyles = makeStyles({
  rootInputColor: {
    color: "#fffff",
  },
  iconInput: {
    display: "inline-block",
  },
});
const Navbar = () => {
  const { search, setSearch, handleSearch } = React.useContext(GlobalContext);

  const classes = useStyles();

  return (
    <AppBar color="primary" postion="fixed">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6} sm>
            <Typography variant="h5">
              Mobi
              <Typography style={{ color: "#c6ff00", display: "inline-block" }}>
                NEWZZ
              </Typography>
            </Typography>
          </Grid>
          <Grid item></Grid>
          <Grid
            item
            xs={12}
            sm
            style={{ display: "flex", alignItems: "center" }}
          >
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              margin="normal"
              label="search"
              onChange={(e) => setSearch(e.target.value)}
              className={classes.rootInputColor}
            />
            <Button size="small" onClick={() => handleSearch()}>
              <SearchOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
