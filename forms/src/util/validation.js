export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}

export function validateEmail(value) {
  if (!isEmail(value)) {
    return "Invalid email format";
  }
  return null;
}

export function validatePassword(value) {
  if (!hasMinLength(value, 6)) {
    return "Password must be at least 6 characters long";
  }
  return null;
}
