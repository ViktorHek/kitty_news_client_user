import React from "react"
import { Form, Button, Icon, Modal, Message } from "semantic-ui-react"
import {useDispatch, useSelector} from "react-redux"
import {logIn} from "../modules/Authentication"

const LogInForm = () => {
  const { logInSuccessMessage, logInModalOpen } = useSelector((state) => state)
  const dispatch = useDispatch()

  // logInErrorMessage

  return (
    <>
      <Modal
        closeIcon
        // onClose={() => dispatch({ type: "CLOSE_LOGIN_FORM" })}
        onOpen={() => dispatch({ type: "OPEN_LOGIN_FORM" })}
        open={logInModalOpen}
        trigger={
          <Button data-cy="log-in-button" inverted>
            Log In
          </Button>
        }
      >
        <Modal.Header>Log In Here!</Modal.Header>
        <Modal.Content>
          <Form
            data-cy="log-in-form"
            onSubmit={(event) => logIn(event, dispatch)}
          >
            <Form.Input
              icon="at"
              type="text"
              label="Email"
              name="email"
              data-cy="log-in-email"
              placeholder="Email"
              iconPosition="left"
            />
            <Form.Input
              icon="key"
              type="password"
              label="Password"
              name="password"
              data-cy="log-in-password"
              placeholder="Password"
              iconPosition="left"
            />
            <Button data-cy="log-in-submit-btn" icon labelPosition="left">
              <Icon name="user"></Icon>
              Submit
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Description>
          {logInSuccessMessage && (
            <Message data-cy="log-in-success-message" negative>
              {logInSuccessMessage}
            </Message>
          )}
        </Modal.Description>
      </Modal>
    </>
  )
}

export default LogInForm
