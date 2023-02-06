import * as React from "react"
import AboutMe from "../components/AboutMe/AboutMe"
import Profile from "../components/Profile/Profile"
import Seo from "../components/Seo/Seo"
import LayoutBasic from "../Layouts/LayoutBasic"

const IndexPage = () => (
  <LayoutBasic>
      <Seo title="Presentación" />
    <Profile />
    <AboutMe />
  </LayoutBasic>
)

export default IndexPage
