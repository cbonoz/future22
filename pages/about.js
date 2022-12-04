import React from "react"
import ReactMarkdown from "react-markdown"
import { APP_DESC, APP_NAME } from "../util/constants"
import Image from "next/image";

import logo from 'assets/logo_trans.png'

// TODO: replace markdown here

const text = `

CareerBridge provides:

1. A personalized career assessment tool that helps learners identify their strengths, interests, and goals, and provides tailored recommendations for careers and education pathways that align with their unique profile.
2. A career planning tool that helps learners create and manage a customized plan for their career development, including setting goals, tracking progress, and accessing resources and support.
3. A network of industry professionals and experts who can provide guidance, advice, and mentorship to adult learners as they navigate their career journey.
4. A range of resources and support services, including access to career counseling, job placement assistance, and other resources that can help adult learners transition from education to the workforce.
5. A platform to help adult learners connect with each other and share their experiences and insights as they navigate their career journey even after the classes end"

`

const About = () => {
    return <div>
        <br/>
        <Image src={logo} layout="responsive" className='about-logo'/>
        <br/>
        <br/>
        <h1>About</h1>
        <ReactMarkdown>{text}</ReactMarkdown>
        <a href="https://github.com/cbonoz/future22" target="_blank">Github</a>
        <p>

</p>

</div>
}

export default About;