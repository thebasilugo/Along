import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
interface ChangeProfilePhotoProps {
  style?: React.CSSProperties; // Optional style prop
}
const UpdateProfilePicture: React.FC<ChangeProfilePhotoProps> = ({ style }) => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  //   const handleProfilePicture = async (file: File) => {
  //     try {
  //       const payload = new FormData();
  //       payload.append('avatar', file);

  //       const response = await update(payload);
  //       if ('data' in response) toast.success(response.data as ToastContent);
  //       setProfilePicture(null);
  //     } catch (error) {
  //       const errMsg = errorMessage(error);
  //       toast.error(errMsg as ToastContent);
  //       setProfilePicture(null);
  //     }
  //   };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };
  console.log(profilePicture);

  return (
    <label
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2.5rem",
        height: "2.5rem",
        padding: "0.5rem",
        fontWeight: 600,
        color: "white",
        backgroundColor: "#1a202c",
        borderRadius: "50%",
        cursor: "pointer",
        bottom: "0rem",
        left: "5rem",
        transition: "background-color 0.3s",
        ...style,
      }}
    >
      {/* {isLoading ? <Loader /> : <CloudUploadIcon />} */}
      <CloudUploadIcon color="error"/>
      <input
        style={{ display: "none" }}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </label>
  );
};

export default UpdateProfilePicture;
