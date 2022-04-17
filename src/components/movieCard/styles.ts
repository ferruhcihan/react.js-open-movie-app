import { Box, Typography, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  width: 45%;
  min-width: 450px;
  max-height: 250px;
  display: flex;
  flex-direction: row;
  margin: 1%;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  border-radius: 0.5rem;
  padding: 0.5rem;
  transition: transform 0.2s;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  img {
    width: 30%;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const CardHeader = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const CardTag = styled(Typography)`
  padding: 0 0.7rem;
  border-radius: 0.3rem;
  margin: 0 0.2rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.secondaryBgColor};
`;
