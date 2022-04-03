/* eslint-disable import/no-anonymous-default-export */
import connect from "../../../Db/connect";

// import linkschema
import linkSchema from "../../../models/linkSchema";

// connect to database
connect()

export default async (req, res) => {
    const {method} = req

    switch (method) {
        case 'GET':
            try {
                const link = await linkSchema.find({})
                res.status(200).json({success: true, link: link})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;

        case 'POST':
            try {
                const link = await linkSchema.create(req.body)
                res.status(200).json({success: true})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
    
        default:
            res.status(400).json({success: false})
            break;
    }
}