import axios from 'axios'
import store from '../state/store/configureStore'

const performPayment = async (stripeToken) => {
  let headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'))
  try {
    debugger
    const response = await axios.post(
      '/subscriptions',
      { stripeToken: stripeToken },
      { headers: headers }
    )
    store.dispatch({
      type: 'SET_PAYMENT_SUCCESS_MESSAGE',
      payload: response.data.message,
    })
  } catch (error) {
    store.dispatch({
      type: 'SET_PAYMENT_ERROR_MESSAGE',
      payload: error.response.data.message,
    })
  }
}

export default performPayment
