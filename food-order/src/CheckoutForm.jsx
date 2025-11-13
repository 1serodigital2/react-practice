import { useActionState } from "react";

const CheckoutForm = ({ handleGoToCheckout, cartItems, totalPrice }) => {
  const handleFormSubmission = (prevFormState, formData) => {
    try {
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const street = formData.get("street");
      const postalCode = formData.get("postalCode");
      const city = formData.get("city");
      // console.log("fullname", fullName);

      let errors = [];

      if (fullName.length === 0) {
        errors.push("Full name cannot be empty");
      }

      const enteredValues = {
        fullName,
        email,
        street,
        postalCode,
        city,
      };
      if (errors.length > 0) {
        console.log("errors", errors);

        return {
          errors,
          orderData: enteredValues,
        };
      }

      console.log("orderData", orderDetails);
      return {
        orderData: { customer: { ...enteredValues }, items: { cartItems } },
      };

      return { orderDetails };
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const [formState, formAction] = useActionState(handleFormSubmission, {
    errors: null,
  });

  return (
    <div className="form">
      <h2>Checkout</h2>
      <p>Total Price: $ {totalPrice}</p>
      <form action={formAction}>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="fullName"
            defaultValue={formState?.fullName}
          />
        </div>
        <div className="control">
          <label htmlFor="email">Email Address</label>
          <input type="text" name="email" defaultValue={formState?.email} />
        </div>
        <div className="control">
          <label htmlFor="">Street</label>
          <input type="text" name="street" defaultValue={formState?.street} />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              defaultValue={formState?.postalCode}
            />
          </div>
          <div className="control">
            <label htmlFor="">City</label>
            <input type="text" name="city" defaultValue={formState?.city} />
          </div>
        </div>
        <div className="modal-actions">
          <button
            className="text-button"
            onClick={() => handleGoToCheckout(false)}
          >
            Back
          </button>
          <button className="text-button" onClick={() => handleModal(false)}>
            Close
          </button>
          <button className="button">Submit</button>
        </div>

        {formState.errors?.length > 0 && (
          <div className="error">
            {formState.error.map((error) => (
              <p>{error}</p>
            ))}
            <p></p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
