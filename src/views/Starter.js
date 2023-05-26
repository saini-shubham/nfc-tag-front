import { Button, Col, Row } from "reactstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextField } from "@mui/material";
//import { DateAdapter } from '@mui/lab/AdapterDateFns';
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";
import TopCards from "../components/dashboard/TopCards";
import Blog from "../components/dashboard/Blog";
import bg1 from "../assets/images/bg/bg1.jpg";
import bg2 from "../assets/images/bg/bg2.jpg";
import bg3 from "../assets/images/bg/bg3.jpg";
import bg4 from "../assets/images/bg/bg4.jpg";
import ComponentCard from "../components/ComponentCard";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { tagAction } from "../store/tagSlice";
import Scan from "../components/Scan";
import { useEffect, useState } from "react";
import { ActionsContext } from "../context";
import { getUserType } from "../services/common";
import tagServices from "../services/tagServices";
import ComponentCard2 from "../components/ComponentCard2";
const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Starter = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [city, setCity] = useState();
  const [date, setDate] = useState(dayjs());
  const userType = getUserType();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [tagScanStatus, setTagScanStatus] = useState(false);
  const tagStatus = useSelector((state) => state.tagDetails.tagScanStatus);

  const [actions, setActions] = useState(null);
  const { scan, write } = actions || {};
  const actionsValue = { actions, setActions };
  const onHandleAction = (actions) => {
    setActions({ ...actions });
  };
  const tagCount = useState({
    total: "",
    scanned: "",
    left: "",
  });

  useEffect(() => {
    console.log(tagStatus);
    setTagScanStatus(tagStatus);
  }, [tagStatus]);

  //post request for visitor tag count
  useEffect(() => {
    const date = new Date(selectedDate).toLocaleDateString();
    const body = {
      date,
      cityName: city,
    };
    console.log(body);
    tagServices
      .getTagStatusForVisitor(body)
      .then((res) => {
        console.log(res.data);
        setTagScanStatus((prevState)=>{
          return{...prevState,total:res.data.totalTags,scanned:res.data.scannedTags,left:res.data.notScanned}
        })
      })
      .catch((err) => console.log(err));
  }, [selectedDate, city]);

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

  //  const CustomDatePicker = () => {

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      {/***Top Cards***/}

      <Row>
        <Col sm="6" lg="6">
          {(userType === "scanner" ||
            userType === "admin" ||
            userType === "superAdmin") && (
            <ComponentCard title="Scan Tag">
              <Row>
                <Col lg="8">
                  <div className="mt-3">
                    <Button
                      color="primary"
                      disabled={userType === "scanner" ? false : true}
                      onClick={() =>
                        onHandleAction({ scan: "scanning", write: null })
                      }
                    >
                      Scan
                    </Button>
                  </div>
                </Col>
              </Row>
            </ComponentCard>
          )}
        </Col>
        <Col sm="6" lg="6">
          {(userType === "tagger" ||
            userType === "admin" ||
            userType === "superAdmin") && (
            <ComponentCard
              title="Register New Tag"
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
                      // href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
                      //target="_blank"

                      //onClick={()=>navigate('/tags/register')}
                      onClick={() =>
                        onHandleAction({ scan: "scanning", write: null })
                      }
                    >
                      Register
                    </Button>
                  </div>
                </Col>
              </Row>
            </ComponentCard>
          )}
        </Col>
      </Row>
      {(userType === "visitor" ||
        userType === "admin" ||
        userType === "superAdmin") && (
        <Row>
          <Col sm="6" lg="3">
            {/* <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="City Name"
            earning="Delhi"
            icon="bi bi-wallet"
            > */}
            <ComponentCard2>
              <FormControl sx={{ marginBottom: 1, minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  City
                </InputLabel>
                <Select
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(props) => <TextField {...props} />}
                  disableFuture
                  shouldDisableDate={disableDates}
                />
              </LocalizationProvider>
            </ComponentCard2>
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-info text-into"
              title="Sales"
              subtitle="Total"
              earning={tagScanStatus.total}
              icon="bi bi-bag"
            />
          </Col>

          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-warning text-warning"
              title="New Project"
              subtitle="Scanned"
              earning={tagScanStatus.scanned}
              icon="bi bi-basket3"
            />
          </Col>
          <Col sm="6" lg="3">
            <TopCards
              bg="bg-light-danger text-danger"
              title="Refunds"
              subtitle="Left"
              earning={tagScanStatus.left}
              icon="bi bi-wrong"
            />
          </Col>
        </Row>
      )}

      {/***Table ***/}
      {/* <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row> */}
      {/***Blog Cards***/}
      {/* <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={blg.image}
              title={blg.title}
              subtitle={blg.subtitle}
              text={blg.description}
              color={blg.btnbg}
            />
          </Col>
        ))}
      </Row> */}
      <ActionsContext.Provider value={actionsValue}>
        {scan && <Scan />}
      </ActionsContext.Provider>
    </div>
  );
};

export default Starter;
