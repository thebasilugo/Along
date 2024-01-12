import {
  ListItem,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  List,
} from "@mui/material";
const Profile = () => {
  return (
    <List
      component={"div"}
      disablePadding
      sx={{ width: "100%", bgcolor: "#F5F5F5" }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt={"kunle wala"}
            variant="rounded"
            sx={{ bgcolor: "#fff", color: "#333" }}
          ></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              noWrap
              sx={{ fontWeight: 600, fontSize: "1.5rem", maxWidth: "100%" }}
              component="p"
            >
              Ahmed
            </Typography>
          }
          secondary={
            <Typography
              noWrap
              component="p"
              sx={{
                maxWidth: "100%",
                color: "text.semi",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              mohammed@mail.com
            </Typography>
          }
          secondaryTypographyProps={{
            maxWidth: "100%",
            color: "text.semi",
            fontWeight: 400,
            textAlign: "left",
          }}
          primaryTypographyProps={{
            fontWeight: 600,
            fontSize: "1.5rem",
            color: "text.semi",
          }}
        />
      </ListItem>
      <Divider flexItem />
    </List>
  );
};

export default Profile;
