const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeightSchema = new Schema(
{
    UserID: {
        type: String
    },
    Curr_Weight: {
        type: Number
    },
    Date: {
        type: Date, 
        default: Date.now
    }
}, {collection: 'Weight'});
module.exports = Weight = mongoose.model("Weight", WeightSchema);