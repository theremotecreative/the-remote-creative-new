import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const MainLogo = () => (
    <StaticQuery
      query={graphql`
        query {
          logoImage: file(relativePath: { eq: "logo-mobile-white.png" }) {
            childImageSharp {
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
          <Img fixed={data.logoImage.childImageSharp.fixed} />
        </Link>
      )}
    />
  )
  export default MainLogo