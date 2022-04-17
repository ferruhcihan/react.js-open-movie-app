import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  margin-left: auto;
`;

export const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  border-radius: 0.5rem;
  padding: 0 1rem;

  .searchIcon {
    margin-bottom: 1rem;
    cursor: pointer;
  }
`;
