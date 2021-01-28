import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background-color: rgba(6, 5, 56, 0.4);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open, handlePageChange, currentPage }) => {
//   console.log("RightNav props", props);
  const tabs = ["About", "Portfolio", "Skills", "Contact"];
  return (
    <Ul open={open} className="nav">
      {tabs.map((tab) => (
        <li className="" key={tab}>
          <a
            href={"#" + tab.toLowerCase()}
            onClick={() => handlePageChange(tab)}
            className={
              currentPage === tab ? "nav-link active" : "nav-link"
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </Ul>
  );
};

export default RightNav;
