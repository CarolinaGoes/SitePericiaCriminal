// StyledButton.tsx
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import type { ReactNode, ReactElement } from "react";

interface StyledButtonProps {
  children: ReactNode;
  href?: string;
  variant: "contained" | "outlined";
  startIcon?: ReactElement;
}

const StyledButtonWrapper = styled(Button)(({ theme, variant }) => ({
  borderRadius: "6px",
  padding: "12px 24px",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  textDecoration: "none",


  ...(variant === 'contained' && {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.contrastText}`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.contrastText,
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  }),

  
  ...(variant === 'outlined' && {
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.primary.contrastText}`,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      border: `2px solid ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    },
  }),
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, href, variant, startIcon }) => {
  return (
    <StyledButtonWrapper variant={variant} startIcon={startIcon} href={href}>
      {children}
    </StyledButtonWrapper>
  );
};

export default StyledButton;