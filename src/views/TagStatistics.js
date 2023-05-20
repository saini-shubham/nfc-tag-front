import { Col, Row } from "reactstrap"
import TopCards from "../components/dashboard/TopCards"


const TagStatistics =()=>{
    return(<>
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Profit"
            subtitle="Yearly Earning"
            earning="$21k"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Refunds"
            subtitle="Refund given"
            earning="$1k"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="New Project"
            subtitle="Yearly Project"
            earning="456"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Sales"
            subtitle="Weekly Sales"
            earning="210"
            icon="bi bi-bag"
          />
        </Col>
      </Row>
    </>)
}

export default TagStatistics