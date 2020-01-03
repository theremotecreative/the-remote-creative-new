import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const HeroSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "remote-creative-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            <HeroCopy>
                <h1>Welcome to the Remote Creative</h1>
                <h2>Website Design and Development</h2>
            </HeroCopy>
        </BackgroundImage>
      )
    }}
  />
)

const StyledHeroSection = styled(HeroSection)`
  width: 100%;
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`

const HeroCopy = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
    color: #fff;
`

export default StyledHeroSection