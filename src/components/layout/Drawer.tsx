import { useState, Suspense } from "react";
import {
  CssBaseline,
  Box,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./Sidebar";
import { ErrorBoundary } from "react-error-boundary";
import OrganizationErrorFallback from "./ErrorFallback";
import Loader from "../Loader";
import GarageIcon from "@mui/icons-material/Garage";
import { Typography } from "@mui/material";
import ahmed from "../../asset/images/passPort.jpg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAppDispatch } from "../../redux/store";
import { logoutUser } from "../../redux/slices/auth/auth.reducer";

const drawerWidth = 280;

interface Props {
  window?: () => Window;
}

export default function SideDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Grid item container flexDirection={"column"} sx={{ height: "100vh" }}>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ width: drawerWidth, left: 0, bgcolor: "#fff" }}
      >
        <Toolbar>
          <Grid
            item
            gap={3}
            container
            flexWrap={"nowrap"}
            alignItems={"center"}
            display={{ xs: "block", md: "none" }}
          >
            <Grid item flex={1}>
              <Grid
                item
                container
                flexDirection={"row"}
                alignItems={"center"}
                gap={3}
              >
                <GarageIcon
                  sx={{
                    fontSize: "5rem",
                    color: "black",
                  }}
                />
                <Typography fontWeight={600} color={"darkgrey"}>
                  ALONG
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SideBar handleDrawerToggle={handleDrawerToggle} />
    </Grid>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          bgcolor: "#fff",
        }}
        elevation={0}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" sx={{ mr: 2 }} />
            <GarageIcon
              sx={{
                fontSize: "3rem",
                color: "black",
              }}
            />
            <Typography fontWeight={600} color={"darkgrey"}>
              ALONG
            </Typography>
          </IconButton>
          <Grid item container justifyContent={"end"}>
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Avatar src={ahmed}></Avatar>
              <IconButton onClick={handleClick}>
                <KeyboardArrowDownIcon
                  color="success"
                  sx={{ fontSize: "3rem" }}
                />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => navigate("/settings")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          disableScrollLock={true}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* disabled the border color here */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              border: "none",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: "100%",
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
            marginTop: "6rem",
          },
        }}
      >
        {/* <Toolbar /> */}
        <ErrorBoundary
          FallbackComponent={OrganizationErrorFallback}
          onReset={() => navigate("/")}
        >
          <Suspense fallback={<Loader />}>
            <Grid
              item
              container
              padding={"1rem"}
              borderRadius={"5rem"}
              height={"100vh"}
              boxShadow={3}
              paddingX={6}
              paddingY={4}
            >
              <Outlet />
            </Grid>
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Box>
  );
}
