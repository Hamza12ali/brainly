import { contentModel } from "../models/content.model.js";


export const newContent = async(req,res)=>{
    const {title,link} = req.body;
    try{
        let content = await contentModel.findOne({title})
        if(content){
            return res.send({
                message:"Already Exists",
                status:400
            })
        }
        content = await  contentModel.create({title,link})
        content.save();

    }catch(err){
        return res.send({
            message:"Sorry Server is Busy",
            status:400
        })
    }
} 

