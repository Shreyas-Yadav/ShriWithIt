import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/Form/AppForm";
import AppFormField from "../components/Form/AppFormField";
import AppFormPicker from "../components/Form/AppFormPicker";
import SubmitButton from "../components/Form/SubmitButton";

import Screen from "../components/Screen";
import CatagoryPickerItem from "../components/CatagoryPickerItem";
import FormImagePicker from "../components/Form/FormImagePicker";
import useLocation from "../hooks/useLocation";
import { useFormikContext } from "formik";
import listingsApi from "../api/listingsApi";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().nullable().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  const handleSubmit = async (listings) => {
    const result = await listingsApi.addListing({ ...listings, location });
    if (!result.ok) {
      console.log("Error details:", {
        problem: result.problem,
        status: result.status,
        data: result.data,
      });
    } else {
      alert("Success");
    }
  };

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          items={categories}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          PickerItemComponent={CatagoryPickerItem}
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
