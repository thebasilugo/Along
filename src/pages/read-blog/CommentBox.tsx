import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Box,
  Typography,
  Button,
} from "@mui/material";
import FormikControl from "../../components/validation/FormikControl";
import { Formik, Form } from "formik";
import ahmed from "../../asset/images/passPort.jpg";
import { toast } from "react-toastify";

interface initialValuesProps {
  comment: string;
}
const CommentBox = () => {
  const initialValues: initialValuesProps = {
    comment: "",
  };
  const handleSubmit = (values: initialValuesProps) => {
    console.log(values);
  };
  const handleSignIn = () => {
    toast.info("kindly sign in to leave a comment");
  };
  return (
    <>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginY: "1.5rem",
            }}
          >
            <Avatar src={ahmed} />
            <Typography>Lameda</Typography>
          </Box>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
              <Grid item container flexDirection={"column"} gap={2}>
                <Grid item>
                  <FormikControl
                    name="comment"
                    placeholder="what are your thoughts"
                  />
                </Grid>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: ".3rem",
                  }}
                >
                  <Button variant="contained" color="error">
                    Cancel
                  </Button>
                  <Button variant="contained" onClick={handleSignIn}>
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </CardContent>
      </Card>
    </>
  );
};

export default CommentBox;
