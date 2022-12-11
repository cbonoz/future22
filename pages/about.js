import React from "react"
import ReactMarkdown from "react-markdown"
import { APP_DESC, APP_NAME } from "../util/constants"
import Image from "next/image";

import logo from 'assets/logo_trans.png'

// TODO: replace markdown here

const text = `

${APP_NAME} is a web application that helps students and recent graduates navigate their career paths. The app provides a platform for students to connect with industry professionals and other students, and to create a personalized career plan that they can carry with them throughout their careers.

What does ${APP_NAME} offer?

Personalized learning: The app matches users with a compatible learning partner, allowing them to work together and support each other as they complete their education program.
Career guidance: The app provides access to resources and tools that can help users understand their career options and make informed decisions about their future.
Accountability: The app allows users to set goals, track progress, and receive feedback from their learning partner, providing the support and motivation they need to stay on track and achieve their goals.

Create your profile today and start your journey to a successful career!
`

const About = () => {
    return <div>
        <br/>
        <Image src={logo} layout="responsive" className='about-logo'/>
        <br/>
        <br/>
        <h1>About</h1>
        <ReactMarkdown>{text}</ReactMarkdown>
        <a rel="noreferrer" href="https://github.com/cbonoz/future22" target="_blank">Github</a>
        <p>

</p>

</div>
}

export default About;