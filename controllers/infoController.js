const {Student} = require("../models/students_info")
const {rankingPiAnswers} = require("../utils/piCalculate")
const {convertISO} = require("../utils/getAttemptTime")
const {TestResult} = require("../models/result")

const renderInfo = async (req,res) => {
    const {userId} = req.params;
    const {role} = req.user;
    
    
    
    let usersInfo = await Student.fetchEssentials();
    
    
    
    let usersInfoUpdated = await rankingPiAnswers(usersInfo);
    usersInfoUpdated.forEach(data => {
        data.created_at = convertISO(data.created_at)
    })
    
    
    const currentUserInfo = usersInfoUpdated.filter(user => parseInt(user.student_id) == userId)
    
    
    currentUserInfo.forEach(item => {
        for (let key in item) {
          if (item[key] === null || item[key] === 'NaN' || (Array.isArray(item[key]) && item[key].length === 0)) {
            item[key] = 'None';
          }
        }
      });
    
      if (role === "student"){
        let userObject = await TestResult.findByStudentId(req.user.user_id)
        
        if (!userObject){
            status = "not done";
        }else{
            status = userObject.status;
        }   
    }
    
  
    
    
    
    
    res.render("info", {userRole: role, user: req.user, student: currentUserInfo})
}

module.exports = {renderInfo}