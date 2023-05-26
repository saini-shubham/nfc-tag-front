import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tagServices from "../services/tagServices";
import ComponentCard2 from "./ComponentCard2";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const TagDetailsList = () => {
  const [tableData, setTableData] = useState();
  const body = useSelector((state) => state.tagDetails.tagListRequiredDetails);
  const columns = [
    //  { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 110,
      editable: true,
    },
    {
      field: "houseNo",
      headerName: "House No",
      width: 110,
      editable: true,
    },
    {
      field: "locality",
      headerName: "Locality",
      width: 110,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      width: 110,
      editable: true,
    },
    {
      field: "scanned",
      headerName: "Status",
      width: 110,
      editable: true,
    },
    {
      field: "time",
      headerName: "Time",
      width: 110,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 110,
      editable: true,
    },

    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  useEffect(() => {
    console.log(body);
    tagServices
      .getTagStatusCompleteDetails(body)
      .then((res) => {
        console.log(res);
        setTableData(res.data);
      })
      .catch((err) => console.log(err));
  }, [body]);

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
                  <th>Name</th>

                  <th>Locality</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Time</th>
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
                      ): (
                        <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                      )}
                    </td>
                    <td>{tdata.time}</td>
                    <td>Scan</td>
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
