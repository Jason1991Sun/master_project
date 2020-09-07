import * as React from "react";
import withInstagramFeed from "origen-react-instagram-feed";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import compose from "recompose/compose";

const styles = () => ({
  wrapper: {},
  image: {
    width: "160px",
    height: "160px",
    margin: "15px 0",
  },
});

export type Props = {
  media?: Array<{
    displayImage: string,
    id?: string,
    postLink?: string,
    accessibilityCaption?: string,
  }>,
  account: string,
  classes: { [$Keys<$Call<typeof styles>>]: string },
  status: "completed" | "loading" | "failed",
};

const InstaGrid = ({ classes, media, account, status }: Props) => {
  return (
    <Grid container className={classes.wrapper}>
      {media &&
        status === "completed" &&
        media.map(({ displayImage, id, postLink, accessibilityCaption }) => (
          <Grid item xs={6} sm={3} md={2} key={id || displayImage}>
            <ButtonBase
              target="_blank"
              href={postLink || `https://www.instagram.com/${account}/`}
            >
              <img
                src={displayImage}
                alt={accessibilityCaption || "Instagram picture"}
                className={classes.image}
              />
            </ButtonBase>
          </Grid>
        ))}
      {status === "loading" && <p>loading...</p>}
      {status === "failed" && <p>Check instagram here</p>}
    </Grid>
  );
};

InstaGrid.defaultProps = {
  media: undefined,
};

export default compose(withInstagramFeed, withStyles(styles))(InstaGrid);
