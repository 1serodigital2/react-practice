const Input = ({ label, type, defaultValue }) => {
  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
        <input
          type={type}
          name={label.toLowerCase().trim()}
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

export default Input;
