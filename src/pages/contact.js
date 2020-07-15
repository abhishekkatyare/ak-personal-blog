import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class ContactPage extends React.Component {
  render() {
    const siteTitle = "Contact Me"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Contact Me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> 
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1> */}
        <p>Seeker of truth, who is on the path to becoming a mystic.</p>
        
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default ContactPage