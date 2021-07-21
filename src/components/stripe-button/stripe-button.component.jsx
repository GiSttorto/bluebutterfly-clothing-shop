import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Image from '../../assets/logo.svg'

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ItEZ0B1fmwSMY9wJ7UadjpQKia6RSUVYaf0R9qeqFDLXPD5wqhUiCKE9ZqkqCs26mA8NuZbFeF47UijKdsuNWYR00fMOdxhnV';
  const onToke = token => {
    alert('payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='bluebutterfly Clothing Ltd.'
      billingAddress
      shippingAddress
      image={Image}
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      currency="EUR"
      token={onToke}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;