import React from 'react';
import Helmet from 'react-helmet';
import {Global, css} from '@emotion/react';

//Components
import Header from '../components/header';

const Layout = (props) => {
    return ( 
        <>
            <Global
                styles={css`
                    
                    html {
                        font-size: 62.5%;
                    }
                    
                    body {
                        font-size: 16px;
                        font-size: 1.6rem;
                        line-height: 1.5;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.5;
                    }

                    h3 {
                        font-family: 'Pt Sans' sans-serif;
                    }

                    h1, h2 {
                        font-family: 'Roboto' serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>Hotel Gatsby</title>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@700" rel="stylesheet"/>
            </Helmet>
            <Header/>
            {props.children}
        </>
     );
}
 
export default Layout;