// import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

// const TagRegister = () => {
//   return (
//     <>
//       <Card>
//         <CardBody>
//           <CardTitle tag="h5">Register Tag</CardTitle>
//           <CardSubtitle className="mb-2 text-muted" tag="h6">
//             Register Tag
//           </CardSubtitle>

//         </CardBody>
//       </Card>
//     </>
//   );
// };

// export default TagRegister;

import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@material-ui/core';
import ComponentCard from "./ComponentCard";
import { useSelector, useDispatch } from "react-redux";
const TagRegister = () => {
  const dispatch = useDispatch();

  const[tagID,setTagId]=useState();
  const [formData, setFormData] = useState({
    tagId: "",
    userId: "",
    name: "",
    houseNo: "",
    phoneNo: "",
    locality: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Perform form submission or further processing here
    console.log(formData);
  };
  
  return (
    <>
    <ComponentCard title="Form Details">
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        
        {/* <Grid item xs={6}>
          <TextField
            name="tagId"
            label="Tag ID"
            variant="outlined"
            fullWidth
            value={formData.tagId}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="userId"
            label="User ID"
            variant="outlined"
            fullWidth
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="houseNo"
            label="House No"
            variant="outlined"
            fullWidth
            value={formData.houseNo}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="phoneNo"
            label="Phone No"
            variant="outlined"
            fullWidth
            value={formData.phoneNo}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="locality"
            label="Locality"
            variant="outlined"
            fullWidth
            value={formData.locality}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={6}>
          {/* <TextField
            name="city"
            label="City"
            variant="outlined"
            fullWidth
            value={formData.city}
            onChange={handleChange}
            required
          /> */}
          <FormControl fullWidth required>
            <InputLabel fullWidth>City</InputLabel>
            {/* <Select value={city} onChange={(e) => setCity(e.target.value)}> */}
            <Select name = "city" fullWidth value={formData.city} onChange={handleChange}>
              <MenuItem  value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
              <MenuItem value="city3">City 3</MenuItem>
            </Select>
            <FormHelperText>Select your city</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="state"
            label="State"
            variant="outlined"
            fullWidth
            value={formData.state}
            onChange={handleChange}
          />
        </Grid>
        {/* <Grid item xs={6}>
          <TextField
            name="pincode"
            label="Pincode"
            variant="outlined"
            fullWidth
            value={formData.pincode}
            onChange={handleChange}
          />
        </Grid> */}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
                       Submit
          </Button>
        </Grid>
      </Grid>
    </form>
    </ComponentCard>
    </>
  );
};

export default TagRegister;
