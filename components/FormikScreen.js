import React from "react";
import { Formik } from "formik";

import { useTheme, useData } from "../hooks";
import { Block, Button, Input, Text } from "../components/";

//This is Formik implementation

const FormikScreen = () => {
  const { assets, colors, gradients, sizes } = useTheme();

  return (
    <Formik initialValues={{ Name: "" }} onSubmit={(text) => console.log(text)}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <Block marginTop={sizes.xxl * 4} marginHorizontal={sizes.m}>
          <Input
            placeholder="Enter data"
            onChangeText={handleChange("Name")}
            onBlur={handleBlur("Name")}
            value={values.Name}
          />
          <Button
            marginTop={sizes.m}
            height={sizes.xxl}
            onPress={handleSubmit}
            primary
          >
            <Text h5 white>
              Submit
            </Text>
          </Button>
        </Block>
      )}
    </Formik>
  );
};

export default FormikScreen;
