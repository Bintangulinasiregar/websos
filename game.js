// START QUIZ
export let scoreQuiz = 0;   // Variabel untuk menyimpan skor

document.addEventListener('DOMContentLoaded', function() {
const questions = [
    {
        id: 1,
        question: "Apa yang dimaksud dengan nilai sosial dalam kehidupan masyarakat?",
        answers: {
            A: "A. Aturan tertulis yang harus dipatuhi",
            B: "B. Perasaan atau keyakinan mengenai apa yang dianggap penting oleh masyarakat",
            C: "C. Sistem yang mengatur perilaku ekonomi",
            D: "D. Larangan dalam masyarakat yang berkaitan dengan agama"
        },
        correctAnswer: "B"
    },
    {
        id: 2,
        question: "Norma sosial berfungsi untuk…",
        answers: {
            A: "A. Memberikan kebebasan mutlak kepada individu",
            B: "B. Mengatur perilaku anggota masyarakat agar sesuai dengan nilai sosial",
            C: "C. Menciptakan aturan yang tidak harus ditaati",
            D: "D. Memberikan penghargaan kepada orang-orang tertentu saja"
        },
        correctAnswer: "B"
    },
    {
        id: 3,
        question: "Norma sosial yang paling tegas dalam masyarakat disebut dengan…",
        answers: {
            A: "A. Folkways",
            B: "B. Nilai sosial",
            C: "C. Hukum",
            D: "D. Mode"
        },
        correctAnswer: "C"
    },
    {
        id: 4,
        question: "Fungsi utama nilai sosial dalam masyarakat adalah…",
        answers: {
            A: "A. Menjadi pembeda antara masyarakat kota dan desa",
            B: "B. Menjadi pedoman dalam berperilaku dan membentuk identitas sosial",
            C: "C. Menciptakan stratifikasi sosial yang ketat",
            D: "D. Meningkatkan pendapatan masyarakat"
        },
        correctAnswer: "B"
    },
    {
        id: 5,
        question: "Norma sosial berfungsi untuk membentuk keteraturan dalam masyarakat. Bagaimana cara norma tersebut bekerja?",
        answers: {
            A: "A. Dengan membatasi kebebasan individu secara total",
            B: "B. Dengan memberikan sanksi jika seseorang melanggar aturan yang berlaku",
            C: "C. Dengan membebaskan individu dari aturan tertentu",
            D: "D. Dengan mengabaikan perilaku yang tidak sesuai"
        },
        correctAnswer: "B"
    },
    {
        id: 6,
        question: "Nilai-nilai sosial biasanya berperan sebagai pedoman hidup. Namun, nilai tersebut bisa berubah karena…",
        answers: {
            A: "A. Adanya aturan baru dari pemerintah",
            B: "B. Pergantian musim",
            C: "C. Pengaruh budaya asing, perkembangan zaman, dan perubahan sosial",
            D: "D. Larangan dari orang tua"
        },
        correctAnswer: "C"
    },
    {
        id: 7,
        question: "Nilai sosial merupakan konstruksi masyarakat sebagai hasil dari…",
        answers: {
            A: "A. Keputusan pemerintah",
            B: "B. Hasil interaksi antar warga masyarakat",
            C: "C. Kehendak individu yang dominan",
            D: "D. Pengaruh teknologi modern"
        },
        correctAnswer: "B"
    },
    {
        id: 8,
        question: "Mengapa nilai sosial bukan merupakan sifat bawaan individu sejak lahir?",
        answers: {
            A: "A. Karena nilai sosial dihasilkan melalui proses pendidikan formal",
            B: "B. Karena nilai sosial hanya berlaku dalam lingkungan keluarga",
            C: "C. Karena nilai sosial disebarkan melalui interaksi antara sesama warga masyarakat",
            D: "D. Karena nilai sosial ditentukan oleh pemerintah"
        },
        correctAnswer: "C"
    },
    {
        id: 9,
        question: "Nilai sosial terbentuk melalui proses sosialisasi. Hal ini menunjukkan bahwa nilai sosial…",
        answers: {
            A: "A. Dapat langsung dimiliki oleh individu sejak lahir",
            B: "B. Dipelajari dan diserap melalui proses belajar dalam masyarakat",
            C: "C. Hanya berlaku dalam lingkungan formal",
            D: "D. Tidak membutuhkan peran masyarakat"
        },
        correctAnswer: "B"
    },
    {
        id: 10,
        question: "Ciri nilai sosial yang berkaitan satu sama lain dan membentuk sistem nilai menunjukkan bahwa…",
        answers: {
            A: "A. Nilai sosial tidak memiliki hubungan dengan nilai lainnya",
            B: "B. Nilai-nilai sosial dalam masyarakat saling terhubung dan membentuk pola yang teratur",
            C: "C. Setiap nilai sosial berlaku secara terpisah tanpa pengaruh nilai lainnya",
            D: "D. Sistem nilai tidak penting dalam kehidupan masyarakat"
        },
        correctAnswer: "B"
    },
    {
        id: 11,
        question: "Nilai dominan dalam masyarakat sering kali ditentukan oleh berbagai faktor. Salah satu faktor yang paling berpengaruh adalah:",
        answers: {
            A: "A. Ketidakpastian ekonomi",
            B: "B. Banyaknya penganut nilai tersebut",
            C: "C. Pengaruh media sosial",
            D: "D. Keberagaman budaya"
        },
        correctAnswer: "B"
    },
    {
        id: 12,
        question: "Sebuah tradisi yang telah berlangsung lama dalam masyarakat biasanya mencerminkan nilai dominan. Contoh dari tradisi ini adalah:",
        answers: {
            A: "A. Penolakan terhadap perubahan",
            B: "B. Perayaan tahun baru",
            C: "C. Pelaksanaan ritual keagamaan",
            D: "D. Pemilihan umum"
        },
        correctAnswer: "C"
    },
    {
        id: 13,
        question: "Nilai yang mendarah daging sering kali berasal dari:",
        answers: {
            A: "A. Proses pendidikan formal",
            B: "B. Pengalaman traumatis",
            C: "C. Keteladanan dari lingkungan sekitar",
            D: "D. Tekanan sosial"
        },
        correctAnswer: "C"
    },
    {
        id: 14,
        question: "Norma yang mengatur perilaku masyarakat dengan sanksi yang bersifat formal dan tertulis biasanya disebut:",
        answers: {
            A: "A. Norma sosial",
            B: "B. Norma nonformal",
            C: "C. Norma hukum",
            D: "D. Norma kesopanan"
        },
        correctAnswer: "C"
    },
    {
        id: 15,
        question: "Salah satu contoh norma nonformal yang sering berlaku dalam masyarakat adalah:",
        answers: {
            A: "A. Aturan perundang-undangan",
            B: "B. Etika dalam berkomunikasi",
            C: "C. Kebijakan publik",
            D: "D. Undang-undang hak asasi manusia"
        },
        correctAnswer: "B"
    },
    {
        id: 16,
        question: "Norma yang didasarkan pada nilai kejujuran dalam lingkungan sekolah dapat diilustrasikan dengan:",
        answers: {
            A: "A. Sanksi untuk pelanggaran hukum",
            B: "B. Larangan menyontek",
            C: "C. Kebiasaan mengerjakan tugas kelompok",
            D: "D. Aturan berpakaian siswa"
        },
        correctAnswer: "B"
    },
    {
        id: 17,
        question: "Norma agama memiliki karakteristik yang berbeda dari norma lainnya. Salah satu karakteristik tersebut adalah:",
        answers: {
            A: "A. Norma agama dapat diubah sesuai waktu",
            B: "B. Norma agama bersifat mutlak dan tidak tergantung pada konteks sosial",
            C: "C. Norma agama tidak memerlukan sanksi",
            D: "D. Norma agama hanya berlaku di tempat ibadah"
        },
        correctAnswer: "B"
    },
    {
        id: 18,
        question: "Dalam masyarakat, norma kesusilaan berfungsi untuk:",
        answers: {
            A: "A. Mengatur tata cara berpakaian",
            B: "B. Menentukan hukuman bagi pelanggar hukum",
            C: "C. Mengarahkan perilaku berdasarkan hati nurani",
            D: "D. Menetapkan aturan formal di lembaga pemerintah"
        },
        correctAnswer: "C"
    },
    {
        id: 19,
        question: "Contoh dari norma kebiasaan yang sering dijumpai dalam masyarakat adalah:",
        answers: {
            A: "A. Kewajiban membayar pajak",
            B: "B. Perayaan ulang tahun",
            C: "C. Aturan di tempat kerja",
            D: "D. Kebijakan pemerintah tentang pendidikan"
        },
        correctAnswer: "B"
    },
    {
        id: 20,
        question: "Sanksi dari norma hukum bersifat mengikat dan dapat mencakup:",
        answers: {
            A: "A. Penghargaan masyarakat",
            B: "B. Pemberian izin",
            C: "C. Denda atau hukuman penjara",
            D: "D. Dukungan sosial"
        },
        correctAnswer: "C"
    }

];


let currentQuestionIndex = 0;


const quizContainer = document.getElementById('quiz-container');

// Tampilkan soal
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const answers = Object.entries(question.answers).map(([key, value]) => 
        `<input type="radio" name="answer" value="${key}"> ${value}<br>`
    ).join('');

    quizContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div>${answers}</div>
    `;
}

// Kirim jawaban
document.getElementById('submit-button').addEventListener('click', function () {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
            scoreQuiz += 10; // Menambahkan 10 poin untuk jawaban yang benar
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    } else {
        alert("Silakan pilih jawaban sebelum melanjutkan.");
    }
});

// Menampilkan hasil
function displayResult() {
    quizContainer.innerHTML = `
    <h2>Skor Anda: ${scoreQuiz} </h2>
    <button id="nextBtn">Kembali ke Pesos</button>
    `;

    document.getElementById('nextBtn').addEventListener('click', function () {
        localStorage.setItem('scoreQuiz', scoreQuiz);
        window.location.href = "pesos-kalteng.html";
        
    });
    // Variabel skor dapat diakses di sini
    console.log("Skor akhir:", scoreQuiz); // Hasil skor yang disimpan dapat dilihat di konsol
}

// Menampilkan soal pertama saat halaman dimuat
displayQuestion();


});
// END QUIZ

