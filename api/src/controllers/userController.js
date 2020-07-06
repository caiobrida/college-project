const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req, res) {
        const { name, email, password } = req.body;
        if (!name || !email || !password) return res.status(400).json({ msg: 'Bad request received' });

        const [user] = await User.find({ email });
        if (user) return res.status(400).json({ msg: 'User already registered' });
        
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt);

        await User.create({
            name,
            email,
            password: encryptedPassword
        });

        res.json({ msg: 'Success' });
    }
}