import React from "react"
import ReactMarkdown from "react-markdown"
import { APP_DESC, APP_NAME } from "../util/constants"
import Image from "next/image";

import logo from 'assets/logo_trans.png'

// TODO: replace markdown here

const text = `

`

const About = () => {
    return <div>
        <br/>
        <Image src={logo} layout="responsive" className='about-logo'/>
        <br/>
        <br/>
        <h1>About</h1>
        <ReactMarkdown>{text}</ReactMarkdown>
        <a href="https://github.com/cbonoz/stack22" target="_blank">Github</a>
        <p>

</p>

</div>
}

export default About;