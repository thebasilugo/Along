import { useState, Suspense } from "react";
import image from "assets/images/msspace.png";
import {
  Divider,
  CssBaseline,
  Box,
  Drawer,
  IconButton,
  AppBar,
  Avatar,
  Toolbar,
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "./Sidebar";
import { ErrorBoundary } from "react-error-boundary";
import OrganizationErrorFallback from "./ErrorFallback";
import Loader from "../Loader";

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
          >
            <Grid item flex={1}>
              <Avatar
                src={image}
                alt="msspace logo"
                variant="square"
                sx={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />
      </AppBar>

      <SideBar handleDrawerToggle={handleDrawerToggle} />
    </Grid>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

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
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
          {/* <Header user={user} /> */}
        </Toolbar>
        <Divider />
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
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
          width: { xs: "100%", md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <ErrorBoundary
          FallbackComponent={OrganizationErrorFallback}
          onReset={() => navigate("/")}
        >
          <Suspense fallback={<Loader />}>
            <Outlet />{" "}
          </Suspense>
        </ErrorBoundary>
      </Box>
    </Box>
  );
}
