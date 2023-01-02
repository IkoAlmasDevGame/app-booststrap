import {Nav, Navbar, Container, NavbarBrand, NavLink, Dropdown} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
            <Navbar className="NavBG">
                <Container>
                    <NavbarBrand className='title-bar'>My Information Technologi</NavbarBrand>
                        <Nav>
                            <NavLink href='#latest'>Latest News</NavLink>
                            <NavLink href='#old'>Old News</NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;