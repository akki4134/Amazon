import express from "express"
import expressAsyncHandler from "express-async-handler"

import Department from "../Models/departmentModel.js"

const departmentRouter = express.Router()

departmentRouter.post(
    '/add',
    expressAsyncHandler(async (req, res) => {

        const Deptname = await Department.findOne({ deptname: req.body.deptname })
        if (Deptname) return res.status(400).send('Department Name Already Exist')

            const department = new Department({
                deptname: req.body.deptname,
                deptimage: req.body.deptimage,
                deptcategories: req.body.deptcategories,
                deptdescription: req.body.deptdescription
            });

        try {
            const createdDept = await department.save();
            res.status(200).send(createdDept)

        } catch (error) {
            res.status(400).send(error)
        }
    })
)

departmentRouter.put(
    '/update/:id',
    expressAsyncHandler(async (req, res) => {

        try {
            const deparments = await Department.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false })
            res.status(200).send(deparments)

        } catch (error) {
            res.status(400).send(error)
        }

    })

)

departmentRouter.get(
    '/all',
    expressAsyncHandler(async (req, res) => {

        try {
            const deparments = await Department.find()
            res.status(200).send(deparments)
        } catch (error) {
            res.status(400).send(error)
        }

    })
)

departmentRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {

        try {
            const deparments = await Department.findById(req.params.id)
            res.status(200).send(deparments)
        } catch (error) {
            res.status(400).send(error)
        }

    })
)


departmentRouter.delete(
    '/remove/:id',
    expressAsyncHandler(async (req, res) => {

        try {
            const deparments = await Department.findByIdAndRemove(req.params.id, { useFindAndModify: false })
            res.status(200).send(deparments)
        } catch (error) {
            res.status(400).send(error)
        }

    })
)

export default departmentRouter;