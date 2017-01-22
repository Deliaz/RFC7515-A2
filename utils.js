/**
 * Utilities for encode/decode
 * @type {object}
 */
const Utils = {

    /**
     * Encode string to base64url
     * @see {@link https://tools.ietf.org/html/rfc7515#appendix-C} Description for base64Url encoding
     * @param {string} str Any string
     * @return {string} base64url encoded string (url safe and without trailing '=');
     */
    stringToBase64Url: str => {
        return btoa(str)
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=+$/, "");
    },


    /**
     * Decode base64url to string
     * @param {string} b64u Base64url encoded string
     * @returns {string} Decoded string
     */
    base64UrlToString: b64u => {
        return atob(b64u + '==='.slice((b64u.length + 3) % 4))
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
    },


    /**
     * Convert base64 to base64url (escape function)
     * @param {string} b64 Base64 string
     * @returns {string} Base64url string
     */
    base64ToBase64Url: b64 => {
        return b64.replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
    },


    /**
     * Convert base64url to base64 (unescape function)
     * @param {string} b64u Base64url string
     * @returns {string} Base64 string
     */
    base64UrlToBase64: b64u => {
        return (b64u + '==='.slice((b64u.length + 3) % 4))
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
    },


    /**
     * Convert string to Array Buffer (for ASCII only)
     * @param {string} str ASCII string
     * @returns {ArrayBuffer} Array Buffer (UInt8 view)
     */
    stringToArrayBuffer: str => {
        const buf = new ArrayBuffer(str.length);
        const bufView = new Uint8Array(buf);
        for (let i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
};

