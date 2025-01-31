/**5.Realiza un programa que reciba el siguiente objeto, e imprima otro objeto con los siguientes datos: */
//Function to get student's name 
function getStudentName(studentInfo){
    const name = studentInfo.name;
    return name;
}

//Function to get student's  average grade 
function getAverageGrade(studentInfo){
    const studentGrade = studentInfo.grades;
    let averageGrade = 0;
    let totalGrade = 0;
    for(let i=0;i < studentGrade.length ;i++){
        totalGrade+=studentGrade[i].grade;
    }
    averageGrade = totalGrade/studentGrade.length;
    return averageGrade;
}

//Function to get student's  highest grade 
function getHighestGrade(studentInfo){
    const studentGrade = studentInfo.grades;
    let highestGrade = studentGrade[0];
    for(let i=0; i < studentGrade.length; i++){
        if(highestGrade.grade < studentGrade[i].grade){
            highestGrade = studentGrade[i];
        }
    }
    return highestGrade.name;
}

//Function to get student's  lowest grade 
function getLowerGrade(studentInfo){
    const studentGrade = studentInfo.grades;
    let lowerGrade = studentGrade[0];

    for(let i=0; i<studentGrade.length;i++){
        if(studentGrade[i].grade < lowerGrade.grade){
            lowerGrade = studentGrade[i];
        }
    }
    return lowerGrade.name;
}

// Inputs
const student = {
	name: "John Doe",
	grades: [
		{name: "math",grade: 80},
		{name: "science",grade: 100},
		{name: "history",grade: 60},
		{name: "PE",grade: 90},
		{name: "music",grade: 98}
	]
};


const studentName = getStudentName(student);
const highestGrade = getHighestGrade(student);
const lowerGrade = getLowerGrade(student);
const averageGrade = getAverageGrade(student);

const result = {
	name: studentName,
	gradeAvg: averageGrade ,
    highestGrade:highestGrade ,
    lowestGrade: lowerGrade
};

console.log(result);