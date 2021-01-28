import React from 'react';

//Components
import Header from '../components/header';

const Layout = (props) => {
    return ( 
        <>
            <Header/>
            {props.children}
        </>
     );
}
 
export default Layout;