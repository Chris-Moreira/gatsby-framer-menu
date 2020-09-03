import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import useMousePosition from "../hooks/useMousePosition.js"

import { motion } from "framer-motion"

//Components
import Header from "./header"
import Menu from "./menu"

//Styles
import "../styles/App.scss"

const Layout = ({ children }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuState, setMenuState] = useState(false)
  const [cursorHovered, setCursorHovered] = useState(false)

  const { x, y } = useMousePosition()

  return (
    <div className="app">
      <motion.div
        animate={{
          x: x - 20,
          y: y - 20,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 0.8 : 0,
        }}
        trasnsition={{
          ease: "Linear",
          duration: 0.2,
        }}
        className="cursor"
      ></motion.div>
      <Header
        setMenuState={setMenuState}
        siteTitle={siteData.site.siteMetadata.title}
        setCursorHovered={setCursorHovered}
      />
      <Menu
        x={x}
        y={y}
        menuState={menuState}
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
      />
      <div>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
