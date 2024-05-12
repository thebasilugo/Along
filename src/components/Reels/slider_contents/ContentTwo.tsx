import { Box } from "@mui/material";
const ContentTwo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1C2458",
        height: "100%",
        width: "100%",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1659329296398-04f11b7f4778?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHJlc3R1YXJhbnRzfGVufDB8fDB8fHww"
        alt="image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </Box>
  );
};

export default ContentTwo;
