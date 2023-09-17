// import React from "react";
import { ArrowDropDown, Notifications, Redeem, Search } from "@material-ui/icons"
import { useState } from "react";
import "./navbar.css"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // if scrolled, hence y axis != 0
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                {/* left side nav */}
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt="logo"/>
                    <span>
                        Home
                    </span>
                    <span>
                        TV Shows
                    </span>
                    <span>
                        Movies
                    </span>
                    <span>
                        New & Popular
                    </span>
                    <span>
                        My List
                    </span>
                </div>
                {/* right side nav */}
                <div className="right">
                    <span>
                        <Search />
                    </span>
                    <span>
                        CHILDREN
                    </span>
                    <span>
                        <Redeem />
                    </span>
                    <span>
                        <Notifications />
                    </span>
                    <span className="profilePicture">
                        <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" alt="profilePicture"/>
                    </span>
                    <div className="profile">
                        <ArrowDropDown />
                        <div className="profileOptions">
                            <span>
                                Settings
                            </span>
                            <span>
                                Sign Out
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar