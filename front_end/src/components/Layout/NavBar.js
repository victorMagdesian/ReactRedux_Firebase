import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const NavBar = () => {
    
        return (
            <nav className="nav-wrapper orange darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo  lighten-1">PaladinPlan</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        )

    
}
export default NavBar