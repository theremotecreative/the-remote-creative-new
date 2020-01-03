import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const MainMenu = () => (
    <StaticQuery
      query={graphql`
        query {
          wordpressWpApiMenusMenusItems(name: { eq: "Primary" }) {
            items {
              title
              object_slug
            }
          }
        }
      `}
  
      render={data => (
        <ul className="mainMenu">
            <li 
              key="featured-projects" 
              style={{ margin: `0 10px` }} 
              className="mainMenuItem"
            >
              <Link 
                to="#featured_projects"
                style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} 
                >
                Featured Projects
              </Link>
            </li>
            <li 
              key="about" 
              style={{ margin: `0 10px` }} 
              className="mainMenuItem"
            >
              <Link 
                to="#home_about"
                style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} 
                >
                About
              </Link>
            </li>
        </ul>
      )}
    />
  )
  export default MainMenu