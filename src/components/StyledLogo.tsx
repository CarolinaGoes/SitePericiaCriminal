import { Container, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";

const EmptySquad = ({ isAnimating, size, style }: { 
  isAnimating: boolean; 
  size: number;
  style?: React.CSSProperties 
}) => (
  <div
    style={{
      backgroundColor: isAnimating ? "#d2b01922" : "transparent",
      width: `${size}vh`,
      height: `${size}vh`,
      display: "flex",
      transform: "rotate(45deg)",
      justifyContent: "center",
      alignItems: "center",
      border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
      boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
      zIndex: 0,
      marginBottom: `-${size * 0.75}vh`,
      marginTop: `-${size * 0.75}vh`,
      transition: "all 0.6s ease",
      ...style
    }}
  />
);

const FiledSquad = ({ isAnimating, size, style }: { 
  isAnimating: boolean; 
  size: number;
  style?: React.CSSProperties 
}) => {
  return (
    <div
      style={{
        backgroundColor: isAnimating ? "#1a1a1a" : "#232323",
        width: `${size}vh`,
        height: `${size}vh`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "rotate(45deg)",
        border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
        boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
        zIndex: 1,
        transition: "all 0.6s ease",
        ...style
      }}
    >
      <div
        style={{
          backgroundColor: "#232323", 
          width: `${size * 0.28}vh`,
          height: `${size}vh`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
          boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
          marginRight: `${size * 0.09}vh`,
          zIndex: 1,
          transition: "all 0.6s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isAnimating 
              ? "linear-gradient(45deg, transparent 0%, rgba(210, 176, 25, 0.3) 50%, transparent 100%)" 
              : "none",
            transition: "all 0.9s ease",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#232323", 
          width: `${size * 0.28}vh`,
          height: `${size}vh`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
          boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
          zIndex: 1,
          transition: "all 0.9s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: isAnimating 
              ? "linear-gradient(45deg, transparent 0%, rgba(210, 176, 25, 0.3) 50%, transparent 100%)" 
              : "none",
            transition: "all 0.6s ease",
          }}
        />
      </div>
    </div>
  );
};

const StyledLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const logoSize = isSmallScreen ? 12 : 20;

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 300);

    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 2500);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: `${logoSize * 1.75}vh`,
        width: "100%",
        padding: "20px",
        margin: "20px 0"
      }}
    >
      <EmptySquad 
        isAnimating={isAnimating} 
        size={logoSize}
        style={{ transitionDelay: "0s" }} 
      />
      <FiledSquad 
        isAnimating={isAnimating} 
        size={logoSize}
        style={{ transitionDelay: "0.1s" }} 
      />
      <EmptySquad 
        isAnimating={isAnimating} 
        size={logoSize}
        style={{ transitionDelay: "0.2s" }} 
      />
    </Container>
  );
};

export default StyledLogo;