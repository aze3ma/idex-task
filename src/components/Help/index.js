import React from 'react'
import { useTranslation } from 'react-i18next'
import { Segment, Container, Grid, Header, Divider, Form, TextArea, Button } from 'semantic-ui-react'

import './Help.css'

const Help = () => {
  const { t } = useTranslation()

  return (
    <Container className="help">
      <Segment>
        <Grid centered>
          <Grid.Row centered columns={1}>
            <Grid.Column>
              <Header className="text-center" as="h2">
                {t('general.helpPageTitle')}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Divider section />

          <Grid.Row columns={1}>
            <Grid.Column>
              <p className="text-center">{t('general.helpPageDescription')}</p>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Form>
                <TextArea placeholder={t('general.helpPageDescription')} />
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered columns={1}>
            <Button primary size="medium">
              {t('general.helpPageButton')}
            </Button>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}

export default Help
