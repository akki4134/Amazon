import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema(
    
    {
        deptname: { type: String, required: true, unique: true },
        deptimage: { type: String, required: true },
        deptcategories: [{
            cataname: { type: String, required: true },
            cataimage: { type: String, required: true },
            catadescription: { type: String, required: true },
        }],
        deptdescription: { type: String, required: true },

    },
    {
        timestamps: true,
    }
);

const Department = mongoose.model("Department", departmentSchema);
export default Department
