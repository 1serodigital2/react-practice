const Button = ({ children, textOnly, cssName, ...props }) => {
  let cssClass = textOnly ? "text-button" : "button";
  cssClass += " " + cssName;
  return (
    <button {...props} className={cssClass}>
      {children}
    </button>
  );
};

export default Button;
