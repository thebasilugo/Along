import { useState, FC, useLayoutEffect } from "react";
import {
  List,
  Divider,
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
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { DeveloperBoardOffOutlined, DeveloperMode } from "@mui/icons-material";
import { HomeRepairService } from "@mui/icons-material";

interface HeaderProps {
  handleDrawerToggle: () => void;
}

const SideBar: FC<HeaderProps> = ({ handleDrawerToggle }) => {
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
      title: "Getting Started",
      Icon: <HomeRepairService />,
      route: "/getting-started",
    },

    {
      title: "Profile",
      Icon: <HomeRepairService />,
      route: "/profile",
    },
  ];
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const environment = import.meta.env.DEV;

  return (
    <Grid
      item
      container
      flexDirection={"column"}
      sx={{ flex: 1, bgcolor: "#F5F5F5" }}
    >
      <Toolbar />
      <Toolbar disableGutters>
        <Profile />
        <Divider flexItem />
      </Toolbar>
      <List
        color="primary"
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
                sx={{ maxHeight: "4.5rem" }}
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

          {/* Developers */}
          {environment && (
            <>
              <ListItemButton
                onClick={handleClick}
                sx={{ maxHeight: "4.5rem" }}
              >
                <ListItemIcon>
                  <DeveloperMode />
                </ListItemIcon>
                <ListItemText primary="Developers" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4, maxHeight: "4.5rem", mb: 1 }}
                    onClick={handleNavigate("/ahmed")}
                    selected={active === "/ahmed"}
                  >
                    <ListItemIcon>
                      <DeveloperBoardOffOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Ahmed" />
                  </ListItemButton>

                  <ListItemButton
                    sx={{ pl: 4, maxHeight: "4.5rem", mb: 1 }}
                    onClick={handleNavigate("/isiaka")}
                    selected={active === "/isiaka"}
                  >
                    <ListItemIcon>
                      <DeveloperBoardOffOutlined />
                    </ListItemIcon>
                    <ListItemText primary="Isiaka" />
                  </ListItemButton>
                </List>
              </Collapse>
            </>
          )}

          <Grid item container alignItems={"flex-end"} sx={{ mt: "auto" }}>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </Grid>
        </>
      </List>
    </Grid>
  );
};
export default SideBar;
