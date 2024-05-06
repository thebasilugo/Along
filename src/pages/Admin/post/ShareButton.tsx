import React from "react";

interface ShareButtonProps {
  url: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url }) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "My image",
          url: url,
        });
        console.log("Content shared successfully");
      } else {
        console.error("Web Share API is not supported");
        // Handle sharing in alternative way or display a message to the user
      }
    } catch (error) {
      console.error("Error sharing content:", error);
    }
  };

  return <button onClick={handleShare}>Share</button>;
};

export default ShareButton;
