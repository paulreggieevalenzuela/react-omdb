import styled from "styled-components";

const color = {
  error: "#E53700",
  gray: "#9E9EA0",
  primary: "#EDAB00",
  offWhite: "#E6E6E8",
};

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 10px;
`;

export const LeftContent = styled.div`
  margin-right: 30px;

  .genre {
    font-size: 14px;
    margin: 0;
  }

  .description {
    margin: 30px 0;
    line-height: 24px;
  }

  .details {
    font-weight: 600;
    margin: 0 0 10px;

    span {
      font-weight: 400;
    }
  }
`;

export const Details = styled.ul``;
export const DetailItem = styled.li``;

export const RightContent = styled.div``;
