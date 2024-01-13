import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface HorizontalTextDividerProps {
  text: string; 
}

const HorizontalTextDivider = ({ text }: HorizontalTextDividerProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
      <Divider style={{ flex: 1 }} />
      <Typography variant="body2" sx={{ px: 2 }}>
        {text}
      </Typography>
      <Divider style={{ flex: 1 }} />
    </div>
  );
};

export default HorizontalTextDivider;
