import styled, { css } from "styled-components";

const color = {
  error: "#E53700",
  gray: "#9E9EA0",
  primary: "#EDAB00",
  offWhite: "#E6E6E8",
};

// Can be implement in the core components to be re-used
export const SearchField = styled.input`
  border: 1px solid ${color.gray};
  border-radius: 3px;
  padding: 10px;
  width: 100%;
`;

export const List = styled.ul`
  margin-top: 20px;

  p {
    margin: 0;
  }
`;

export const ListItem = styled.li`
  border: 1px solid ${color.gray};
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  max-width: 400px;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isActive &&
    css`
      border: 1px solid ${color.primary};

      svg {
          color: ${color.primary};
      }
    `}

  &:hover {
    box-shadow: 0 3px 10px 0 rgba(212, 222, 232, 1);
  }

  .title {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .type {
    font-size: 14px;
  }

  .title,
  .type {
    span {
      font-weight: bold;
    }
  }
`;

export const LeftContent = styled.div`
  margin-right: 30px;

  /* img {
        width: 100px;
        margin-bottom: 20px;
    } */
`;

export const RightContent = styled.div`
  text-align: right;

  svg {
    margin-bottom: 5px;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  svg {
    cursor: pointer;
  }
`;

export const PaginationInfo = styled.div`
  text-align: center;

  p {
    margin: 0;

    &::first-child {
      margin-bottom: 5px;
    }
  }
`;
