import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class AboutPage extends React.Component {
  render() {
    const siteTitle = "About Me"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="About Me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> 
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1> */}
        <p>I’m an Engineer from Nashik, India who loves to develop digital systems and write software to make the world more digital. I am a coder by profession and entrepreneur by heart. I have a passion for creating and enhancing anything related to technology. When it comes to building something new, my ultimate goal is to make the world a better place. I’m a digital professional on the bleeding edge technology. Strong engineering professional with a Bachelor of Engineering (B.E.) focused on Computer Science and Engineering from Savitribai Phule Pune University.</p>

        <p>I’m self-motivated, highly adaptable, intellectual, technology enthusiast, problem solver, persistent. Self-taught many programming languages and new technologies. I’m enthusiastic to learn new technologies and I like the trial and error method to solve any problem. I like to experiment and research on the Internet of Things(IoT), AI, Machine Learning, Deep Learning, BigData, Distributed Computing and Parallel Programming.</p>

        <p>I’m a “jugaadu” kind of person. So if you gave me a challenge and time duration to find out the solution to it. And if I don’t know anything about it, then I just want one machine and full access to the internet. I’ll do research, learn, and develop the solution for that challenge within the given time frame.</p>

        <p>I’m also interested in entrepreneurship, critical reading, listening to music, traveling, trekking, hiking, street, and landscape photography.</p>

        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default AboutPage