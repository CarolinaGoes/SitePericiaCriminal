import { Container } from "@mui/material";

const EmptySquad = () => (
  <div
    style={{
      backgroundColor: "#232323",
      width: "20vh",
      height: "20vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "rotate(45deg)",
      border: "1vh solid #d2b019ff",
      zIndex: 0,
      marginBottom: "-15vh",
      marginTop: "-15vh",
    }}
  />
);


const FiledSquad = () => {
  return (
    <div
    style={{
      backgroundColor: "#232323",
      width: "20vh",
      height: "20vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transform: "rotate(45deg)",
      border: "1vh solid #d2b019ff",
      zIndex: 1,
    }}
  ><div
    style={{
      backgroundColor: "#232323",
      width: "5vh",
      height: "20vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1vh solid #d2b019ff",
      gap: "1vh",
      marginRight: "3vh",
      zIndex: 1,
    }}
  /><div
    style={{
      backgroundColor: "#232323",
      width: "5vh",
      height: "20vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1vh solid #d2b019ff",
      gap: "1vh",
      zIndex: 1,
    }}
  />
    </div>
  
  );
};

const StyledLogo = () => {
  return (
    <Container
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        marginTop: "10%",

      }}
    >
        <EmptySquad/>
      <FiledSquad />
        <EmptySquad />
    </Container>
  );
};

export default StyledLogo;