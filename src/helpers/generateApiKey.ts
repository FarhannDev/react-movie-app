import CryptoJS from "crypto-js";

const generateApiKey = (apiKey?: string): string =>  {
  if (apiKey) {
    const hash = CryptoJS.SHA256(apiKey);
    return hash.toString(CryptoJS.enc.Hex); 
  } else {
    const randomBytes = CryptoJS.lib.WordArray.random(32); // 32 bytes
    return randomBytes.toString(CryptoJS.enc.Hex); // Konversi ke heksadesimal
  }
}


export default generateApiKey
