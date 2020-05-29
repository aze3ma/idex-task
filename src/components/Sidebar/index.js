import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Sidebar, Menu, Image } from 'semantic-ui-react'

import './Sidebar.css'

const IDEXSidebar = (props) => {
  const { t } = useTranslation()

  return (
    <Sidebar
      as={Menu}
      animation="push"
      direction="left"
      icon="labeled"
      inverted
      vertical
      visible={props.visible}
      width="thin"
    >
      <Menu.Item>
        <Image id="logo" src="/app_logo.png" alt="IDEX Logo" size="mini" />
      </Menu.Item>
      <Menu.Item as={NavLink} to="/profile">
        {t('sidebarMenu.profileMenuItem')}
      </Menu.Item>
      <Menu.Item as={NavLink} to="/help">
        {t('sidebarMenu.helpMenuItem')}
      </Menu.Item>
    </Sidebar>
  )
}

export default IDEXSidebar
