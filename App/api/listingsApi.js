import apiClient from "./client";

const endpoint = "/listings";

const getListings = () => apiClient.get(endpoint);

const addListing = async (listing, onUploadProgress) => {
  const data = new FormData();
  apiClient.setHeaders({
    "Content-Type": "multipart/form-data",
  });
  // Basic fields - these are correct and match Postman
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value); // This needs to match the Postman format
  data.append("description", listing.description);

  // Image handling - needs to be fixed to match Postman
  if (listing.images && listing.images.length > 0) {
    listing.images.forEach((image) => {
      const imageUriParts = image.split("/");
      const fileName = imageUriParts[imageUriParts.length - 1];

      // Create the image object correctly
      data.append("images", {
        uri: image,
        type: "image/jpeg", // or detect from the file extension
        name: fileName,
      });
    });
  }

  // Location handling - optional
  if (listing.location) {
    data.append("location", JSON.stringify(listing.location));
  }

  try {
    const response = await apiClient.post(endpoint, data, {
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    });
    return response;
  } catch (error) {
    console.error("Upload error:", error);
    return {
      ok: false,
      problem: "CLIENT_ERROR",
      originalError: error,
    };
  }
};

export default {
  addListing,
  getListings,
};
