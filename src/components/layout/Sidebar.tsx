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
// import { errorMessage } from 'utils';
import { HomeRepairService } from "@mui/icons-material";
import { useAppDispatch } from "../../redux/store";
import { logoutUser } from "../../redux/slices/auth/auth.reducer";

interface HeaderProps {
  handleDrawerToggle: () => void;
}

const SideBar: FC<HeaderProps> = ({ handleDrawerToggle }) => {
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
      Icon: <HomeRepairService />,
      route: "/landing-page",
    },
    {
      title: "Dashboard",
      Icon: <HomeRepairService />,
      route: "/dashboard",
    },

    {
      title: "Blog",
      Icon: <HomeRepairService />,
      route: "/blog",
    },
    {
      title: "Create",
      Icon: <HomeRepairService />,
      route: "/create-post",
    },
    {
      title: "Stats",
      Icon: <HomeRepairService />,
      route: "/stats",
    },
    {
      title: "Settings",
      Icon: <HomeRepairService />,
      route: "/settings",
    },
  ];

  // const environment = import.meta.env.DEV;

  return (
    <Grid
      item
      container
      flexDirection={"column"}
      sx={{ flex: 1, marginTop: "6.5rem" }}
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
            const { route, title } = item;
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
                <ListItemIcon>
                  <HomeRepairService />
                </ListItemIcon>
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
