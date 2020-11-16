import Logo from "./Logo";
import Menu from "./Menu";


function Header() {
    return (
        <div className="header content">
            <Logo/>
            <Menu/>
        </div>
    );
}
export default Header;