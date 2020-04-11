/* eslint-disable */
import axios from 'axios';
const stripe = Stripe('pk_test_EL3LzIJNlOxCR6rll9RjHtuc000VonvHaE');

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  const session = await axios(
    `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
  );
  console.log(session);
  // 2) Create checkout from + change credit card
};
