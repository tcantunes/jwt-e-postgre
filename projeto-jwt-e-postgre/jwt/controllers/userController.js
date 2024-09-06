const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });
        res.json({ username: user.username });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
