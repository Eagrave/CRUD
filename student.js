const displayStudents = () => {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };
    const tbody = document.getElementById('studentTableBody');
    tbody.innerHTML = '';

    students.forEach((student) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="px-6"><input type="text" value="${student.name}" class="edit-input" /></td>
            <td class="px-6">
                <select class="text p-1 text-black w-full my-[2vh] min-w-[12vw]" required>
                    <option value="">Select Course</option>
                    <option value="Mechanical Engineering" ${student.course === 'Mechanical Engineering' ? 'selected' : ''}>Mechanical Engineering</option>
                    <option value="Chemical Engineering" ${student.course === 'Chemical Engineering' ? 'selected' : ''}>Chemical Engineering</option>
                    <option value="Computer Engineering" ${student.course === 'Computer Engineering' ? 'selected' : ''}>Computer Engineering</option>
                    <option value="Computer Science" ${student.course === 'Computer Science' ? 'selected' : ''}>Computer Science</option>
                </select>
            </td>
            <td class="px-6">
                <input type="date" value="${student.bday}" class="bday-input" />
            </td>
            <td class="px-6"><input type="email" value="${student.email}" class="edit-input" /></td>
            <td class="px-6"><input type="text" value="${student.address}" class="edit-input" /></td>
            <td class="px-6"><input type="text" value="${student.contact}" class="edit-input" /></td>
            <td class="px-6">
                <select class="text p-1 text-black w-full my-[2vh] min-w-[6vw]" required>
                    <option value="Male" ${student.gender === 'Male' ? 'selected' : ''}>Male</option>
                    <option value="Female" ${student.gender === 'Female' ? 'selected' : ''}>Female</option>
                </select>
            </td>
            <td class="px-6">
                <div class="flex gap-3">
                    <button type="button" class="bg-green-500 save-btn p-2" onclick="editRow(${student.id}, this)"><i class="fa-regular fa-floppy-disk"></i></button>
                    <button type="button" class="bg-red-500 delete-row p-2" onclick="deleteRow(${student.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
};

const deleteRow = (id) => {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    
    const newStudents = students.filter(student => student.id !== id);
    
    if (newStudents.length < students.length) {
        const deletedStudent = students.find(student => student.id === id);
        localStorage.setItem('students', JSON.stringify(newStudents));
        alert(`${deletedStudent.name} has been removed.`);
    } else {
        alert('Student not found.');
    }
    
    displayStudents();    
};

const editRow = (id, button) => {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    const row = button.closest('tr');
    const name = row.querySelector('input[type="text"]').value.trim();
    const course = row.querySelector('select').value;
    const email = row.querySelectorAll('input[type="email"]')[0].value.trim();
    const address = row.querySelectorAll('input[type="text"]')[1].value.trim();
    const contact = row.querySelectorAll('input[type="text"]')[2].value.trim();
    const gender = row.querySelectorAll('select')[1].value;
    const bday = row.querySelector('.bday-input').value; 

   
    if (!name || !course || !email || !address || !contact || !gender || !bday) {
        alert('Please fill in all fields before saving.');
        return;
    }

    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { 
            id, 
            name, 
            course, 
            bday, 
            email, 
            address, 
            contact, 
            gender 
        };
        localStorage.setItem('students', JSON.stringify(students));
        alert(`Student ${name} has been updated.`);
        displayStudents();
    }
};

document.addEventListener('DOMContentLoaded', displayStudents);
