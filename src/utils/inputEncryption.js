import sha256 from 'crypto-js/sha256'

const InputEncryption = (pw) => process.env.REACT_APP_PW_SECRET_F + sha256(pw).toString() + process.env.REACT_APP_PW_SECRET_B;

export default InputEncryption