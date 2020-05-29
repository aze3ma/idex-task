/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector, useDispatch } from 'react-redux'

import { Segment, Header, Image, Divider, Grid, Checkbox } from 'semantic-ui-react'

import { getUserProfile } from '../../actions/userActions'

import './Profile.css'

const Profile = () => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('latestLang'))
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const handleLanguageChange = (event) => {
    localStorage.setItem('latestLang', event.target.value)
    setCurrentLang(event.target.value)
    i18n.changeLanguage(event.target.value)
  }

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])

  return (
    <>
      <Segment className="profile" basic>
        <Header as="h2">{t('general.profilePageTitle')}</Header>
      </Segment>
      <Grid id="profile-grid">
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment className="profile__card">
              <Grid>
                <Grid.Row columns={1}>
                  <Grid.Column className="text-center">
                    <Image
                      className="profile__avatar"
                      src={user?.userAccountInfo?.profilePictureURL}
                      avatar
                      size="tiny"
                    />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column floated="left" width={12}>
                    <div className="profile__meta">
                      <p className="profile__meta__label">{t('general.profilePageNameLabel')}</p>
                      <p className="profile__meta__value">{user?.userAccountInfo?.fullName}</p>
                    </div>
                    <div className="profile__meta">
                      <p className="profile__meta__label">{t('general.profilePageEmailLabel')}</p>
                      <p className="profile__meta__value">{user?.userAccountInfo?.email}</p>
                    </div>
                  </Grid.Column>
                  <Grid.Column floated="right" width={3}>
                    <a className="profile__edit-btn">{t('general.profileEditProfile')}</a>
                  </Grid.Column>
                </Grid.Row>

                <Divider section />
                <Grid.Row columns={1}>
                  <Grid.Column>
                    <a className="profile__action">{t('general.profileChangePassword')}</a>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />

                <Grid.Row columns={1}>
                  <Grid.Column>
                    <a className="profile__action">{t('general.profileChangeLang')}</a>

                    <select name="language" id="language" onChange={handleLanguageChange} value={currentLang}>
                      <option value="en">{t('general.profileEnglishOption')}</option>
                      <option value="de">{t('general.profileGermanOption')}</option>
                    </select>
                  </Grid.Column>
                </Grid.Row>
                <Divider section />

                <Grid.Row>
                  <Grid.Column floated="left" width={10}>
                    <a className="profile__action">{t('general.profileChangeLogout')}</a>
                  </Grid.Column>
                  <Grid.Column floated="right" width={4}>
                    <Checkbox label="Logout on all devices" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Grid.Column>
          <Grid.Column>{t('general.profileLikes')}</Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default Profile
