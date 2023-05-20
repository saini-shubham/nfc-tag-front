// import React, { useState } from "react";
// import {
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Button,
//   makeStyles,
// } from "@material-ui/core";
// import ComponentCard from "./ComponentCard";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     marginBottom: theme.spacing(2),
//     minWidth: 200,
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const cities = ["City 1", "City 2", "City 3", "City 4", "City 5"];

// const CreateUser = () => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState({
//     name: "",
//     aadhaarNumber: "",
//     firmName: "",
//     city: [],
//     phoneNumber: "",
//     userType: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleCityChange = (event) => {
//     const { value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       city: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Perform form submission or validation here
//     console.log(formData);
//   };

//   return (
//     <ComponentCard>
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Name"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />

//       <TextField
//         label="Aadhaar Number"
//         name="aadhaarNumber"
//         value={formData.aadhaarNumber}
//         onChange={handleChange}
//         required
//       />

//       <TextField
//         label="Firm Name"
//         name="firmName"
//         value={formData.firmName}
//         onChange={handleChange}
//         required
//       />

//       <FormControl className={classes.formControl}>
//         <InputLabel>City</InputLabel>
//         <Select
//           name="city"
//           value={formData.city}
//           onChange={handleCityChange}
//           multiple
//           required
//         >
//
//           {cities.map((city) => (
//             <MenuItem key={city} value={city}>
//                            {city}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>

//       <TextField
//         label="Phone Number"
//         name="phoneNumber"
//         value={formData.phoneNumber}
//         onChange={handleChange}
//         required
//       />

//       <FormControl className={classes.formControl}>
//         <InputLabel>User Type</InputLabel>
//         <Select
//           name="userType"
//           value={formData.userType}
//           onChange={handleChange}
//           required
//         >
//           <MenuItem value="Type 1">Type 1</MenuItem>
//           <MenuItem value="Type 2">Type 2</MenuItem>
//           <MenuItem value="Type 3">Type 3</MenuItem>
//         </Select>
//       </FormControl>

//       <Button
//         variant="contained"
//         color="primary"
//         type="submit"
//         className={classes.button}
//       >
//                Submit
//       </Button>
//     </form>
//     </ComponentCard>
//   );
// };

// export default CreateUser;

import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
} from "@material-ui/core";
import ComponentCard from "./ComponentCard";

const cities = ["City A", "City B", "City C", "City D"]; // Replace with your city options

const CreateUser = () => {
  const [name, setName] = useState("");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [firmName, setFirmName] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAadhaarNumberChange = (e) => {
    setAadhaarNumber(e.target.value);
  };

  const handleFirmNameChange = (e) => {
    setFirmName(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCities(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Perform form submission or validation logic here // You can access the form values using the state variables (name, aadhaarNumber, firmName, selectedCities, phoneNumber, userType)
    console.log("Form submitted:", {
      name,
      aadhaarNumber,
      firmName,
      selectedCities,
      phoneNumber,
      userType,
    });
  };

  return (
    <ComponentCard title="User Details">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              value={name}
              onChange={handleNameChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Aadhaar Number"
              value={aadhaarNumber}
              onChange={handleAadhaarNumberChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Firm Name"
              value={firmName}
              onChange={handleFirmNameChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required>
              <InputLabel>City</InputLabel>
              <Select
                multiple
                value={selectedCities}
                onChange={handleCityChange}
                renderValue={(selected) => selected.join(", ")}
              >
                           
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                                   {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth required>
              <InputLabel fullWidth>User Type</InputLabel>
              <Select value={userType} onChange={handleUserTypeChange}>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="User">User</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
                       Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </ComponentCard>
  );
};

export default CreateUser;
