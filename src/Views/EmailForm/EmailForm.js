import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import useForm from "../../CustomHooks/useForm";
import validate from "../../Utils/FormValidation";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

const EmailForm = props => {
  const { classes } = props;
  
  const { values, errors, handleChange, handleSubmit } = useForm(
    props.submitForm,
    validate
  );

  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <TextField
            error={errors.text !== ""}
            id="standard-name"
            label="Your Name"
            name="text"
            className={classes.textField}
            value={values.text || ""}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            helperText={errors.text}
          />
        </Grid>
        <Grid item>
          <TextField
            error={errors.email !== ""}
            id="standard-name"
            label="Email"
            name="email"
            className={classes.textField}
            value={values.email || ""}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            helperText={errors.email}
          />
        </Grid>
        <Grid item>
          <TextField
            error={errors.password !== ""}
            id="standard-name"
            label="Password"
            name="password"
            className={classes.textField}
            value={values.password || ""}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            helperText={errors.password}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Email this photo
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(EmailForm);
