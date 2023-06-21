import { Col, Row } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import IconButton from "@mui/material/IconButton";
//import DeleteIcon from '@mui/icons-material/Delete';
import ProjectTables from "./dashboard/ProjectTable";
import { useEffect, useState } from "react";
import userServices from "../services/userServices";
import DeleteIcon from "@mui/icons-material/Delete";
import user1 from "../assets/images/users/user1.jpg";
import user2 from "../assets/images/users/user2.jpg";
import user3 from "../assets/images/users/user3.jpg";
import user4 from "../assets/images/users/user4.jpg";
import user5 from "../assets/images/users/user5.jpg";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const UserListDetails = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();
  useEffect(() => {
    userServices
      .getListOfUsers()
      .then((res) => {
        console.log(res.data);
        //res.data.map((item)=>console.log(item))
        setUserDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (data) => () => {
    console.log("HI");
    //sadmin can't be deleted
    if (data === "sadmin") {
      Swal.fire({
        icon: "warn",
        title: "Sorry",
      });
    } else {
      console.log(data);
      userServices
        .deleteUser(data)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: res.data.message,
            //text:  "SS"
          }).then(() => {
            userServices
              .getListOfUsers()
              .then((res) => {
                console.log(res.data);
                //res.data.map((item)=>console.log(item))
                setUserDetails(res.data);
              })
              .catch((err) => console.log(err));
          });
          console.log(res);
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Registered User Listing</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {/* Overview of the projects */}
              </CardSubtitle>

              <Table
                className="no-wrap mt-3 align-middle"
                responsive
                borderless
              >
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Id</th>
                    <th>Firm</th>
                    <th>Phone No.</th>
                    <th>Adhaar</th>
                    <th>City</th>
                    <th>Password</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {userDetails?.map((tdata, index) => (
                    tdata.userType !== "superAdmin" && <tr key={index} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          {/* <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      /> */}
                          <div className="ms-3">
                            <h6 className="mb-0">{tdata.name}</h6>
                            <span className="text-muted">{tdata.userType}</span>
                          </div>
                        </div>
                      </td>
                      <td>{tdata.userId}</td>
                      <td>{tdata.firmName}</td>
                      <td>{tdata.phoneNumber}</td>
                      <td>{tdata.adhaarNumber}</td>
                      <td>{tdata.city}</td>
                      <td>{tdata.password}</td>
                      <td>
                        {
                          <IconButton
                            onClick={deleteHandler(tdata.userId)}
                            aria-label="delete"
                            // onClick={() => {
                            //   //sadmin can't be delted
                            //   console.log(tdata.userId);
                            // }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        }
                      </td>
                      {/* <td>
                        {tdata.status === "pending" ? (
                          <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                        ) : tdata.status === "holt" ? (
                          <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                        ) : (
                          <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                        )}
                      </td> */}
                      {/* <td>{tdata.weeks}</td>
                      <td>{tdata.budget}</td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UserListDetails;
