import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const BasicPay = () => {
    return (
        <div>
            <SectionTitle heading="Payment"></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default BasicPay;