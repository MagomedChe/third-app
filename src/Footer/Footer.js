import React from 'react';
import Copyright from "./Copyright";
import FooterMenu from "./FooterMenu";
import FooterLogo from "./FooterLogo";

function Footer(props) {
    return (
        <div className="footer">
            <div className="footerf">
                <FooterLogo />
                <FooterMenu />
                <Copyright />
            </div>

        </div>
    );
}

export default Footer;
