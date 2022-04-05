import React from "react"

function FitnessInstitute() {
  return (
    <div className="fitnessInstitute">
      <div className="fitnessInstitute_top_section">
        <h2>Silver Gym Fitness Institute</h2>
        <h4>S.G.F.I</h4>
      </div>
      <div className="courses">
        <h3>Courses Offered</h3> 
        <div className="courses_flex_container">
          <div className="courses_list_1">
            <li>SGFI Weight Management Course</li>
            <li>SGFI Advanced Personal Training Course</li>
            <li>SGFI Fast Track Course</li>
            <li>SGFI Short Course - Calorie Burner</li>
            <li>SGFI Bodybuilding Course</li>
            <li>SGFI Paced Workout Course</li>
          </div>
          <div className="courses_list_2">
            <li>SGFI Female Fitness</li>
            <li>SGFI Online Fast Track Course</li>
            <li>SGFI Senior Fitness</li>
            <li>SGFI Functoinal Training</li>
          </div>
         </div> 
      </div>
    </div>
  )
}

export default FitnessInstitute;