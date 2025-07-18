import jwt from 'jsonwebtoken';
import userModel from '../models/user'

export const checkAuthHeader = async (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if (!header.startsWith('Bearer')) {
            res.json({
                status: 'error',
                message: 'Invalid Token details',
            })
        }

        const authToken = header.split(' ')[1];

        const decodedToken = await jwt.verify(authToken, process.env.SECRET_KEY );

        if (!decodedToken.email) {
            res.json({
                status: 'error',
                message: 'Invalid Token details',
            })
        }

        const existingUser = await userModel.findOne({ email: decodedToken.email });

        if (!existingUser) {
            res.json({
                status: 'error',
                message: 'Invalid Token details',
            })
        }

        next()
    } catch (err) {
        res.json({
            status: 'error',
            message: 'Invalid Token',
        })
        console.log('ERROR', err.message);
    }
}