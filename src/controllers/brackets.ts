import { Request, Response, NextFunction } from 'express';

// Function Brackets
const Bracket = async (req: Request, res: Response, next: NextFunction) => {
    let s: string = req.body.input;

    // return response
    return res.status(200).json({
        result: s
    })
};

export default { Bracket };