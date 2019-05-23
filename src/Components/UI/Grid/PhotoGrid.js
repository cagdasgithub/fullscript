import Photo from "../../Photo/Photo";
import Grid from "@material-ui/core/Grid";
import React from "react";


const PhotoGrid = props => {
  return props.data ? (
    <Grid container spacing={24} style={{ padding: 24 }}>
      {props.data.photos.map(photo => (
        <Grid item xs={12} sm={6} lg={4} xl={3} key={photo.id}>
          <Photo key={photo.id} photo={photo} />
        </Grid>
      ))}
    </Grid>
  ) : null;
};

export default PhotoGrid;
