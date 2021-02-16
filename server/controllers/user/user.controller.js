const User = require('../../models/User.model')

const Profile = async(req,res)=>{
    await res.status(200).json({
        message:'user found'
    })
}

module.exports = {
    profile:Profile
}