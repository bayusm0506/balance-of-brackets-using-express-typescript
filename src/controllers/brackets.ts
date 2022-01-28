import { Request, Response, NextFunction } from 'express';

// Function Brackets
const Bracket = async (req: Request, res: Response, next: NextFunction) => {
    let s: string = req.body.input;

    // Create a stack
    let stck: string[] = [];

    // Loop through each element in the string
    for (let i = 0; i < s.length; i++) {
        let char = stck[stck.length - 1];

        // If you encounter a starting bracket, push it in to the stack
        if (s[i] == "(")
            stck.push(s[i])

        // Pop the opening bracket off the stack,
        // if there is a corresponding closing bracket in the string
        if ((char == "(" && s[i] == ")"))
            stck.pop(); //  remove the last element from an array and to return that element.

        else true
    };

    // return response
    return res.status(200).json({
        output: stck.length ? false : true
    });
};

export default { Bracket };