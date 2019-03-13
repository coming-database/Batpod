import React from 'react'
import { inject, observer } from 'mobx-react'
import { FormGroup, InputGroup, Card, Elevation, Button, Intent, Switch } from '@blueprintjs/core'

import style from './index.less'

@inject('user')
@observer
export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  loginHandler = () => {
    const {
      user: { login }
    } = this.props
    const { email, password } = this.state
    login(email, password)
  }
  render() {
    const { email, password } = this.state
    const {
      user: { isLogining }
    } = this.props
    return (
      <Card elevation={Elevation.TWO} className={style.loginForm}>
        <FormGroup label="Email" labelFor="email-input">
          <InputGroup
            disabled={isLogining}
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
            disabled={isLogining}
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
            disabled={isLogining}
            loading={isLogining}
            onClick={this.loginHandler}
            intent={Intent.PRIMARY}
            type="submit"
          >
            Login
          </Button>
        </FormGroup>
      </Card>
    )
  }
}
