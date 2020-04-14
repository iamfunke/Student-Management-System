const Student = require('../database/models/').Student

class Studentcontroller{
    static registerstudent(req, res){
        try{
            const{firstname, lastname, email, phone} = req.body
            let studentData = {
                firstname: firstname,
                lastname: lastname,
                email: email,
                phone: phone
            }
            Student.create(studentData).then(response=>{
                return res.status(200).json({
                    error: false,
                    message: 'Student Data Collected',
                    data: response
                })
                .catch(err=>{
                    return res.send('error')
                })
                 })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // Method to view all data
    static findAllstudent(req, res){
        try{
            Student.findAll().then(response=>{
                if(response.length > 0){
                return res.status(200).json({
                    error : false,
                    message : 'All registered student',
                    data : response
                })
            }else{
                    res.status(204).json({
                        error : true,
                        message : 'Not registered' ,
                        data : []
                    })
                }
            }).catch(err=>{
                return res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // method to view a particular student
    static fetchOnestudent(req, res){
        try{
            let id = req.params.id
            Student.findOne({
                where: {id:id}
            }).then(response=>{
                if(response){
                    return res.status(200).json({
                        error : false,
                        message : 'Student single data' ,
                        data : response
                    })
                }else{
                    return res.status(200).json({
                        error : true,
                        message : 'No single data' ,
                        data : []
                    })
                }
            }).catch(err=>{
                return res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // method to update Student
    static  updateStudent(req, res){
        try{
            let id = req.params.id
            const{firstname, lastname, email, phone} = req.body
            let updateStudent = {
                firstname:firstname,
                lastname:lastname,
                email:email,
                phone:phone
            }
            Student.update(updateStudent, {
                where : {id:id}
            }).then (response=>{
                return res.status(201).json({
                    error: false,
                    message: 'Student data updated',
                    data: response
                })
            }).catch(err=>{
                return res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
    // method to delete student
    static deleteStudent(req, res){
        try{
            let id = req.params.id
            Student.destroy({
                where:{id:id}
            }).then(response=>{
                return res.status(200).json({
                    error: false,
                    message: 'Student deleted succesfully'
                })
            }).catch(err=>{
                return res.send('error')
            })
        }
        catch(e){
            return res.sendStatus(500)
        }
    }
}
module.exports = Studentcontroller