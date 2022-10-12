import Student from "../../models/student";

export const findAll = async (req, res) => {
 try {
   const students = await Student.find();

   res.json({
     ok: true,
     data: students,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};

export const create = async (req, res) => {
 try {
   const { body } = req;
   const user = new Student(body);
   user.save();

   res.json({
     ok: true,
     data: user,
   });
 } catch (error) {
   res.json({
     ok: false,
     data: error.message,
   });
 }
};

//UPDATE
export const updateStudent = async(req, res) =>{
    try{
        const { id: _id } = req.params
        const student = req.body;
        const updatedStudent = await Student.findByIdAndUpdate
        (_id, student, { new: true });
  
        return res.json(updatedStudent)
    }catch (err) {
        console.log(err);
        return res.json({
            info: "No se pudo actualizar",
            error: err.message
        })
      }
  }

export const deleteStudent = async(req, res) =>{
    try{
        const { id } = req.params;
        await Student.findByIdAndRemove(id);
        return res.json({
            info:"Estudiante eliminado"
        })
    }catch (err) {
        console.log(err.message);
        return res.json({
            info: "Estudiante ya ha sido eliminado",
        })
      }
  }