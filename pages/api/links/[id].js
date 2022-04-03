/* eslint-disable import/no-anonymous-default-export */
import connect from "../../../Db/connect";
import linkSchema from "../../../models/linkSchema";

connect()


export default async(req, res) => {
    const {query: {id}, method} = req

    switch (method) {
        case 'PUT':
            try {
                const link = await linkSchema.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!link) {
                    res.status(400).json({success: false})
                }
                res.status(200).json({success: true})

            } catch (error) {
                res.status(400).json({success: false})
            }
            break;

        case 'DELETE':
            try {
                const link = await linkSchema.deleteOne({_id: id})
                if (!link) {
                    res.status(400).json({success: false})
                }
                res.status(200).json({success: true})

            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
    
        case 'PATCH':
            try {
                const link = await linkSchema.findByIdAndUpdate({_id: id},{
                    $inc: {"totalclick": 1}
                })
                if (!link) {
                    res.status(400).json({success: false})
                }
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