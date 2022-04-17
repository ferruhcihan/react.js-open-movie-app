import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.secondaryBgColor};
`;
