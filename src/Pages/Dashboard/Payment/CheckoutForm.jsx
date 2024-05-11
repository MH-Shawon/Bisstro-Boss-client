import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../Providers/AuthProvider";

const CheckoutForm = () => {
  const axiosSecure = useAxiosPublic();
  const {user} = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');

  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
          
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }

      const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                    email: user?.email || 'anonymous',
                      name: user?.displayName || 'anonymous',
                  },
              },
          },
      );
      if(confirmError){
        console.log('confirm error');
      }
      else{
        console.log(paymentIntent);
        if(paymentIntent.status ==='succeeded'){
setTransactionId(paymentIntent.id)
        }
      }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="mt-6 flex items-center justify-center  ">
        <button
          className="bg-[#570DF8] text-white rounded-lg font-bold py-2 w-1/2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </div>
      <p className="text-red-600">{error}</p>
      {
        transactionId && <p className="text-green-600">Your transaction Id: {transactionId}</p>
      }
    </form>
  );
};
export default CheckoutForm;
