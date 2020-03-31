import styled from "styled-components";
import {Link} from "react-router-dom";
import addIcon from "../../icons/add.svg";

export const Container = styled.div`
  display: block;
`;

export const ListBooksContent = styled.div`
  flex: 1;
  padding: 0 0 80px;
`;

export const OpenSearch = styled.div`
  bottom: 25px;
  position: fixed;
  right: 25px;
`;

export const OpenSearchLink = styled(Link)`
  border-radius: 50%;
  background: #2e7d32;
  background-image: url(${addIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: block;
  font-size: 0;
  height: 50px;
  outline: 0;
  width: 50px;

  &:hover {
    background-color: rgb(0, 102, 0);
  }
`;
