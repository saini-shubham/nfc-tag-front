import React, { useEffect, useState } from "react";
import { Row, Col, CardTitle, Button, CardSubtitle } from "reactstrap";
import ComponentCard from "../components/ComponentCard";
import { Grid, TextField } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import tagServices from "../services/tagServices";
import { useDispatch, useSelector } from "react-redux";
import { tagAction } from "../store/tagSlice";
import { useNavigate } from "react-router-dom";

const TagDetails = () => {
  const features = [
    {
      title: "Create React App Based",
      desc: "Create React App is a tool that gives you a massive head start when building React apps.",
      icon: "bi-vinyl",
    },
    {
      title: "React Hooks",
      desc: "Hooks are functions that let you “hook into” React state and lifecycle features from function components.",
      icon: "bi-umbrella",
    },
    {
      title: "CASL",
      desc: "It is isomorphic authorization JavaScript library which restricts what resources a given client is allowed to access.",
      icon: "bi-lock",
    },
    {
      title: "Dark & Light Layouts",
      desc: "This theme comes with built-in light & dark layouts, select as per your preference.",
      icon: "bi-brightness-high",
    },
    {
      title: "Built-in Customizer",
      desc: "Built-in customizer enables users to change their admin panel look & feel based on their preferences.",
      icon: "bi-gear",
    },
    {
      title: "Well Crafted Apps",
      desc: "Creative & smart well crafted apps like email, chat, todo & calender allows you to create your apps faster.",
      icon: "bi-star",
    },
    {
      title: "Clean & Modern Design",
      desc: "Beautifully crafted, clean & modern designed admin theme with 5 different demos & light - dark versions.",
      icon: "bi-brush",
    },
    {
      title: "Easy Navigation",
      desc: "Carefully crafted, clean, smart & easy theme navigation with collapsible option.",
      icon: "bi-segmented-nav",
    },
    {
      title: "No jQuery Dependency",
      desc: "jQuery is great JS library, But Its not a great idea to use jQuery and React in the same UI.",
      icon: "bi-shield-check",
    },
    {
      title: "Colors Options",
      desc: "Unlimited color options allows you to set your application color as per your branding.",
      icon: "bi-droplet-half",
    },
    {
      title: "Code Splitting",
      desc: 'To avoid winding up with a large bundle, it’s good to get ahead of the problem and use "Code Splitting".',
      icon: "bi-file-code",
    },
    {
      title: "Lazy Loading",
      desc: "Its more efficient to split each routes components into a separate chunk, and only load them when the route is visited.",
      icon: "bi-arrow-clockwise",
    },
    {
      title: "Continuous Updates",
      desc: "Regular updates with new demos and features is guaranteed",
      icon: "bi-bag-check",
    },
    {
      title: "Quality Code",
      desc: "We follow the best industry code structure that all developers will be able to pick up easily and fall in love",
      icon: "bi-stars",
    },
    {
      title: "Support",
      desc: "Premium customer support from the actual people who have created.",
      icon: "bi-person-check",
    },
  ];
  const dispatch= useDispatch()
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [city, setCity] = useState();
  const citChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const disableDates = (date) => {
    const nDate = new Date(date);

    // Disable future dates
    const today = new Date();
    if (nDate > today) return true;

    // Disable Sundays
    if (nDate.getDay() === 0) return true;

    // Allow only the past 3 days
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 3);
    if (nDate < pastDate) return true;

    return false;
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const today = dayjs();

 
const tagListHandler=()=>{
  console.log(selectedDate,city)
  const date = new Date(selectedDate).toLocaleDateString();
  const data ={
    city,
    date
  }
  dispatch(tagAction.setTagDetailsRequiredDetails(data))
  navigate('/tags/completeDetail')
  
}

  return (
    <Row>
      <Col sm="6" lg="6">
        <ComponentCard
          title="drop down for date and city name"
          // subtitle={
          //   <p>
          //     5 premium and highly customizable demo variations included in the package, with React
          //     Router 6, Redux Toolkit, Axios nd much more...
          //   </p>
          // }
        >
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <FormControl sx={{ marginBottom: 1, minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  City
                </InputLabel>
                <Select
                required
                  labelId="city"
                  id="city"
                  value={city}
                  onChange={citChangeHandler}
                  autoWidth
                  label="City"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Hisar">Hisar</MenuItem>
                  <MenuItem value="Sirsa">Sirsa</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(props) => <TextField {...props} />}
                disableFuture
                shouldDisableDate={disableDates}
              />
            </LocalizationProvider>
          </Grid>
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  onClick={tagListHandler}
                >
                  Tag List
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
      </Col>
      <Col sm="6" lg="6">
        <ComponentCard
          title="Xtreme React Admin Pro Version"
          // subtitle={
          //   <p>
          //     5 premium and highly customizable demo variations included in the package, with React
          //     Router 6, Redux Toolkit, Axios nd much more...
          //   </p>
          // }
        >
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button
                  color="primary"
                  disabled
                >
                  List of Users
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
};

export default TagDetails;
