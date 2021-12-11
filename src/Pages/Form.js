import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import Footer from "../Components/Footer/Footer";
const useStyles = makeStyles((theme) => ({
  actionMargin: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(10),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(0),
    },
  },
  inputMargin: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),

    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(0),
    },
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(3),
  },
}));
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
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
    .min(1000, "Enter an appropriate year")
    .required("Birth year required"),
  email: yup.string().email("Invalid email").required("Email is srequired"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "Phone number is not valid")
    .max(10, "Phone number is not valid")
    .required("Phone number is required"),
});

const Form = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
      email: "",
      phone: "",
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
                <Grid item md={5} xs={12}>
                  <Typography>Hi there!</Typography>
                  <Typography>Let's start with the basics</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <Typography variant="h3" gutterBottom>
                    What's your name?
                  </Typography>
                  <Box>
                    <TextField
                      className={classes.inputMargin}
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
                  </Box>
                  <Box>
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.lastName &&
                        Boolean(formik.errors.lastName)
                      }
                      helperText={
                        formik.touched.lastName && formik.errors.lastName
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardContent>
              <Grid container>
                <Grid item md={5} xs={12}>
                  <Typography>Tell us a bit about yourself</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <Typography gutterBottom variant="h3">
                    What's your birth date?
                  </Typography>
                  <TextField
                    className={classes.inputMargin}
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
                    className={classes.inputMargin}
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
                    className={classes.inputMargin}
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
          <Card>
            <CardContent>
              <Grid container>
                <Grid item md={5} xs={12}>
                  <Typography>How can we contact you?</Typography>
                </Grid>
                <Grid item md={7} xs={12}>
                  <Typography variant="h3" gutterBottom>
                    What's your contact info?
                  </Typography>
                  <TextField
                    className={classes.inputMargin}
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.email && formik.errors.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                  />
                  <Box>
                    <FormControl
                      className={`${classes.formControl} ${classes.inputMargin}`}
                    >
                      <InputLabel
                        shrink
                        id="demo-simple-select-placeholder-label-label"
                      >
                        Phone type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>Mobile phone</em>
                        </MenuItem>
                        <MenuItem value={1}>Home phone</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      className={classes.inputMargin}
                      id="phone"
                      name="phone"
                      label="Phone Number (10 digits)"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      helperText={formik.touched.phone && formik.errors.phone}
                      error={
                        formik.touched.phone && Boolean(formik.errors.phone)
                      }
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box className={classes.buttonWrapper}>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              size="large"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      <Footer />
    </div>
  );
};

export default Form;
