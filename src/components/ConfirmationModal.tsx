import { FC, ReactNode } from "react";
import Modals from "./Modals";
import { Grid } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
interface ConfirmationModalProps {
  okAction: () => void;
  isSuccess: boolean;
  children: ReactNode;
  okLabel?: string;
  open: boolean;
  title: string;
  handleClose: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  okAction,
  isSuccess,
  children,
  okLabel,
  open,
  handleClose,
  title,
}) => {
  return (
    <Modals
      maxWidth="xs"
      handleClose={handleClose}
      isOpen={open}
      okLabel={okLabel}
      cancelLabel="Cancel"
      cancelAction={handleClose}
      title={title}
      okAction={okAction}
    >
      <Grid
        item
        container
        gap={3}
        flexDirection={"column"}
        alignItems="center"
        mb={2}
      >
        <Grid item>
          {isSuccess ? (
            <CheckCircleOutlineIcon color="success" sx={{ fontSize: "8rem" }} />
          ) : (
            <ErrorOutlineIcon color="error" sx={{ fontSize: "4rem" }} />
          )}
        </Grid>
        {children}
      </Grid>
    </Modals>
  );
};

export default ConfirmationModal;
