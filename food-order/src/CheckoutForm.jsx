import { useActionState } from "react";
import { fieldEmpty, hasLessCharacters, invalidEmail } from "./utils";

const CheckoutForm = ({ handleGoToCheckout, cartItems, totalPrice }) => {
  const handleFormSubmission = async (prevFormState, formData) => {
    try {
      const fullName = formData.get("fullName");
      const email = formData.get("email");
      const street = formData.get("street");
      const postalCode = formData.get("postalCode");
      const city = formData.get("city");

      let errors = [];

      if (fieldEmpty(fullName)) errors.push("Full name cannot be empty");

      if (hasLessCharacters(email, 4) || invalidEmail(email))
        errors.push("Invalid email");

      if (fieldEmpty(street)) errors.push("Street is empty");

      if (fieldEmpty(postalCode)) errors.push("Postal code is empty");

      if (fieldEmpty(city)) errors.push("City is empty");

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

      const orderData = {
        order: {
          customer: { ...enteredValues },
          items: { cartItems },
        },
      };

      const response = await fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        errors.push("Error in placing order");
        return;
      }

      const saveResponse = await response.json();

      console.log("saveResponse", saveResponse);

      return orderData;
    } catch (error) {
      console.log("something went wrong", error);
    }
  };

  const [formState, formAction] = useActionState(handleFormSubmission, {
    errors: null,
  });
  console.log("formState", formState);

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
            defaultValue={formState.orderData?.fullName}
          />
        </div>
        <div className="control">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            name="email"
            defaultValue={formState.orderData?.email}
          />
        </div>
        <div className="control">
          <label htmlFor="">Street</label>
          <input
            type="text"
            name="street"
            defaultValue={formState.orderData?.street}
          />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              defaultValue={formState.orderData?.postalCode}
            />
          </div>
          <div className="control">
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              defaultValue={formState.orderData?.city}
            />
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

        {formState?.errors?.length > 0 && (
          <div className="error">
            {formState.errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
            <p></p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
