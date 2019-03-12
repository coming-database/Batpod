import React from 'react'
import { FormGroup, InputGroup, Card, Elevation, Button, Intent } from '@blueprintjs/core'

import style from './index.less'

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const { email, password } = this.state
    return (
      <Card elevation={Elevation.TWO} className={style.loginForm}>
        <FormGroup label="Email" labelFor="email-input">
          <InputGroup
            onChange={e =>
              this.setState({
                email: e.target.value
              })
            }
            value={email}
            id="email-input"
            placeholder="abc@example.com"
          />
        </FormGroup>
        <FormGroup label="Password" labelFor="password-input">
          <InputGroup
            onChange={e =>
              this.setState({
                password: e.target.value
              })
            }
            value={password}
            type="password"
            id="password-input"
          />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={() => {
              console.log('CLICK')
              firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(error => {
                  console.log(error)
                })
            }}
            intent={Intent.PRIMARY}
          >
            Login
          </Button>
        </FormGroup>
      </Card>
    )
  }
}
