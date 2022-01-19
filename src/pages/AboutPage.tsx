import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
    const history = useNavigate()
    return (
        <>
        <h1>Information Page</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Debitis nobis magni officia dolorem et mollitia asperiores 
            impedit ea, perspiciatis tempora.</p>
            <button className="btn" onClick={() => history('/')}>Back to Home page</button>
            </>
    )
}