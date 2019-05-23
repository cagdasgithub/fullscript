import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Modal from "../UI/Modal/Modal";
import EmailForm from "../../Views/EmailForm/EmailForm";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    width: 256,
    height: 256
  },
  fab: {
    margin: theme.spacing.unit * 1.1
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
});

const Photo = ({
  photo: {
    id,
    urls: { regular },
    links: { download },
    description,
    user: { name, location }
  },
  classes
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleEmailClick = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleEmailSend = () => {
    setOpenModal(false);
  };
  return (
    <React.Fragment>
      <Grid item>
        <ButtonBase className={classes.image} >
          <img className={classes.img}  alt="complex" src={regular} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={16}>
          <Grid item xs>
            <Typography gutterBottom variant="subtitle1">
              {description}
            </Typography>
            <Typography gutterBottom>{name}</Typography>
            <Typography color="textSecondary">{location}</Typography>
          </Grid>
          <Grid item>
            <Fab aria-label="Add"  href={regular} className={classes.fab}>
              <Icon>add</Icon>
            </Fab>
            <Fab
              aria-label="Add"
              onClick={handleEmailClick}
              className={classes.fab}
            >
              <Icon>email</Icon>
            </Fab>
            <Modal open={openModal} onClose={handleModalClose}>
              <EmailForm submitForm={handleEmailSend} />
            </Modal>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Photo);
