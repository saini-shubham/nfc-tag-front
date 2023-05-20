import { Col, Row } from "reactstrap"
import ProjectTables from "./dashboard/ProjectTable"

const UserListDetails=()=>{
    return(<>
     <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
    </>)
}

export default UserListDetails