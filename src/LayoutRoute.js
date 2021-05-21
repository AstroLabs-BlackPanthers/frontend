import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';

let headerLinks = [
    {label: 'Home', path: '/'},
    {label: 'Register', path:'/register'},
    {label: 'Profile', path: '/profile'},
    {label: 'Login', path: '/login'},

]
  
let footerLinks = [
    {label: 'Home', path: '/'},
    {label: 'FAQs', path:'/faqs'},
    {label: 'Terms & Conditions', path: '/terms-and-conditions'}
]

function LayoutRoute(props) {
    return (
        <div>
            <NavBar links={headerLinks} theme="light" />
            <Route path={props.path} exact={props.exact} component={props.component} />
            <NavBar links={footerLinks} theme="dark" />
        </div>
    )
}

export default LayoutRoute;