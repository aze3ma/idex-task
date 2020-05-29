import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Sidebar, Button, Icon } from 'semantic-ui-react'

import IDEXSidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import Routes from './routes'

const App = () => {
  const [visible, setSidebarVisibilty] = useState(true)

  const handleVisibilty = () => {
    setSidebarVisibilty(!visible)
  }

  return (
    <Router>
      <Sidebar.Pushable>
        <Header />
        <IDEXSidebar visible={visible} />

        <Sidebar.Pusher>
          <Button className="sidebar-button" onClick={handleVisibilty} secondary>
            <Icon name={!visible ? 'chevron right' : 'chevron left'} />
          </Button>

          <Routes />
        </Sidebar.Pusher>
        <Footer />
      </Sidebar.Pushable>
    </Router>
  )
}

export default App
