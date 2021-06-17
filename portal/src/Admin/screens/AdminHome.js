import './AdminHome.css'

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from '../container/SidebarData';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Table from 'react-bootstrap/Table'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import Button from 'react-bootstrap/Button'

import { IconContext } from 'react-icons';

import YearChart from '../charts/YearlyReport'
import WeekChart from '../charts/WeeklyReport'
import DailyChart from '../charts/DailyReport'
import SalesChart from '../charts/SalesReport'

const AdminHome = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);

    return (
        <>
            <Container fluid className='bg'>
                <IconContext.Provider value={{ color: '#fff' }}>

                    <Navbar fixed="top" bg="#060b26" variant="dark">
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={showSidebar} />
                        </Link>

                        <Navbar.Brand className='navbar-text' href="#"><Nav.Link href="#action1">Dashboard</Nav.Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/">New Requests</Nav.Link>
                                <NavDropdown title="orders" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/">New Clients</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    
                </IconContext.Provider>
                <h2><span></span>Dashboard</h2>
                <br />
                <br />

                <div onClick={closeSidebar} >

                    <Row>
                        <Col lg={2} md={4} sm={4} xs={6} >
                            <div className="card">
                                <div style={{ alignItems: 'center' }}>
                                    <p> Essentials</p>
                                </div>
                                <SalesChart />
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">
                                <div style={{ alignItems: 'center' }}>
                                    <p> Electronics</p>
                                </div>
                                <SalesChart />
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">
                                <div style={{ alignItems: 'center' }}>
                                    <p>Fashion</p>
                                </div>
                                <SalesChart />
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">
                                <div style={{ alignItems: 'center' }}>
                                    <p> Mobile</p>
                                </div>
                                <SalesChart />
                            </div>
                        </Col>

                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">
                                <div style={{ alignItems: 'center' }}>
                                    <p> Books</p>
                                </div>
                                <SalesChart />
                            </div>
                        </Col>
                        <Col lg={2} md={4} sm={4} xs={6}>
                            <div className="card">
                                <div style={{ alignItems: 'center' }}>
                                    <p> appliances</p>
                                </div>
                                <SalesChart />
                            </div>
                        </Col>

                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <div className="card2">
                                <YearChart />
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col>
                                    <div className="card2">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </Table>

                                    </div>

                                </Col>
                                <Col>
                                    <div className="card2">
                                        <WeekChart />
                                    </div>

                                </Col>
                            </Row>

                        </Col>

                    </Row>
                    <br />
                    <br />
                    <Row>
                        <Col lg={3}>
                            <div className="card2">
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </div>

                        </Col>
                        <Col lg={6}>
                            <div className="card2">
                                <DailyChart />
                            </div>

                        </Col>
                        <Col lg={3}>
                            <div className="card2">
                                <Table striped bordered hover variant="dark">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td colSpan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </div>
                        </Col>
                    </Row>



                </div>
            </Container>
        </>
    );
}

export default AdminHome;