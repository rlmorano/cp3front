import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// nodejs library that concatenates strings
import classnames from 'classnames';
import AuthContext from '../../context/auth/authContext';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

function SolidNavBar() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logoutUser } = authContext;

  const [navbarColor, setNavbarColor] = React.useState('navbar-dark');
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle('nav-open');
  };

  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (
  //       document.documentElement.scrollTop > 299 ||
  //       document.body.scrollTop > 299
  //     ) {
  //       setNavbarColor('');
  //     } else if (
  //       document.documentElement.scrollTop < 300 ||
  //       document.body.scrollTop < 300
  //     ) {
  //       setNavbarColor('navbar-transparent');
  //     }
  //   };

  //   window.addEventListener('scroll', updateNavbarColor);

  //   return function cleanup() {
  //     window.removeEventListener('scroll', updateNavbarColor);
  //   };
  // });
  return (
    <Navbar
      className={classnames('fixed-top', navbarColor)}
      color-on-scroll='300'
      expand='lg'
    >
      <Container>
        <div className='navbar-translate'>
          <NavbarBrand
            data-placement='bottom'
            to='/'
            target='_blank'
            tag={Link}
          >
            <h3>Tattooz</h3>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className='navbar-toggler-bar bar1' />
            <span className='navbar-toggler-bar bar2' />
            <span className='navbar-toggler-bar bar3' />
          </button>
        </div>
        <Collapse
          className='justify-content-end'
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink to='/home' tag={Link}>
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#services' tag={Link}>
                SERVICES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#carousel' tag={Link}>
                GALLERY
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#aboutus' tag={Link}>
                ABOUT
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#team' tag={Link}>
                TEAM
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='#contactus' tag={Link}>
                CONTACT
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to='/booking' tag={Link} >
                BOOK A SESSION
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Account
              </DropdownToggle>
              <DropdownMenu right>
                {isAuthenticated ? (
                  <>
                    <DropdownItem to='/customer' tag={Link}>
                      BOOKINGS
                </DropdownItem>
                    <DropdownItem onClick={() => logoutUser()} tag={Link}>
                      LOGOUT
                </DropdownItem>
                  </>
                ) : (
                    <>
                      <DropdownItem to='/login' tag={Link}>
                        LOGIN
                    </DropdownItem>
                      <DropdownItem to='/register' tag={Link}>
                        REGISTER
                    </DropdownItem>
                    </>
                  )}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
export default SolidNavBar;
