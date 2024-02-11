import { Grid, Box, Typography } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import FormikControl from "../../../components/validation/FormikControl";
import CustomButton from "../../../components/CustomButton";
import { CreatePostSchema } from "../../../components/validation/ValidationSchema";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../../../redux/api/post/mutation";
import { ToastContent, toast } from "react-toastify";

interface initialValuesProps {
  title: string;
  description: string;
  image: File | null;
  category: string;
}

const CreateForm = ({ editPostPayload, mode }: any) => {
  console.log(mode);
  const initialValues: initialValuesProps = {
    title: editPostPayload?.title || "",
    description: editPostPayload?.description || "",
    image: editPostPayload?.image || null,
    category: "",
  };

  const options = [
    {
      key: "Resturant",
      value: "resturant",
    },
    {
      key: "Amusement park",
      value: "amusement park",
    },
    {
      key: "Resort center",
      value: "resort center",
    },
    {
      key: "Nysc camp",
      value: "resturant",
    },
  ];

  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();

  const handleSubmit = async (
    values: initialValuesProps,
    { resetForm }: FormikHelpers<initialValuesProps>
  ): Promise<void> => {
    const { title, description, image } = values;
    const payload = {
      title: title,
      description: description,
      image: image ? await convertFileToBase64(image) : null,
    };

    if (mode === "create") {
      const response = await createPost(payload);
      if ("data" in response) {
        toast.success("post created successfully");
        resetForm();
      }
      if ("error" in response) {
        const errMsg = response.error;
        toast.error(errMsg as ToastContent);
      }
    } else {
      const response = await updatePost({
        postId: editPostPayload?.id,
        body: payload,
      });
      if ("data" in response) {
        toast.success("post updated successfully");
        resetForm();
      }
      if ("error" in response) {
        // const errMsg = response.error;
        toast.error("error occured");
      }
    }
  };

  const convertFileToBase64 = (file: File): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        resolve(reader.result as string);
      };

      reader.onerror = () => {
        reject(null);
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CreatePostSchema}
    >
      {({ values }) => {
        return (
          <Form>
            <Box sx={{ width: "50%", marginX: "auto" }}>
              <Grid item container flexDirection={"column"} gap={3}>
                <Grid item>
                  <FormikControl name="title" label="Article Title" />
                </Grid>
                <Grid item>
                  <FormikControl
                    name="category"
                    placeholder="Category"
                    control="select"
                    options={options}
                  />
                </Grid>
                <Grid item>
                  <FormikControl
                    name="description"
                    label="Along Place Description"
                    multiline
                    minRows={7}
                  />
                </Grid>
                <Grid item xs={12}>
                  {values?.image !== null && (
                    <Typography>
                      <span style={{ fontWeight: "600" }}>
                        uploaded file :{" "}
                      </span>
                      {(values as any)?.image?.name}
                    </Typography>
                  )}
                  <FormikControl name="image" control="files" />
                </Grid>
                <Grid item>
                  <Grid item container>
                    <CustomButton
                      title={mode === "create" ? "Publish Post" : "Update Post"}
                      type="submit"
                      isSubmitting={mode === "create" ? isCreating : isUpdating}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateForm;
