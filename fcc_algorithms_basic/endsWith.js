function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  str = String(str).split("");
  target = String(target);
  endingLength = target.length * -1;
  strSlice = str.slice(endingLength).join("");
  return strSlice === target;
}

confirmEnding("Bastian", "n");
