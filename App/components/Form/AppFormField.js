import { StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppInputText from "../AppInputText";
import ErrorMessage from "./ErrorMessage";
const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, setFieldValue, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <AppInputText
        {...otherProps}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage visible={touched[name]} message={errors[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
