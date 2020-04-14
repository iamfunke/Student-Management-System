const express = require('express')
const router = express.Router()
const Studentcontroller = require('../controller/Studentcontroller')

router.post ('/register/student', Studentcontroller.registerstudent)
router.get ('/fetch/student', Studentcontroller.findAllstudent)
router.get('/fetch/student/:id' , Studentcontroller.fetchOnestudent)
router.put('/update/student/:id' , Studentcontroller.updateStudent)
router.delete('/delete/student/:id' , Studentcontroller.deleteStudent)
module.exports = router