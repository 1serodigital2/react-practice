import {
  isEmail,
  isEqualToOtherValue,
  isNotEmpty,
  hasMinLength,
} from "../util/validation";

export default function Signup() {
  function handleSubmit(formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");
    const firstName = formData.get("first-name");
    const lastName = formData.get("last-name");
    const role = formData.get("role");
    const acquisitionChannel = formData.getAll("acquisition");
    const terms = formData.get("terms");

    let error = [];

    if (!isEmail(email) && isNotEmpty(email)) {
      error.push("Invalid email");
    }

    if (isNotEmpty(password) && !hasMinLength(password, 4)) {
      error.push("Password must be atleast 5 characters");
    }

    if (
      isNotEmpty(confirmPassword) &&
      !isEqualToOtherValue(password) &&
      !hasMinLength(confirmPassword, 4)
    ) {
      error.push("Does not match with password");
    }

    if (isNotEmpty(firstName) && !hasMinLength(firstName, 4)) {
      error.push("Name must be atleast of 5 characters");
    }
    if (isNotEmpty(lastName) && !hasMinLength(lastName, 4)) {
      error.push("Name must be atleast of 5 characters");
    }

    if (!isNotEmpty(role)) {
      error.push("Please select role");
    }
    if (!isNotEmpty(terms)) {
      error.push("Please select our terms");
    }

    if (isNotEmpty(acquisitionChannel) || acquisitionChannel.length === 0) {
      error.push("Please select acquisition");
    }
  }

  return (
    <form action={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" />I
          agree to the terms and conditions
        </label>
      </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
