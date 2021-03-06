import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)`
  position: absolute;
  top: 0;
  background: #000;
  min-height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  .icon {
    margin: 1rem;
  }
`;

export const LogoWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
