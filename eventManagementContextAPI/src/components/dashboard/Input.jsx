const Input = ({ type, label, value = "" }) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={label.trim().toLowerCase().replace(/ /g, "_")}
        defaultValue={value}
      />
    </>
  );
};

export default Input;
