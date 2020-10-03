/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/) //split at any whitespace, underscore, or in the case of no Space use Uppercase
    .join("-")
    .toLowerCase();
}

spinalCase('This Is Spinal Tap');
