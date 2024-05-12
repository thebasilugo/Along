import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Badge, Grid } from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function CommentDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Badge badgeContent={8} color="success">
        <IconButton onClick={handleClickOpen}>
          <CommentIcon fontSize="large" />
        </IconButton>
      </Badge>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{
          sx: {
            position: "absolute",
            width: { sm: "100%", lg: "30%" },
            right: { lg: 0 },
          },
        }}
      >
        <AppBar sx={{ position: "relative", bgcolor: "#323a4d" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h4" component="div">
              Comment (8)
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid item container flexDirection={"column"} gap={3} padding={2}>
          <Grid item>
            <CommentBox />
          </Grid>
        </Grid>
        <CommentList />
      </Dialog>
    </React.Fragment>
  );
}
