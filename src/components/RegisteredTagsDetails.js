import { useEffect, useState } from "react";
import tagServices from "../services/tagServices";
import { useParams } from "react-router-dom";
import ComponentCard from "./ComponentCard";
import ComponentCard2 from "./ComponentCard2";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from "@mui/material/IconButton";
//import DeleteIcon from "@mui/icons-material/Delete";
import { Navigate, useNavigate } from "react-router-dom";
import DoneAllIcon from "@mui/icons-material/DoneAll";

import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import Swal from "sweetalert2";

const RegisteredTagsDetails = () => {
  const params = useParams();
  const [tableData, setTableData] = useState();
  useEffect(() => {
    const city = params.city;
    tagServices
      .getAllRegiteredTagsInACity(city)
      .then((res) => {
        console.log(res.data);
        setTableData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //   const columns=[
  //     {
  //         field: 'House Details',
  //         headerName: 'Last name',
  //         width: 150,
  //         editable: true,
  //       },
  //     //   {
  //     //     field: 'Locality',
  //     //     headerName: 'Last name',
  //     //     width: 150,
  //     //     editable: true,
  //     //   },
  //     //   {
  //     //     field: 'City',
  //     //     headerName: 'Last name',
  //     //     width: 150,
  //     //     editable: true,
  //     //   },
  //       {
  //         field: 'Phone No.',
  //         headerName: 'Last name',
  //         width: 150,
  //         editable: true,
  //       },
  //       {
  //         field: 'Registerd By',
  //         headerName: 'Last name',
  //         width: 150,
  //         editable: true,
  //       },
  //       {
  //         field: 'Date & Time',
  //         headerName: 'Last name',
  //         width: 150,
  //         editable: true,
  //       },
  //   ]

  const deleteHandler = (id) => {
    console.log(id)
    tagServices.deleteTagById(id).then((res) => {
      console.log(res.data)
      Swal.fire({
        icon: "success",
        title: res.data.message,
        //text:  "SS"
      }).then(() => {
        tagServices
        .getAllRegiteredTagsInACity(params.city)
        .then((res) => {
          console.log(res.data);
          setTableData(res.data);
        })
        .catch((err) => console.log(err));
      });
    }).catch((err) => { console.log(err) })
  }
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Registered Tags in {params.city}</CardTitle>
          {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle> */}

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>House Details</th>
                <th>Phone No.</th>
                <th>Registered By</th>
                <th>Date & Time</th>
                <th>Action</th>
                {/* <th>Weeks</th>
                <th>Weeks</th>
                <th>Budget</th> */}
              </tr>
            </thead>
            <tbody>
              {tableData?.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.houseNo}</h6>
                        <span className="text-muted">{tdata.name + ", "}</span>
                        <span className="text-muted">{tdata.locality}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.phoneNo}</td>
                  <td>{tdata.userId}</td>

                  {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.registryDateTime.split("T")[0]}</h6>
                        <span className="text-muted">{tdata.registryDateTime.split("T")[1]}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    {
                      <IconButton
                        //onClick={deleteHandler}
                        aria-label="delete"
                        //disabled ={body.date !== formattedDate}
                        // onClick={() => {

                        //   console.log(tdata.tagId);
                        // }}
                        onClick={() => deleteHandler(tdata._id)}
                      >
                        <DeleteForeverIcon></DeleteForeverIcon>

                      </IconButton>
                    }
                  </td>
                  {/* <td>{tdata.registryDateTime.split("T")[0]}</td> */}
                  {/* <td>{tdata.budget}</td> */}
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default RegisteredTagsDetails;

// "_id": "646f2af2978434d1384260be",
//         "name": "dsfs",
//         "houseNo": "asda",
//         "locality": "ds",
//         "city": "Hisar",
//         "state": "dasdf",
//         "pincode": 0,
//         "phoneNo": 23424,
//         "tagId": "102",
//         "userId": "default",
//         "registryDateTime": "2023-06-01T09:08:51.077Z",
//         "__v": 0
