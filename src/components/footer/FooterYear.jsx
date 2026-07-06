import React from "react";
import styled from "styled-components";

export const FooterYear = () => {
  return <FooterYearSpan>{new Date().getFullYear()}</FooterYearSpan>;
};

const FooterYearSpan = styled.span`
  color: #c6ff3d;
  font-weight: 600;
`;
