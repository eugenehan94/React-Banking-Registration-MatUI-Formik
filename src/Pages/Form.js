import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
const useStyles = makeStyles((theme) => ({
  actionMargin: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastName: yup
    .string("Enter your last name")
    .required("Last name is required"),
  birthMonth: yup
    .number()
    .typeError("Must be a number")
    .min(1, "Enter an appropriate month")
    .max(12, "Enter an appropriate month")
    .required("Birth month required"),
  birthDay: yup
    .number()
    .typeError("Must be a number")
    .min(0, "Min value 0")
    .max(31, "Max is 31")
    .required("Day of birth required"),
  birthYear: yup
    .number()
    .typeError("Must be a number")
    .min(0, "Enter an appropriate year")
    .required("Birth year required"),
});

const Form = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Navbar />
      <Box className={classes.actionMargin}>
        <form onSubmit={formik.handleSubmit}>
          <Card variant="outlined">
            <CardContent>
              <Grid container>
                <Grid item xs={5}>
                  <Typography>Hi there!</Typography>
                  <Typography>Let's start with the basics</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>What's your name?</Typography>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.firstName &&
                      Boolean(formik.errors.firstName)
                    }
                    helperText={
                      formik.touched.firstName && formik.errors.firstName
                    }
                  />
                  <br />
                  <TextField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.lastName && Boolean(formik.errors.lastName)
                    }
                    helperText={
                      formik.touched.lastName && formik.errors.lastName
                    }
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Grid container>
                <Grid item xs={5}>
                  <Typography>Tell us a bit about yourself</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>What's your birth date?</Typography>
                  <TextField
                    id="birthMonth"
                    name="birthMonth"
                    label="Month(MM)"
                    value={formik.values.birthMonth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.touched.birthMonth && formik.errors.birthMonth
                    }
                    error={
                      formik.touched.birthMonth &&
                      Boolean(formik.errors.birthMonth)
                    }
                  />
                  <TextField
                    id="birthDay"
                    name="birthDay"
                    label="Day(DD)"
                    value={formik.values.birthDay}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.touched.birthDay && formik.errors.birthDay
                    }
                    error={
                      formik.touched.birthDay && Boolean(formik.errors.birthDay)
                    }
                  />
                  <TextField
                    id="birthYear"
                    name="birthYear"
                    label="Year(YYYY)"
                    value={formik.values.birthYear}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={
                      formik.touched.birthYear && formik.errors.birthYear
                    }
                    error={
                      formik.touched.birthYear &&
                      Boolean(formik.errors.birthYear)
                    }
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Button type="submit" color="primary" variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Form;
