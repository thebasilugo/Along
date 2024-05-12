import { Grid, Typography } from "@mui/material";
import FormikControl from "../../../components/validation/FormikControl";
import { Formik, Form } from "formik";
import CustomButton from "../../../components/CustomButton";
interface intialValuesProps {
  former_password: string;
  new_password: string;
  confirm_new_password: string;
}
const ChangePassword = () => {
  const intialValues: intialValuesProps = {
    former_password: "",
    new_password: "",
    confirm_new_password: "",
  };
  const handleSubmit = (values: intialValuesProps) => {
    console.log(values);
  };
  return (
    <>
      <Grid item container flexDirection={"column"} gap={2} marginTop={2}>
        <Grid item>
          <Typography variant="h1" color={"GrayText"}>
            Change Password
          </Typography>
        </Grid>
        <Grid item>
          <Formik initialValues={intialValues} onSubmit={handleSubmit}>
            <Form>
              <Grid item container flexDirection={"column"} gap={2}>
                <Grid item>
                  <FormikControl
                    name="former_password"
                    placeholder="Input former password"
                  />
                </Grid>
                <Grid item>
                  <FormikControl
                    name="new_password"
                    placeholder="Input new password"
                  />
                </Grid>
                <Grid item>
                  <FormikControl
                    name="confirm_new_password"
                    placeholder="Confirm new password"
                  />
                </Grid>
                <Grid item>
                  <CustomButton title="submit" />
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </>
  );
};

export default ChangePassword;
