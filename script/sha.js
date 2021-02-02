/**
 * Get SHA hash for given string
 * @param {string} text - text to get hash
 * @param {('SHA-1'|'SHA-256'|'SHA-384'|'SHA-512')} alg - SHA algorithm (default SHA-256)
 */
export async function getSHA(text, alg = "SHA-256") {
  const endocer = new TextEncoder();
  const data = endocer.encode(text);
  const hashBuffer = await crypto.subtle.digest(alg, data);
  const hashHex = Array.from(new Uint8Array(hashBuffer))
    .map((i) => i.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}
