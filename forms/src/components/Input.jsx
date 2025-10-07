export default function Input({
  inputLabel,
  inputType,
  inputValue,
  error,
  ...props
}) {
  return (
    <>
      <label htmlFor={inputType}>{inputLabel}</label>
      <input
        id={inputType}
        type={inputType}
        name={inputType}
        {...props}
        value={inputValue}
      />
      {error && (
        <div className="control-error">
          <p>{error}</p>
        </div>
      )}
    </>
  );
}
