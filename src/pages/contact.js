import React from "react"
import { Link } from "gatsby"

import Contact from "../components/Contact"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Contact></Contact>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
