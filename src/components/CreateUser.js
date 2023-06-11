import React, { useState } from "react";
import userServices from "../services/userServices";
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
import {} from '../services/common'
import Swal from "sweetalert2";
const cities = ['Hisar','Sirsa','Pune','Delhi']; // Replace with your city options

const CreateUser = () => {
  const [name, setName] = useState("");
  const [adhaarNumber, setAadhaarNumber] = useState("");
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
    
   e.preventDefault(); // Perform form submission or validation logic here // You can access the form values using the state variables (name, adhaarNumber, firmName, selectedCities, phoneNumber, userType)
    // console.log("Form submitted:", {
    //   name,
    //   adhaarNumber,
    //   firmName,
    //   selectedCities,
    //   phoneNumber,
    //   userType,
    // });
    const formBody={
      name,
      adhaarNumber,
      firmName,
      selectedCities,
      phoneNumber,
      userType,
    }
   
      userServices.createUser(formBody).then((res)=>{
        console.log(res)
        Swal.fire({
          icon: "success",
          title: res.data.message,
          text:  "user Id: "+res.data.userId+"-----"+"Password: "+res.data.password
        });
      }).catch((err)=>
      //console.log(err.response.data)
      Swal.fire("Adhar/Phone not valid")
      )
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
              value={adhaarNumber}
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
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="tagger">Tagger</MenuItem>
                <MenuItem value="scanner">Scanner</MenuItem>
                <MenuItem value="visitor">Visitor</MenuItem>
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
