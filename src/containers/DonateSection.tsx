import banner from "../assets/images/hawai/bg4.png";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const DonateSection = () => {
  const [amount, setAmount] = useState(0);
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const { data } = await axios.post(
      "https://corazonhawaii.org:5000/create-payment-intent",
      { amount }
    );
    const clientSecret = data.clientSecret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (paymentResult.error) {
      setMessage(`Error: ${paymentResult.error.message}`);
    } else if (paymentResult.paymentIntent?.status === "succeeded") {
      setMessage("¡Donación exitosa! Gracias por tu apoyo.");
    }
  };
  return (
    <section
      className="bg-cta"
      id="volunteer"
      style={{ background: `url('${banner}') center` }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-5 col-md-6 col-12">
            <div className="card p-4 border-0 rounded">
              <div className="section-title">
                <h4 className="title mb-4">Make a Donation</h4>
                <p className="mb-0 text-muted">
                  Your donation can change lives by providing essential
                  resources to those in need. Every contribution makes a
                  difference.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {/* botones de cantidades predeterminadas 10, 20, 50, 100 */}
                <div className="mb-3">
                  <label className="form-label">Select Amount</label>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => setAmount(10)}
                    >
                      $10
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => setAmount(20)}
                    >
                      $20
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => setAmount(50)}
                    >
                      $50
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => setAmount(100)}
                    >
                      $100
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="amount" className="form-label">
                    Donation Amount (USD)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="form-control"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Details</label>
                  <div className="border p-2 rounded">
                    <CardElement options={{ hidePostalCode: true }} />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={!stripe}
                >
                  Donate
                </button>
                {message && (
                  <div className="alert alert-success mt-3" role="alert">
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
