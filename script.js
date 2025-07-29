// Data nilai siswa di kelas (contoh)
const allClassScores = [92, 88, 12, 77, 57, 100, 67, 38, 97, 89];

/**
 * Menghitung nilai rata-rata dari sebuah array angka.
 * @param {number[]} scores - Array yang berisi nilai-nilai.
 * @returns {number} Nilai rata-rata.
 */
function getAverage(scores) {
  // Menggunakan reduce untuk menjumlahkan semua elemen array, lebih efisien.
  const sum = scores.reduce((total, score) => total + score, 0);
  return sum / scores.length;
}

/**
 * Mengkonversi skor numerik menjadi nilai huruf.
 * @param {number} score - Skor numerik siswa.
 * @returns {string} Nilai huruf (misal: "A", "B", "F").
 */
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/**
 * Memeriksa apakah seorang siswa lulus berdasarkan skor.
 * @param {number} score - Skor numerik siswa.
 * @returns {boolean} True jika lulus, false jika tidak.
 */
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

/**
 * Membuat pesan hasil untuk siswa berdasarkan skor mereka dan rata-rata kelas.
 * @param {number[]} totalScores - Array semua nilai di kelas.
 * @param {number} studentScore - Skor siswa yang bersangkutan.
 * @returns {string} Pesan hasil yang lengkap.
 */
function studentMsg(totalScores, studentScore) {
  const classAverage = getAverage(totalScores).toFixed(2); // Dibulatkan 2 desimal
  const studentGrade = getGrade(studentScore);

  let message = `Rata-rata kelas: ${classAverage}. Nilai kamu: ${studentGrade}. `;

  if (hasPassingGrade(studentScore)) {
    message += "Selamat, kamu lulus!";
  } else {
    message += "Tetap semangat, coba lagi nanti.";
  }

  return message;
}

// Menjalankan kode setelah halaman HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  const gradeForm = document.getElementById('gradeForm');
  const studentScoreInput = document.getElementById('studentScore');
  const resultDiv = document.getElementById('result');

  gradeForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah form mengirim data & me-refresh halaman

    const studentScore = parseInt(studentScoreInput.value, 10);

    // Validasi input
    if (isNaN(studentScore) || studentScore < 0 || studentScore > 100) {
        resultDiv.textContent = 'Masukkan skor yang valid antara 0 dan 100.';
        resultDiv.style.color = '#ff6b6b';
        return;
    }
    
    // Menghasilkan dan menampilkan pesan
    const message = studentMsg(allClassScores, studentScore);
    resultDiv.textContent = message;
    resultDiv.style.color = '#e0e0e0';
  });
});
