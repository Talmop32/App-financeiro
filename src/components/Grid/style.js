import styled from "styled-components";

export const Tabel = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-around;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
border-bottom: inset;
padding-bottom: 5px
text-align: ${(props) => (props.alignCenter ? "center" : "start")};
width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
