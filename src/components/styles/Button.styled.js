import styled, {ThemeProvider} from "styled-components"

const ButtonTheme = {
    removeTheme: {
        backgroundColor: "lightblue",
        boxShadow: "0px 2px 2px lightgray",
        textTransform: "uppercase",
    },

    addTheme: {
        backgroundColor: "lightred",
        boxShadow: "0px 2px 2px pink",
        textTransform: "uppercase",
    }
};

const StyleButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor || "lightblue"};
  margin: 10px;
  border-radius: 5px;
  outline: 0;
  box-shadow: ${(props) => props.theme.boxShadow || "0px 2px 2px lightgray"};
  text-transform: ${(props) => props.theme.textTransform || "uppercase"};
`;

const ThemedButton = ({ theme, onClick, children }) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <ThemeProvider theme={ButtonTheme[theme]}>
        <StyleButton onClick={handleClick}>{children}</StyleButton>
      </ThemeProvider>
    );
  };

export default ThemedButton;
export { StyleButton };

