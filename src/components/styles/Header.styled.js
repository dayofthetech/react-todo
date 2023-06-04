import styled  from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 20px 0 10px;

    ${'' /* Ways to style the h1 inside header */}
    h1 {
        padding: 20px;
        text-align: center;
    }

`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`