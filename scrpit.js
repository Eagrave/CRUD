Chart.defaults.color = '#e9eff1';
Chart.defaults.borderColor = '#eebe2d';
const students = JSON.parse(localStorage.getItem('students')) || [];
const genderCounts = students.reduce((acc, student) => {
    acc[student.gender] = (acc[student.gender] || 0) + 1;
    return acc;
}, {});

const courseCounts = students.reduce((acc, student) => {
    acc[student.course] = (acc[student.course] || 0) + 1;
    return acc;
}, {});
const genderLabels = Object.keys(genderCounts);
const genderData = Object.values(genderCounts);
const courseLabels = Object.keys(courseCounts);
const courseData = Object.values(courseCounts);

const ctxGender = document.getElementById('genderChart').getContext('2d');
const genderChart = new Chart(ctxGender, {
    type: 'pie',
    data: {
        labels: genderLabels,
        datasets: [{
            label: 'Gender Distribution',
            data: genderData,
            backgroundColor: ['#ff6384', '#36a2eb'], 
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: { size: '20rem' }
                }
            },
            title: {
                display: true,
                text: 'Gender',
                font: {
                    size: '30rem',
                    weight: 'bold',
                }
            }
        }
    }
});

const ctxCourse = document.getElementById('courseChart').getContext('2d');
const courseChart = new Chart(ctxCourse, {
    type: 'doughnut',
    data: {
        labels: courseLabels,
        datasets: [{
            label: 'Course Distribution',
            data: courseData,
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56'], 
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: { size: '20rem' }
                }
            },
            title: {
                display: true,
                text: 'Course',
                font: {
                    size: '30rem',
                    weight: 'bold',
                }
            }
        }
    }
});

const statisticsDiv = document.getElementById('statisticsDiv');

genderLabels.forEach((label, index) => {
    statisticsDiv.innerHTML += `<div class="flex border border-2 border-[#eebe2d] min-w-[15vw] px-4 py-2"><p class="text-[1.4rem]">Total ${label} students: ${genderData[index]}<p/></div>`;
});

courseLabels.forEach((label, index) => {
    statisticsDiv.innerHTML += `<div class="flex border border-3 border-[#eebe2d] min-w-[15vw] px-4 py-2"><p class="text-[1.3rem]">Total ${label} students: ${courseData[index]}</p></div>`;
});

console.log(genderData);
