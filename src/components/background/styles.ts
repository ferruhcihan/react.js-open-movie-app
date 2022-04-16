import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  background-color: ${({ theme }) => (theme.primaryBgColor)};
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7) 0 100%),
    url("https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  overflow: hidden;
`;