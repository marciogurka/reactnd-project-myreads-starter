import styled from "styled-components";

export const Container = styled.div`
  width: 140px;
`;

export const BookTitle = styled.div`
  font-size: 0.8em;
  margin-top: 10px;
`;

export const BookAuthors = styled.div`
  color: #999;
  font-size: 0.8em;
`;

export const BookTop = styled.div`
  align-items: flex-end;
  display: flex;
  height: 200px;
  position: relative;
`;

export const BookCover = styled.div(props => ({
  background: "#eee",
  "background-image": `url("${props.url}")`,
  "box-shadow": "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  height: "188px",
  width: "128px"
}));
