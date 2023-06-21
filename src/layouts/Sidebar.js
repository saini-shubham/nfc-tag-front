import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
//import { logout } from "../services/common";
import { getUserType } from "../services/common";
import { useEffect,useState } from "react";


const navigationAdmin = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  // {
  //   title: "Alert",
  //   href: "/alerts",
  //   icon: "bi bi-bell",
  // },
  // {
  //   title: "Badges",
  //   href: "/badges",
  //   icon: "bi bi-patch-check",
  // },
  // {
  //   title: "Buttons",
  //   href: "/buttons",
  //   icon: "bi bi-hdd-stack",
  // },
  {
    title: "User",
    href: "/users",
    icon: "bi bi-card-text",
  },
  {
    title: "Tag",
    href: "/tags",
    icon: "bi bi-columns",
  },
  // {
  //   title: "Table",
  //   href: "/table",
  //   icon: "bi bi-layout-split",
  // },
  //  {
  //   title: "Forms",
  //   href: "/forms",
  //   icon: "bi bi-textarea-resize",
  // },
  // {
  //   title: "Breadcrumbs",
  //   href: "/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
];

// const userType = getUserType();

const Sidebar = () => {
  const[userType,setUserType] = useState()
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  useEffect(()=>{
    setUserType(getUserType())
    },[])
  const navigate = useNavigate();
  let location = useLocation();
  const logoutHandler = () => {
    sessionStorage.clear();
    navigate("/");
  };


  useEffect(()=>{

  },[])
  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {userType === "admin" || userType === "superAdmin"
            ? navigationAdmin.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={navi.href}
                    className={
                      location.pathname === navi.href
                        ? "text-primary nav-link py-3"
                        : "nav-link text-secondary py-3"
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              ))
            : navigation.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={navi.href}
                    className={
                      location.pathname === navi.href
                        ? "text-primary nav-link py-3"
                        : "nav-link text-secondary py-3"
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              ))}
          <Button color="primary" tag="a" onClick={logoutHandler}>
            Logout
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
