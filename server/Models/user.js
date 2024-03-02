const mongoose = require('mongoose');

const participants = new mongoose.Schema({
    // teamName:{
    //     type:String,
    //     required:true,
    // },
    // teamLeaderName:{
    //     type:String,
    //     required:true,
    // },
    // personalEmailTeamLeader:{
    //     type:String,
    //     required:true,
    //     unique:true,
    // }

    teamName:String,
    teamLeaderName:String,
    personalEmailTeamLeader:String,
});
const Participants = mongoose.model("Participants",participants);

module.exports=Participants;