const Input = ({ type, label }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={label.trim().toLowerCase().replace(/ /g, "_")}
        // placeholder="Enter full name"
      />
    </>
  );
};

export default Input;
