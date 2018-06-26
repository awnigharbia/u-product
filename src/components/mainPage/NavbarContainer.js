import React, {Component} from 'react'
import { withRouter } from 'react-router'
import {
    Link
} from '..'

class NavbarContainer extends Component {
    render() {
        const {items} = this.props
        
        return (
            <div className="nav-wrapper">
                <div className='nav'>
                    {items.map((item, key, pathname) => <NavItem key={key} {...item} {...this.props}/>)}
                </div>
            </div>
        )
    }
}

const NavItem = ({name, link, icon, activeIcon, location:{pathname}}) => {

    return (
        <Link to={link} className={link === pathname ? 'nav-item active-nav-item' : 'nav-item'}>
            <img src={link === pathname ? activeIcon : icon} alt={icon} />
            {name}
        </Link>
    )
}

export default withRouter(NavbarContainer)