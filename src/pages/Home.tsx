import { useState } from "react";
import { Form } from "@dvdcpp/comp-lib/stories/Form";
import { Footer } from '@dvdcpp/comp-lib/stories/Footer'
import ProductImg from "../assets/product.jpg";
import ProductImg2 from "../assets/product2.jpg";
import ProductComponent from "../components/ProductComponent";
import { handleFormSubmission, handlePaymentSubmission } from "../../utils/formHandlers";

const Home = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isPaymentSubmitted, setIsPaymentSubmitted] = useState(false);

  return (
    <>
      <section className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProductComponent title="productName" description="productDescription" img={ProductImg} />
          <div className="flex items-center justify-center">
            {isFormSubmitted && !isPaymentSubmitted ? (
              <div className="max-w-[500px] w-full mx-auto">
                <h1 className="text-center text-2xl mb-4"> Payment Information </h1>
                <form onSubmit={(event) => handlePaymentSubmission(event, setIsPaymentSubmitted)} className="flex flex-col gap-2">
                  <div>
                    <label htmlFor="creditNumber">Credit Card Number:</label>
                    <input type="text" id="creditNumber" name="creditNumber" className="form-control" placeholder="0000 0000 0000 0000" />
                  </div>
                  <div>
                    <label htmlFor="holder">Card Holder Name:</label>
                    <input type="text" id="holder" name="holder" className="form-control" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="expire">Expiration Date:</label>
                    <input
                      type="text"
                      id="expire"
                      name="expire"
                      placeholder="MM/YYYY"
                      pattern="(0[1-9]|1[0-2])\/[0-9]{4}"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" className="form-control" placeholder="123"/>
                  </div>
                  <div className="text-center">
                    <input type="submit" className="btn-primary mt-3" value="Submit Payment" />
                  </div>
                </form>
              </div>
            ) : isPaymentSubmitted ? (
              <div className="text-center">
                <h2 className="text-5xl">Thank You!</h2>
                <p>Your payment has been submitted successfully.</p>
              </div>
            ) : (
              <div className="max-w-[500px] w-full mx-auto">
                <h1 className="text-center mb-4 text-2xl">Fill in your informations</h1>
                <Form size="long" primary={true} onSubmit={(event) => handleFormSubmission(event, setIsFormSubmitted)} />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <div className="text-center">
            <h2 className="text-5xl">
              Lorem ipsum dolor sit amet.
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, hic.</p>
            <button className="btn-primary w-fit mt-3">Join us</button>
            </div>
          </div>
          <div>
            <img src={ProductImg2} alt="" className="rounded-3xl" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
