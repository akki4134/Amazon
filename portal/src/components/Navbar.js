import './Navbar.css'

const Navbar = () => {
    return (
        <div>

            <div className="header">
                <img
                    className="header__logo" alt='logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
                <div className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">Select your address</span>
                </div>
                <div className="header__search">
                    {/* <input/> */}
                    <input className="header__searchInput" type="search" />

                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">flag</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Hello, sign in</span>
                    <span className="header__optionLineTwo">Accounts & Lists </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineTwo">Cart</span>
                </div>

            </div>


            <div className="subheader" >

                <div className="header__option">
                    <span className="header__optionLineTwo">All</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">Best Seller</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">Mobiles</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">Prime</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">Fashion</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">Electronics</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">New Releases</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">Customer Services</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineThree">Today's Deals</span>
                </div>

                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/WW84/Launch/400x39-SWM_With-disclaimer_JPN._CB669638753_.jpg"
                />
            </div>

        </div>

    )
}

export default Navbar
