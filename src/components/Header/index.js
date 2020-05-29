import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Segment, Image, Icon } from 'semantic-ui-react'

import { getUserProfile } from '../../actions/userActions'

import './Header.css'

const Header = (props) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])

  return (
    <Segment className="header">
      <div className="wrapper">
        <Icon name="bell outline" size="small" color="blue" />
        <div className="user-meta">
          <div>
            <p>{user?.userAccountInfo?.fullName}</p>
            <span>{user?.userAccountInfo?.email}</span>
          </div>
          <Image src={user?.userAccountInfo?.profilePictureURL} avatar />
        </div>
      </div>
    </Segment>
  )
}

export default Header
