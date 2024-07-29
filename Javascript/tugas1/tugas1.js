let userScore = prompt("Masukkan angka antara 0-100:");
let score = parseInt(userScore);

if (!isNaN(score) && score >= 0 && score <= 100) {
    let grade;
    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score < 90) {
        grade = 'B';
    } else if (score >= 70 && score < 80) {
        grade = 'C';
    } else if (score >= 60 && score < 70) {
        grade = 'D';
    } else if (score >= 0 && score < 60) {
        grade = 'E';
    }
    alert("Nilai anda: " + grade);
} else {
    alert("Masukkan angka yang valid antara 0-100.");
}