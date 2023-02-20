import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  margin: 50px 0 50px 0;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
    padding: "0px",
  })}
`;
