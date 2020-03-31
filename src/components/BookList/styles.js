import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const BooksGrid = styled.ol`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const BooksGridItem = styled.li`
  padding: 10px 15px;
  text-align: left;
`;
