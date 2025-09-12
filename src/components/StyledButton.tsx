// StyledButton.tsx
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import type { ButtonProps } from "@mui/material/Button";
import type { ReactElement } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface StyledButtonProps extends Omit<ButtonProps, "variant"> {
  variant: "contained" | "outlined"; 
  startIcon?: ReactElement;
  to?: string;
  onClick?: () => void;
}

const StyledButtonWrapper = styled(Button)<StyledButtonProps>(
  ({ theme, variant }) => ({
    borderRadius: "6px",
    padding: "12px 24px",
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    textDecoration: "none",

    ...(variant === "contained" && {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.contrastText}`,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.primary.contrastText,
        border: `2px solid ${theme.palette.secondary.main}`,
      },
    }),

    ...(variant === "outlined" && {
      backgroundColor: "transparent",
      border: `2px solid ${theme.palette.primary.contrastText}`,
      color: theme.palette.primary.contrastText,
      "&:hover": {
        border: `2px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
      },
    }),
  })
);

const StyledButton: React.FC<StyledButtonProps> = ({ to, onClick, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (to) {
      if (to.startsWith('#')) {
        const anchorId = to.substring(1);
        
        if (location.pathname === '/') {
          // Scroll suave na mesma página
          const element = document.getElementById(anchorId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        } else {
          // Navega para home com estado para scroll
          navigate('/', { state: { scrollTo: anchorId } });
        }
      } else {
        // Navegação normal para outras páginas
        navigate(to);
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  return <StyledButtonWrapper {...props} onClick={handleClick} />;
};

export default StyledButton;