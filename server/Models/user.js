const mongoose = require('mongoose');

const participants = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    teamLeaderName: {
        type: String,
        required: true,
    },
    personalEmailTeamLeader: {
        type: String,
        required: true,
    },
    teamLeaderContactNumber: {
        type: Number,
        required: true,
    },
    teamLeaderCollege: {
        type: String,
        required: true,
    },
    teamLeaderYear: {
        type: Number,
        required: true,
    },
    teamLeaderCollegeIdCardLink:{
        type:String,
        required:true,
    },
    member1Name: {
        type: String,
    },
    member1Email: {
        type: String,
    },
    member1ContactNumber: {
        type: Number,
    },
    member1College: {
        type: String,
    },
    member1Year: {
        type: Number,
    },
    member1CollegeIdCardLink:{
        type:String,
    },
    member2Name: {
        type: String,
    },
    member2Email: {
        type: String,
    },
    member2ContactNumber: {
        type: Number,
    },
    member2College: {
        type: String,
    },
    member2Year: {
        type: Number,
    },
    member2CollegeIdCardLink:{
        type:String,
    },
    member3Name: {
        type: String,
    },
    member3Email: {
        type: String,
    },
    member3ContactNumber: {
        type: Number,
    },
    member3College: {
        type: String,
    },
    member3Year: {
        type: Number,
    },
    member3CollegeIdCardLink:{
        type:String,
    }

}, { timestamps: true });

const Participants = mongoose.model("Participants", participants);

module.exports = Participants;