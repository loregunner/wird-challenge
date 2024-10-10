import styled from "styled-components";

export const WrapperPrepare = styled.div`
  grid-column: 1 / 7;
  border: 1px solid #3762d4;
  margin: 3rem 0;
  border-radius: 5px;
  overflow: auto;
  a {
    all: unset;
    h2 {
      color: black;
    }
  }
  @media (min-width: 768px) {
    grid-column: 6 / 9;
  }
  @media (min-width: 1280px) {
    grid-column: 10 / 13;
  }
  h2 {
    padding: 2rem;
    color: #3762d4;
    text-align: center;
  }
`;
