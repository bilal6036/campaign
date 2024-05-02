export const handleFormSubmission = async (
  event: React.FormEvent<HTMLFormElement>,
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  const success = true;

  try {
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    if (success) {
      setIsFormSubmitted(true);
    } else {
      console.log("Form submission failed");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};

export const handlePaymentSubmission = async (
  event: React.FormEvent<HTMLFormElement>,
  setIsPaymentSubmitted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  event.preventDefault();
  const success = true;

  try {
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    if (success) {
      setIsPaymentSubmitted(true);
    } else {
      console.log("Payment submission failed");
    }
  } catch (error) {
    console.error("Error submitting payment:", error);
  }
};
