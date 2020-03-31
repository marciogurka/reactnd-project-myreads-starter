import styled from "styled-components";
import arrowDropDownIcon from "../../icons/arrow-drop-down.svg";

export const Container = styled.div`
  background: #60ac5d;
  background-image: url(${arrowDropDownIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px;
  border-radius: 50%;
  bottom: -10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 40px;
  position: absolute;
  right: 0;
  width: 40px;
`;

export const BookSelectInput = styled.select`
  cursor: pointer;
  height: 100%;
  opacity: 0;
  width: 100%;
`;
