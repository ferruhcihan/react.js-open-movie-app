import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.secondaryBgColor};
  border-radius: 1rem;
  width: 90vw;
  height: 100%;
  margin: auto;
  margin-top: 8rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem;

  img {
    border-radius: 1rem;
    margin-right: 1rem;
    height: 100%;
  }
`;

export const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const ContentItem = styled(Box)`
  display: flex;
  flex-direction: column;
`;
