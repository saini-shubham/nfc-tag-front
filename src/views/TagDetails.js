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
import moment from "moment";
const TagDetails = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    pastDate.setDate(pastDate.getDate() - 60);
    if (nDate < pastDate) return true;

    return false;
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const today = dayjs();

  const tagListHandler = () => {
    //console.log("!!",selectedDate,city)
    const date = new Date(selectedDate).toLocaleDateString();
    const formattedDate =dayjs(selectedDate).format('D/M/YYYY')

    const data = {
      city,
      date: formattedDate,
    };
    //console.log("!!",data)
    dispatch(tagAction.setTagDetailsRequiredDetails(data));
    navigate("/tags/completeDetail");
  };

  const registeredTagHandler = () => {
    navigate("/tags/registeredInCity/" + city);
  };

  return (
    <Row>
      <Col sm="6" lg="6">
        <ComponentCard
          title="Live Status"
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
                //inputFormat="D/M/YYYY"
              />
            </LocalizationProvider>
          </Grid>
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button color="primary" onClick={tagListHandler}>
                  Tag List
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
      </Col>
      <Col sm="6" lg="6">
        <ComponentCard title="All Registered Tags">
          <Row>
            <Row>
              <Col>
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
                </Grid>
              </Col>
            </Row>
            <Row>
              <Col lg="8">
                <div className="mt-3">
                  <Button color="primary" onClick={registeredTagHandler}>
                    List of Registered Tags
                  </Button>
                </div>
              </Col>
            </Row>
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
};

export default TagDetails;
