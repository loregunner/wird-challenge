import styled from "styled-components";

export const WrapperDetail = styled.div`
  grid-column: 1 / 7;
  .header_list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    img {
      width: 315px;
    }
  }
  a {
    all: unset;
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
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3762d4;
    background-color: transparent;
    padding: 0.5rem;
    border-radius: 5px;
    color: #3762d4;
    cursor: pointer;
    img {
      width: 20px !important;
      margin-right: 7px;
    }
  }
  .container_back {
    cursor: pointer;
    color: #3762d4;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    span {
      font-size: 18px;
      margin-left: 0.7rem;
    }
    img {
      width: 30px;
    }
  }
  .container_detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    img {
      width: 200px;
      margin-bottom: -1rem;
    }
    h2::first-letter {
      text-transform: uppercase;
    }
    .detail_container {
      width: 60%;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 1rem;
      border-radius: 5px;
      border: 1px solid #3762d4;
      @media (min-width: 1280px) {
        flex-direction: row;
      }
    }
    b {
        color: #3762d4;
        font-weight: normal;
    }
    .detail_statics {
      padding: 1rem;
      .detail_stats {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        p {
            margin-right: 10px;
            color: #3762d4;
        }
        span {
            font-weight: bold;
        }
      }
    }
  }
  .types_container {
    border-radius: 10px;
    padding: 4px 15px;
    margin: 0 8px;
    color: white;
  }
`;
