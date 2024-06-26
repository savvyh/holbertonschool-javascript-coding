const fs = require('fs').promises;

function countStudents(pathFile) {
  return fs.readFile(pathFile, 'utf8')
    .then((data) => {
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      if (lines.length <= 1) {
        throw new Error('Cannot load the database');
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

      let output = `Number of students: ${numberOfStudents}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }

      return output.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
