/* eslint-disable import/no-anonymous-default-export */
import connect from "../../../Db/connect";
import daimgSchema from "../../../models/daimgSchema";

connect()


export default async(req, res) => {
    const {query: {imgid}, method} = req

    switch (method) {
        case 'DELETE':
            try {
                const daimg = await daimgSchema.deleteOne({_id: imgid})
                if (!daimg) {
                    res.status(400).json({success: false})
                }
                res.status(200).json({success: true})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
    
        case 'PATCH':
            try {
                const daimg = await daimgSchema.findByIdAndUpdate({_id: imgid},{
                    $inc: {"totalclick": 1}
                })
                if (!daimg) {
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