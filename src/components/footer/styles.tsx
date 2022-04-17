import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  position: absolute;
  bottom: 0;
  background: #000;
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .icon {
    cursor: pointer;
    margin: 1rem;
  }
`;

export const PageNumberBox = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20px;
  font-size: 2rem;
  color: ${({ theme }) => theme.secondaryBgColor};
`;
