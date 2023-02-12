import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  margin-top: 60px;
`;
export const Title = styled.h1`
  margin: 20px;
`;
export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    alignItems: "start",
  })}
`;
export const Filter = styled.div`
  margin: 20px;
  ${mobile({
    margin: "0 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;

export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    fontSize: "18px",
    marginRight: "0",
  })}
`;

export const Select = styled.select`
  padding: 10px;
  margin: 20px;
  ${mobile({
    margin: "10px 0",
  })}
`;

export const Option = styled.option``;
