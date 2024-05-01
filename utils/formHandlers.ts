export const handleFormSubmission = async (event, setIsFormSubmitted) => {
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