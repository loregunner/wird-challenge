/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

interface ICard {
  listcombat?: any;
}

export const WrapperList = styled.div`
  grid-column: 1 / 7;
  .header_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 315px;
    }
  }
  a {
    all: unset;
  }
  .input_group_filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    .search {
      font-size: 12px;
      width: 77%;
      height: 43px;
      border: 1px solid #3762d4;
      border-radius: 8px;
      margin: 0 0px 21px -35px;
      padding: 0 6px 0 35px;
      &:active {
        border: none;
      }
      @media (min-width: 768px) {
        margin: 0 0px 21px -23px;
        width: 80%;
      }
      @media (min-width: 1280px) {
        font-size: 14px;
        width: 86%;
      }
    }
    i {
      border: none;
      width: 3rem;
      margin-top: -20px;
      background-color: transparent;
      z-index: 10;
      img {
        width: 1.3rem;
        height: 1.3rem;
        padding: 0 25px 0 20px;
        @media (min-width: 768px) {
          padding: 0 25px 0 35px;
        }
      }
    }
  }
  @media (min-width: 768px) {
    grid-column: 1 / 6;
  }
  @media (min-width: 1280px) {
    grid-column: 1 / 10;
    .header_list {
      flex-direction: row;
    }
  }
`;

export const WrapperCard = styled.div<ICard>`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: unset;
  grid-gap: 16px;
  padding: 0 16px;
  scrollbar-width: none;
  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
  h2::first-letter {
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    grid-template-columns: ${(props) =>
      props.listcombat ? "1fr" : "repeat(2, 1fr)"};
    grid-gap: 24px;
    padding: 0 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: ${(props) =>
      props.listcombat ? "1fr" : "repeat(4, 1fr)"};
    grid-gap: 32px;
    padding: 0 32px;
  }
  .card_list {
    border: 1px solid #3762d4;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    img {
      width: 150px;
      margin-left: 15%;
    }
    h2 {
      padding: 0 !important;
    }
    .card_container_header {
      display: flex;
      justify-content: space-around;
      img {
        width: 25px !important;
        margin-left: 0;
      }
    }
  }
`;
