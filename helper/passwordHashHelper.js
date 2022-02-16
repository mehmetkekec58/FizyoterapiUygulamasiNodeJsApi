var passwordHash = require('password-hash');


const passwordHash2 = {
    async passwordHash(password) {
        return await passwordHash.generate(password);
    },
    async passwordDogrula(password, hashedPass) {
        return await passwordHash.verify(password, hashedPass);
    }
}
module.exports = passwordHash2