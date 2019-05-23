//There is a switch button to change the way this control returns value
//either it passes it while typing or waits until user clicks

import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  }
});

const SearchControl = (props, updateQueryHandle, isLoading) => {
  const { classes } = props;
  const [searchText, setSearchText] = useState("");
  const [searchImmediately, setSearchImmediately] = useState(true);

  const handleChange = event => {
    setSearchText(event.target.value);
    if (searchImmediately) props.updateQueryHandle(event.target.value);
  };

  const handleSearchSettingChange = event => {
    setSearchText("");
    props.updateQueryHandle("");
    setSearchImmediately(event.target.checked);
  };

  const handleButtonClick = () => {
    const queryString = searchText;
    props.updateQueryHandle(queryString);
  };

  return (
    <div className={classes.root}>
      <FormGroup row>
      <FormControl  className={classes.formControl}>
        <FormControlLabel
          
          control={
            <Switch
              checked={searchImmediately}
              onChange={handleSearchSettingChange}
              value="immediateSearch"
              color="primary"
            />
          }
          label={
            searchImmediately ? "Search while typing" : "Click button to search"
          }
        />
        </FormControl>
        <TextField

          style={{ padding: 24 }}
          id="searchInput"
          label="Search Query"
          placeholder="Search for Photos"
          margin="normal"
          onChange={handleChange}
          value={searchText}
        />
        {!searchImmediately ? (
          <FormControl  className={classes.formControl}>
          <div>
            <div>
              <Button
                className={classes.formControl}
                variant="contained"
                color="primary"
                disabled={props.isLoading}
                onClick={handleButtonClick}
              >
                Search
              </Button>
              {props.isLoading && <CircularProgress size={24} />}
            </div>
          </div>
          </FormControl>
        ) : (
          ""
        )}
      </FormGroup>
    </div>
  );
};

export default withStyles(styles)(SearchControl);
