import { Container } from "@mui/material";
import { useState, useEffect } from "react";

const EmptySquad = ({ isAnimating, style }: { isAnimating: boolean; style?: React.CSSProperties }) => (
  <div
    style={{
      backgroundColor: isAnimating ? "#d2b01922" : "transparent",
      width: "20vh",
      height: "20vh",
      display: "flex",
      transform: "rotate(45deg)",
      justifyContent: "center",
      alignItems: "center",
      border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
      boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
      zIndex: 0,
      marginBottom: "-15vh",
      marginTop: "-15vh",
      transition: "all 1s ease",
      ...style
    }}
  />
);

const FiledSquad = ({ isAnimating, style }: { isAnimating: boolean; style?: React.CSSProperties }) => {
  return (
    <div
      style={{
        backgroundColor: isAnimating ? "#1a1a1a" : "#232323",
        width: "20vh",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: "rotate(45deg)",
        border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
        boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
        zIndex: 1,
        transition: "all 1s ease",
        ...style
      }}
    >
      <div
        style={{
          backgroundColor: "#232323", 
          width: "5vh",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
          boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
          marginRight: "3vh",
          zIndex: 1,
          transition: "all 1s ease",
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
            transition: "all 1.5s ease",
          }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#232323", 
          width: "5vh",
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: isAnimating ? "1.3vh solid #ffd700" : "1vh solid #d2b019ff",
          boxShadow: isAnimating ? "0 0 25px rgba(210, 176, 25, 0.6)" : "none",
          zIndex: 1,
          transition: "all 1.5s ease",
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
            transition: "all 1.0s ease",
          }}
        />
      </div>
    </div>
  );
};

const StyledLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    const interval = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 4000);

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
        height: "35vh",
        width: "100%",
        padding: "20px",
        margin: "20px 0"
      }}
    >
      <EmptySquad isAnimating={isAnimating} style={{ transitionDelay: "0s" }} />
      <FiledSquad isAnimating={isAnimating} style={{ transitionDelay: "0.2s" }} />
      <EmptySquad isAnimating={isAnimating} style={{ transitionDelay: "0.4s" }} />
    </Container>
  );
};

export default StyledLogo;