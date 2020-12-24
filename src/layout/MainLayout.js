import React, { useState, createContext } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import _ from "lodash"
import styled from "styled-components"

import Menu from "components/organisms/Menu"

const StyledMain = styled.main`
  transition: width 0.5s;
  width: ${({ menuOpen }) => (menuOpen ? "calc(100% - 300px)" : "100%")};
`

export const MenuOpenmetContext = createContext()

const MainLayout = ({ children }) => {
  const { pathname } = useLocation()
  const [isMenuOpen, setMenuOpenmet] = useState(false)

  const contextValue = { isMenuOpen, setMenuOpenmet }

  return (
    <>
      <Helmet>
        <title>
          {`${
            pathname === "/" ? "Home" : _.capitalize(pathname.substr(1, pathname.length))
          } | Diary Planner`}
        </title>
      </Helmet>
      <MenuOpenmetContext.Provider value={contextValue}>
        <StyledMain menuOpen={isMenuOpen}>{children}</StyledMain>
        <Menu />
      </MenuOpenmetContext.Provider>
    </>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
