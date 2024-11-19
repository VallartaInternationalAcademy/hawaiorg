import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import DonateSection from "../containers/DonateSection";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || ""
);

const DonatePage = () => {
  return (
    <Elements stripe={stripePromise}>
      <DonateSection />
    </Elements>
  );
};

export default DonatePage;
