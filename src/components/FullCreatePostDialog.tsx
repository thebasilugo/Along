import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import CustomButton from "./CustomButton";
import { Stack, Grid } from "@mui/material";
import CreateForm from "../pages/Admin/post/Form";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface dialogProps {
  mode: "create" | "edit";
  id?: string;
  title?: string;
  description?: string;
  image?: any;
}

export default function FullCreatePostDialog({
  mode = "create",
  id,
  title,
  description,
  image,
}: dialogProps) {
  const editPayload = {
    id: id,
    title: title,
    description: description,
    image: image,
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //   const handleCreate = () => {
  //     alert("will create");
  //   };
  const handleSaveDraft = () => {
    alert("will save as draft");
  };

  return (
    <React.Fragment>
      {mode == "create" ? (
        <CustomButton
          onClick={handleClickOpen}
          title="Create New Post"
          variant="outlined"
          sx={{
            paddingX: "2rem",
            paddingY: "1rem",
            textTransform: "initial",
            fontSize: "1.2rem",
            bgcolor: "#323a4d",
            color: "#fff",
            "&:hover": {
              color: "black",
            },
          }}
        />
      ) : (
        <IconButton onClick={handleClickOpen}>
          <ModeEditIcon />
        </IconButton>
      )}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
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
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {mode === "create" ? "Get Started" : "Edit mode"}
            </Typography>
            <Stack flexDirection={"row"} gap={3}>
              {/* <Button
                autoFocus
                variant="outlined"
                color="inherit"
                onClick={handleCreate}
              >
                Create
              </Button> */}
              {mode == "create" && (
                <Button
                  autoFocus
                  variant="outlined"
                  color="inherit"
                  onClick={handleSaveDraft}
                >
                  save as draft
                </Button>
              )}
            </Stack>
          </Toolbar>
        </AppBar>
        <Grid
          item
          container
          marginTop={4}
          padding={2}
          flexDirection={"column"}
          gap={3}
        >
          <Grid item>
            <Typography width={"100%"} variant="h2" textAlign={"center"}>
              {mode == "create"
                ? "  Follow the layout below to create your post"
                : "Edit Post"}
            </Typography>
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <CreateForm editPostPayload={editPayload} mode={mode}/>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
