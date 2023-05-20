import { Button, Col, Row } from "reactstrap";
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
import { ActionsContext } from '../context';
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
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const[tagScanStatus,setTagScanStatus]=useState(false)
  const tagStatus = useSelector((state)=>state.tagDetails.tagScanStatus);
  
  
  const [actions, setActions] = useState(null);
  const {scan, write} = actions || {};
  const actionsValue = {actions,setActions};
  const onHandleAction = (actions) =>{
    setActions({...actions});
  }

  useEffect(()=>{
    console.log(tagStatus)
    setTagScanStatus(tagStatus)
  },[tagStatus])

  return (
    <div>
      {/***Top Cards***/}
      
      <Row>
      <Col sm="6" lg="6">
      <ComponentCard
          title="Scan Tag"
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
                {/* <Button
                  color="primary"
                  //href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
                  //target="_blank"
                  onClick={()=> dispatch(tagAction.setTagScanStatus(true))}
                >
                  Scan
                </Button> */}
                 <Button
                  color="primary"
                  //href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
                  //target="_blank"
                  onClick={()=>onHandleAction({scan: 'scanning', write: null})}
                >
                  Scan
                </Button>
                 {/* <button onClick={()=>onHandleAction({scan: 'scanning', write: null})} className="btn">Scan</button> */}
              </div>
            </Col>
            
          </Row>
        </ComponentCard>
      </Col>
      <Col sm="6" lg="6">
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
                  onClick={()=>onHandleAction({scan: 'scanning', write: null})}
                >
                 Register
                </Button>
              </div>
            </Col>
            
          </Row>
        </ComponentCard>
      </Col>
     
      </Row>


      
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
      {/***Sales & Feed***/}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>
      {/***Table ***/}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>
      {/***Blog Cards***/}
      <Row>
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
      </Row>
      <ActionsContext.Provider value={actionsValue}>
          {scan && <Scan/>}
        </ActionsContext.Provider>
    </div>
  );
};

export default Starter;
