const CheckoutForm = () => {
  return (
    <>
      <h2>Checkout</h2>
      <div>Total Price: $ 676.06</div>
      <form>
        <div className="control">
          <label htmlFor="name">Full Name</label>
          <input type="text" />
        </div>
        <div className="control">
          <label htmlFor="email">Email Address</label>
          <input type="text" />
        </div>
        <div className="control">
          <label htmlFor="">Street</label>
          <input type="text" />
        </div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="">Postal Code</label>
            <input type="text" />
          </div>
          <div className="control">
            <label htmlFor="">City</label>
            <input type="text" />
          </div>
        </div>
      </form>
      <div className="modal-actions">
        <button className="text-button" onClick={() => handleModal(false)}>
          Close
        </button>
        <button className="button">Submit</button>
      </div>
    </>
  );
};
