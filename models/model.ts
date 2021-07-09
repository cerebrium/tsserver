import * as mongoose from 'mongoose'
const { Schema } = mongoose;

const apartmentSchema = new Schema(
  {
    name: String,
    email: String,
    location: String,
    image: String,
    description: String,
    amenities: [String]
  }
)

const Apartments = mongoose.model('apartments', apartmentSchema); 

module.exports = {
  Apartments
};