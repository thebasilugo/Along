import * as React from "react";
import { Box, Button, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
// import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Badge from "@mui/material/Badge";
import SearchComponent from "../../../../components/SearchComponent";
import SavedDraftForm from "./SavedDraftForm";
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function DraftDialog() {
  const [open, setOpen] = useState(false);
  //   const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [openList, setOpenList] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleListOpen = () => {
    setOpenList(!openList);
  };
  //   const handleListOpen = (index: number) => {
  //     if (selectedItem === index) {
  //       setSelectedItem(null);
  //     } else {
  //       setSelectedItem(index);
  //       setOpenList(true);
  //     }
  //   };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Badge badgeContent={1} color="success">
        <Button
          variant="outlined"
          onClick={handleClickOpen}
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
          startIcon={<PriorityHighIcon sx={{ color: "#fff" }} />}
        >
          Manage Draft
        </Button>
      </Badge>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{ position: "relative", bgcolor: "#f5f5f5", color: "#29292D" }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              component="div"
              fontWeight={600}
            >
              Draft
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid item container flexDirection={"column"} marginTop={2} xs={12}>
          <Grid item sx={{ width: "20%", marginX: "1rem" }}>
            <SearchComponent placeholder="search by name" />
          </Grid>
          <Grid item>
            <Box>
              <List
                sx={{ width: "100%", bgcolor: "background.paper" }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                // subheader={
                //   <ListSubheader
                //     component="div"
                //     id="nested-list-subheader"
                //     sx={{ fontSize: "1.3rem" }}
                //   >
                //     Manage your saved drafts here
                //   </ListSubheader>
                // }
              >
                <ListItemButton
                  onClick={handleListOpen}
                  //   onClick={() => {
                  //     handleListOpen(index);
                  //     setSelectedNonConformity(report);
                  //   }}
                  //   sx={{
                  //     "&:hover": {
                  //       backgroundColor: "rgba(0, 0, 0, 0.4)",
                  //     },
                  //     backgroundColor:
                  //       selectedItem === index ? "rgba(0, 0, 0, 0.06)" : "inherit",
                  //   }}
                >
                  <ListItemIcon>
                    <DirectionsCarIcon />
                  </ListItemIcon>
                  <ListItemText primary="How to get to jebba from idumota" />
                  <div>
                    <Typography
                      sx={{
                        paddingY: "1rem",
                        fontSize: "1.3rem",
                        color: "#6C6A76",
                      }}
                    >
                      Last Edited 12/12/12
                    </Typography>
                  </div>

                  {openList ? <ExpandLess /> : <ExpandMore />}
                  {/* {openList && selectedItem === index ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )} */}
                </ListItemButton>
                {/* {selectedItem !== null && selectedItem === index && (
              )}  */}
                <Collapse in={openList} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Grid item container marginX={2}>
                      <SavedDraftForm />
                    </Grid>
                  </List>
                </Collapse>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
