import { StyledHeader, Nav } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { StyleButton } from "./styles/Button.styled"
import { Flex } from "./styles/Flex.styled"

export default function Header(){
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <h1>Todo List</h1>
                    <StyleButton>Click Me!!</StyleButton>
                </Nav>

                <Flex>
                    <div>
                        <p>
                            Here I can add an img or extra section
                            for header
                        </p>
                    </div>
                </Flex>
            </Container>
        </StyledHeader>
    )
}