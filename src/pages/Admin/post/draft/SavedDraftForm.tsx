import { Grid, Box, Typography } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import FormikControl from "../../../../components/validation/FormikControl";
import CustomButton from "../../../../components/CustomButton";
import { CreatePostSchema } from "../../../../components/validation/ValidationSchema";
import { useState } from "react";
import { Send } from "@mui/icons-material";
import SaveIcon from "@mui/icons-material/Save";
import {
  useSavePostAsDraftMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../../../../redux/api/post/mutation";
import { ToastContent, toast } from "react-toastify";
import { useAppSelector } from "../../../../redux/store";
import MultipleButton from "../../../../components/MultipleButton";
// import { Drafts } from "@mui/icons-material";

interface initialValuesProps {
  title: string;
  description: string;
  image: File | null;
  category: string;
}
const SavedDraftForm = ({ editPostPayload, mode }: any) => {
  const { user } = useAppSelector((state) => state.auth);
  const initialValues: initialValuesProps = {
    title: editPostPayload?.title || "",
    description: editPostPayload?.description || "",
    image: editPostPayload?.image || null,
    category: editPostPayload?.category || "",
  };
  const [choice, setChoice] = useState("createNow");
  console.log(choice);
  const options = [
    {
      key: "Parks",
      value: "parks",
    },
    {
      key: "Resturants and cafes",
      value: "resturant and cafes",
    },
    {
      key: "Hotels",
      value: "hotels",
    },
    {
      key: "Malls",
      value: "malls",
    },
    {
      key: "Government Offices",
      value: "governement offcies",
    },
  ];
  const [createPost, { isLoading: isCreating }] = useCreatePostMutation();
  const [saveDraft, { isLoading: isSaving }] = useSavePostAsDraftMutation();
  const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();

  const handleSubmit = async (
    values: initialValuesProps,
    { resetForm }: FormikHelpers<initialValuesProps>
  ): Promise<void> => {
    const { title, description, image, category } = values;
    const payload = {
      title: title,
      description: description,
      image: image ? await convertFileToBase64(image) : null,
      category: category,
      userEmail: user?.email,
    };
    if (mode === "create" && choice === "publish") {
      const response = await createPost(payload);
      if ("data" in response) {
        toast.success("post created successfully");
        resetForm();
      }
      if ("error" in response) {
        const errMsg = response.error;
        toast.error(errMsg as ToastContent);
      }
    } else if (mode === "edit") {
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
    } else {
      const response = await saveDraft(payload);
      if ("data" in response) {
        toast.success("post saved as draft");
        resetForm();
      }
      if ("error" in response) {
        const errMsg = response.error;
        toast.error(errMsg as ToastContent);
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
  const optionsIcon = [
    { Icon: Send, text: "Publish Post" },
    { Icon: SaveIcon, text: "Update draft" },
    // { Icon: Drafts, text: "Save as draft" },
  ];
  return (
    <Grid item xs={12}>
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
                      <Grid
                        item
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "end",
                        }}
                      >
                        <MultipleButton
                          options={optionsIcon}
                          setChoice={setChoice}
                          isLoading={isCreating || isUpdating || isSaving}
                        />
                      </Grid>
                      <Grid item>
                        {mode === "edit" && (
                          <CustomButton
                            title={
                              mode === "create" ? "Publish Post" : "Update Post"
                            }
                            type="submit"
                            isSubmitting={
                              mode === "create" ? isCreating : isUpdating
                            }
                          />
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default SavedDraftForm;
