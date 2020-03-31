import styled from "styled-components";
import {Link} from "react-router-dom";
import arrowBackIcon from "../../icons/arrow-back.svg";

export const Container = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 0 6px rgba(0, 0, 0, 0.23);
  display: flex;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

export const BackHomeLink = styled(Link)`
  background-image: url(${arrowBackIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 28px;
  border: none;
  display: block;
  font-size: 0;
  height: 53px;
  left: 15px;
  outline: none;
  top: 20px;
  width: 50px;

  &:active {
    border: red;
    outline: none;
  }
`;

export const SearchInputContainer = styled.div`
  background: #e9e;
  flex: 1;
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 1.25em;
  outline: none;
  padding: 15px 10px;
  width: 100%;
`;
