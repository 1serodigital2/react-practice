export function fieldEmpty(value) {
  if (value == "") return true;
}

export function hasLessCharacters(value, num) {
  if (value.length < num) return true;
}

export function invalidEmail(value) {
  if (!value.includes("@") || !value.includes(".com")) return true;
}
