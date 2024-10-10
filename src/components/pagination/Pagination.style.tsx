import styled from "styled-components";

interface IPagination {
  active: string;
  more: string;
}

export const WrapperPagination = styled.section`
  margin-top: 2rem;
  @media (min-width: 768px) {
    margin-top: 4rem;
  }
  .pagination_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    img {
      width: 15px;
      height: 15px;
      margin: 0 3px 0 3px;
      cursor: pointer;
      @media (min-width: 768px) {
        width: 20px;
        height: 20px;
      }
    }
    .page_container_number {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const ButtonPaginate = styled.button<IPagination>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px 0 5px;
  cursor: ${(props) => (props.more ? "default" : "pointer")};
  font-size: 9px;
  width: fit-content;
  height: 20px;
  -moz-border-radius: 20%;
  -webkit-border-radius: 20%;
  border-radius: 20%;
  background: ${(props) =>
    props.active ? "#3762d4" : props.more ? "transparent" : "white"};
  border: none;
  color: ${(props) => (props.active ? "white" : "black")};
  @media (min-width: 768px) {
    font-size: 12px;
    height: 20px;
  }
`;
