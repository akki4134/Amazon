import './styles/Navbar.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Navbar = () => {
    return (
        <div >
            <Container fluid>
                <Row>
                    <div className="header">

                        <Col>
                            <img
                                className="header__logo" alt='logo'
                                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            />
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineOne">Hello</span>
                                <span className="header__optionLineTwo">Select your address</span>
                            </div>
                        </Col>

                        <Col lg={5} md={5} sd={6} xs={6}>
                            <div className="header__search">

                                <input className="header__searchInput" type="search" />

                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineOne">flag</span>
                            </div>
                        </Col>

                        <Col>

                            <div className="header__option">
                                <span className="header__optionLineOne">Hello, sign in</span>
                                <span className="header__optionLineTwo">Accounts & Lists </span>
                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineOne">Returns</span>
                                <span className="header__optionLineTwo">& Orders</span>
                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineTwo">Cart</span>
                            </div>
                        </Col>

                    </div>
                </Row>



                <Row>
                    <div className="subheader" >

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineTwo">All</span>
                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">Best Seller</span>
                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">Mobiles</span>
                            </div>

                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">Prime</span>
                            </div>

                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">Fashion</span>
                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">Electronics</span>
                            </div>

                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">New Releases</span>
                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">Customer Services</span>
                            </div>
                        </Col>

                        <Col>
                            <div className="header__option">
                                <span className="header__optionLineThree">Today's Deals</span>
                            </div>
                        </Col>

                        <Col>
                            <img
                                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/WW84/Launch/400x39-SWM_With-disclaimer_JPN._CB669638753_.jpg"
                                alt=""
                            />
                        </Col>

                    </div>
                </Row>
                
            </Container>
        </div>

    )
}

export default Navbar
