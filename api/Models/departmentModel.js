import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema(

    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        categories: [{
            name: { type: String, required: true },
            image: { type: String, required: true },
            description: { type: String, required: true },
            subcategories: [{
                name: { type: String, required: true },
                image: { type: String, required: true },
                description: { type: String, required: true },
            }]
        }],
        description: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const Department = mongoose.model("Department", departmentSchema);
export default Department
