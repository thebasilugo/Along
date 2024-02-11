import { Card, CardProps, SxProps, Theme } from "@mui/material";
import { FC, ReactNode } from "react";

interface CustomCardProps extends CardProps {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
}

const CustomCard: FC<CustomCardProps> = ({ children, sx, ...rest }) => {
  return (
    <Card
      variant="elevation"
      {...rest}
      sx={{
        border: "0px solid transparent",
        paddingX: "2rem",
        paddingY: "1rem",
        borderRadius: "2rem",
        ...sx,
      }}
    >
      {children}
    </Card>
  );
};
CustomCard.defaultProps = {
  variant: "outlined",
};

export default CustomCard;
