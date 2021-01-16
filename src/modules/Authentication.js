import JtockAuth from "j-tockauth"
import axios from "axios"


const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
})

const signUp = async (event, dispatch) => {
  try {
    event.preventDefault()
    let response = await auth.signUp({
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    })
    dispatch({
      type: "SET_CURRENT_USER",
      payload: response.data,
    })
    dispatch({ type: "CLOSE_REGISTRATION_FORM" })
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR_MESSAGE",
      payload: error.response.data.errors.full_messages[0],
    })
    dispatch({ type: "OPEN_REGISTRATION_FORM" })
  }
}

// const performPayment = async (stripeToken) => {
//   let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
//   try {
//     const response = await axios.post(
//       "/subscriptions",
//       { stripeToken: stripeToken },
//       { headers: headers }
//     )
//     store.dispatch({
//       type: "SET_PAYMENT_SUCCESS_MESSAGE",
//       payload: response.data.message,
//     })
//   } catch (error) {
//     store.dispatch({
//       type: "SET_PAYMENT_ERROR_MESSAGE",
//       payload: error.response.data.message,
//     })
//   }
// }
const logIn = async (event, dispatch) => {
  let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
  try {
    debugger
    event.preventDefault()
    let response = await axios.post(
      "/auth/sign_in",
      {
        email: event.target.email.value,
        password: event.target.password.value,
      },
      await headers
    )
    // dispatch({
    //   type: "SET_CURRENT_USER",
    //   payload: response.data,
    // })
    // dispatch({ type: "CLOSE_LOGIN_FORM" })
    dispatch({
      type: 'SET_LOGIN_SUCCESS_MESSAGE',
      payload: response.data.message,
    })
  } catch (error) {
    debugger
    dispatch({
      type: "REGISTER_ERROR_MESSAGE",
      payload: error.response.data.errors.full_messages[0],
    })
    dispatch({ type: "OPEN_LOGIN_FORM" })
  }
}

export { signUp, logIn }
