/* eslint-disable no-bitwise */
/* eslint-disable no-plusplus */
export function stringToHash(string) {
  let hash = 0;
  let char = 0;
  if (string.length == 0) return hash;

  for (let i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash &= hash;
  }
  return hash;
}
