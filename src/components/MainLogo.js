import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const MainLogo = () => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "src/images/logo-mobile-white.png" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              fixed(width: 220, height: 76) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
  
      render={data => (
        <Link 
        to="/"
        >
          <Img fixed={data.file.childImageSharp.fixed} />
        </Link>
      )}
    />
  )
  export default MainLogo