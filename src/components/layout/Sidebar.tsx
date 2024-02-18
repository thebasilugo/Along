import { useState, FC, useLayoutEffect } from "react";
import {
  List,
  Grid,
  Toolbar,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/LogoutOutlined";
import Profile from "./Profile";
import { useLocation, useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppDispatch } from "../../redux/store";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { logoutUser } from "../../redux/slices/auth/auth.reducer";
import CameraRollIcon from "@mui/icons-material/CameraRoll";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import { getUserType } from "../../utils";

interface HeaderProps {
  handleDrawerToggle: () => void;
}

const SideBar: FC<HeaderProps> = ({ handleDrawerToggle }) => {
  const accountType = getUserType();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [active, setActive] = useState<string>("/");
  const handleNavigate = (text: string) => (): void => {
    navigate(text);
    setActive(text);
    handleDrawerToggle();
  };
  function extractFirstPathSegment(): string {
    const segments = pathname.split("/");
    if (segments.length > 1) {
      return `/${segments[1]}`;
    }

    return pathname;
  }
  useLayoutEffect(() => {
    setActive(extractFirstPathSegment());
    //eslint-disable-next-line
  }, [location.pathname]);
  const arr = [
    {
      title: "Home",
      Icon: <HomeIcon />,
      route: "/landing-page",
    },
    {
      title: "Dashboard",
      Icon: <DashboardIcon />,
      route: "/dashboard",
    },

    {
      title: "Blog",
      Icon: <CameraRollIcon />,
      route: "/blog",
    },
    ...(accountType !== "user"
      ? [
          {
            title: "Create",
            Icon: <NoteAddIcon />,
            route: "/create-post",
          },
        ]
      : []),
    ...(accountType !== "user"
      ? [
          {
            title: "Stats",
            Icon: <BarChartIcon />,
            route: "/stats",
          },
        ]
      : []),

    {
      title: "Settings",
      Icon: <SettingsIcon />,
      route: "/settings",
    },
  ];

  // const environment = import.meta.env.DEV;

  return (
    <Grid
      item
      container
      flexDirection={"column"}
      sx={{
        flex: 1,
        marginTop: "6.5rem",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 1), rgba(0, 237, 0, 0.2))",
      }}
    >
      <Toolbar disableGutters>
        <Profile />
      </Toolbar>
      <List
        disablePadding
        dense
        sx={{
          flex: 1,
          mt: 2,
          gap: 1,
          mx: 1,
          pb: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <>
          {arr.map((item, index: number) => {
            const { route, title, Icon } = item;
            return (
              <ListItemButton
                dense
                key={index}
                sx={{
                  maxHeight: "4.5rem",
                  borderRadius: "2rem",
                  boxShadow: "2rem",
                }}
                onClick={handleNavigate(route)}
                selected={active === route}
              >
                <ListItemIcon>{Icon}</ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            );
          })}
          <Grid item container alignItems={"flex-end"} sx={{ mt: "auto" }}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} onClick={handleLogout} />
            </ListItemButton>
          </Grid>
        </>
      </List>
    </Grid>
  );
};
export default SideBar;
