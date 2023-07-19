import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tagServices from "../services/tagServices";
import ComponentCard2 from "./ComponentCard2";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import Swal from "sweetalert2";
import IconButton from "@mui/material/IconButton";
//import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const TagDetailsList = (props) => {
  const [tableData, setTableData] = useState();
  const body = useSelector((state) => state.tagDetails.tagListRequiredDetails);
  const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Months are zero-based
const year = currentDate.getFullYear();

// Format the date as D/M/YYYY
const formattedDate = day + '/' + month + '/' + year;

//console.log(formattedDate);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(body);
    tagServices
      .getTagStatusCompleteDetails(body)
      .then((res) => {
        console.log(res);
        if (res.status === 404) alert(res.message);
        else setTableData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.response.data.message + body.date,
        }).then(() => navigate(-1));
      });
  }, [body]);

  const scanHandler = (data) => {
    console.log(data);
    tagServices
      .scanTag(data)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          icon:
            res.data.message === "Already Scanned Today" ? "info" : "success",
          title: "success",
          text: res.data.message,
        }).then(() => {
          tagServices
            .getTagStatusCompleteDetails(body)
            .then((res) => {
              console.log(res);
              if (res.status === 404) alert(res.message);
              else setTableData(res.data);
            })
            .catch((err) => {
              console.log(err.response.data);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: err.response.data.message,
              }).then(() => navigate(-1));
            });
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ComponentCard2>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Status Report</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {/* Overview of the projects */}
            </CardSubtitle>

            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>House Detail</th>
                  <th>Locality</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Time</th>
                  <th>Scanned By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((tdata, index) => (
                  <tr key={index} className="border-top">
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
                          <span className="text-muted">{tdata.houseNo}</span>
                        </div>
                      </div>
                    </td>
                    <td>{tdata.locality}</td>
                    <td>{tdata.city}</td>
                    <td>
                      {tdata.scanned === false ? (
                        <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                      ) : (
                        <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                      )}
                    </td>
                    <td>{tdata.time}</td>
                    <td>{tdata.userId}</td>
                    <td>
                      {
                        <IconButton
                          //onClick={deleteHandler}
                          aria-label="delete"
                          disabled ={body.date !== formattedDate}
                          // onClick={() => {

                          //   console.log(tdata.tagId);
                          // }}
                          onClick={() => scanHandler(tdata.tagId)}
                        >
                          <DoneAllIcon></DoneAllIcon>
                        </IconButton>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </ComponentCard2>
    </>
  );
};

export default TagDetailsList;
