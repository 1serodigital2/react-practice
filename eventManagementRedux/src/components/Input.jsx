const Input = ({ label, type, value, handleChange }) => {
  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
        <input
          type={type}
          name={label.toLowerCase().trim()}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Input;
