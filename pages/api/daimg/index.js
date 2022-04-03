/* eslint-disable import/no-anonymous-default-export */
import connect from "../../../Db/connect";
import daimgSchema from "../../../models/daimgSchema";

// connect to database
connect()

export default async (req, res) => {
    const {method} = req

    switch (method) {
        case 'GET':
            try {
                const daimg = await daimgSchema.find({})
                res.status(200).json({success: true, daimg: daimg})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;

        case 'POST':
            try {
                const link = await linkSchema.create(req.body)
                res.status(200).json({success: true})
            } catch (error) {
                console.log(error);
                res.status(400).json({success: false})
            }
            break;
    
        default:
            res.status(400).json({success: false})
            break;
    }
}