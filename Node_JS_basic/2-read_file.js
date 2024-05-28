const fs = require('fs');

function countStudents(pathFile) {
  try {
    const data = fs.readFileSync(pathFile, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Supprimer les lignes vides

    if (lines.length <= 1) {
      throw new Error("Cannot load the database");
    }

    const students = lines.slice(1);
    const numberOfStudents = students.length;
    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    console.log(`Number of students: ${numberOfStudents}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;