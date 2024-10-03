const formi = document.getElementById('formi');
let id = 0;
formi.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const bday = document.getElementById("bday").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : null;
    const studentData = {
        id: ++id,
        name: name,
        course: course,
        bday: bday,
        email: email,
        address: address,
        contact: contact,
        gender: gender
    };
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(studentData);
    localStorage.setItem('students', JSON.stringify(students));
    alert("Enrolled Successfully");
});