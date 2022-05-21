import mongoose from "mongoose"

const historiqueResponseAuditStrategiqueSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },

    responses:{
        type: Array,
        required: true
    },


    selectedObjectives: {
        type: Array

    },





})

const HistoriqueResponseAuditStrategique = mongoose.model('historiqueResponseAuditStrategique',historiqueResponseAuditStrategiqueSchema)
export default HistoriqueResponseAuditStrategique;