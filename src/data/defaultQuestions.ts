import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran PENDIDIKAN PANCASILA
 * Kelas 5 SD - Kurikulum Merdeka
 * Lingkup Materi:
 * 1. Menerapkan dan Mempraktikkan Norma dalam Kehidupan (Bentuk Norma, Hak & Kewajiban)
 * 2. Contoh Pelanggaran Norma beserta Sanksi dan Akibatnya
 * 3. Pengertian Musyawarah dalam Kehidupan Sehari-hari
 * 4. Arti Penting dan Praktik Musyawarah dalam Kehidupan Keluarga & Sekolah
 *
 * Komposisi Soal:
 * - 40 Butir Pilihan Ganda (PG) [Nomor 1 - 40] (Bobot: 2 poin/butir = 80 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 41 - 45] (Bobot: 6 poin/butir = 30 poin)
 * Total: 45 Butir Soal (Skor Maksimal: 110 poin -> Nilai Akhir Skala 100)
 */

const TP1 =
  'Menyajikan hasil identifikasi bentuk-bentuk norma, hak, dan kewajiban dalam kedudukannya sebagai anggota keluarga dan warga sekolah';
const TP2 =
  'Mempraktikkan norma, hak, dan kewajiban dalam kedudukannya sebagai anggota keluarga dan warga sekolah';
const TP3 =
  'Mempraktikkan musyawarah dalam kehidupan keluarga dan sekolah';

export const INITIAL_QUESTIONS: Question[] = [
  // ============================================================================
  // BAGIAN I: 40 SOAL PILIHAN GANDA (PG)
  // ============================================================================

  // --- TP 1: IDENTIFIKASI BENTUK NORMA, HAK, DAN KEWAJIBAN (SOAL 1 - 13) ---
  {
    id: 1,
    type: 'pg',
    element: TP1,
    topic: 'Pengertian dan Macam-Macam Norma',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi pengertian norma beserta empat macam norma yang berlaku di masyarakat.',
    image: `<svg viewBox="0 0 440 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="135" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="220" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">4 MACAM NORMA DALAM KEHIDUPAN</text>
      <g transform="translate(14, 34)">
        <rect width="96" height="84" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="48" y="26" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">AGAMA</text>
        <text x="48" y="45" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Bersumber dari</text>
        <text x="48" y="57" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">wahyu Tuhan</text>
        <text x="48" y="72" font-family="sans-serif" font-size="8" font-weight="bold" fill="#2563eb" text-anchor="middle">Sanksi: Dosa</text>
      </g>
      <g transform="translate(119, 34)">
        <rect width="96" height="84" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.8"/>
        <text x="48" y="26" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">KESUSILAAN</text>
        <text x="48" y="45" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Bersumber dari</text>
        <text x="48" y="57" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">hati nurani</text>
        <text x="48" y="72" font-family="sans-serif" font-size="8" font-weight="bold" fill="#059669" text-anchor="middle">Sanksi: Menyesal</text>
      </g>
      <g transform="translate(224, 34)">
        <rect width="96" height="84" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.8"/>
        <text x="48" y="26" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b45309" text-anchor="middle">KESOPANAN</text>
        <text x="48" y="45" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Bersumber dari</text>
        <text x="48" y="57" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">pergaulan adat</text>
        <text x="48" y="72" font-family="sans-serif" font-size="8" font-weight="bold" fill="#d97706" text-anchor="middle">Sanksi: Dicela</text>
      </g>
      <g transform="translate(329, 34)">
        <rect width="96" height="84" rx="8" fill="#ffffff" stroke="#ef4444" stroke-width="1.8"/>
        <text x="48" y="26" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">HUKUM</text>
        <text x="48" y="45" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Dibuat lembaga</text>
        <text x="48" y="57" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">resmi negara</text>
        <text x="48" y="72" font-family="sans-serif" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">Sanksi: Tegas</text>
      </g>
    </svg>`,
    text: 'Perhatikan bagan empat macam norma di atas! Aturan atau kaidah yang berlaku dalam kehidupan bermasyarakat untuk menciptakan ketertiban, keamanan, dan kedamaian disebut ...',
    options: [
      { id: 'A', text: 'Norma' },
      { id: 'B', text: 'Hobi' },
      { id: 'C', text: 'Cita-cita' },
      { id: 'D', text: 'Kebiasaan bebas' },
    ],
    correctAnswer: 'A',
    explanation: 'Norma adalah aturan atau pedoman tingkah laku yang mengikat warga masyarakat agar kehidupan berjalan tertib, aman, dan harmonis.'
  },
  {
    id: 2,
    type: 'pg',
    element: TP1,
    topic: 'Bentuk Norma Kesopanan',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi sumber dan contoh norma kesopanan dalam kehidupan sehari-hari.',
    text: 'Norma yang bersumber dari tata pergaulan, adat istiadat, dan kebiasaan baik di masyarakat seperti mengucapkan salam ketika bertamu atau mencium tangan orang tua adalah ...',
    options: [
      { id: 'A', text: 'Norma kesopanan' },
      { id: 'B', text: 'Norma hukum' },
      { id: 'C', text: 'Norma agama' },
      { id: 'D', text: 'Norma lalu lintas' },
    ],
    correctAnswer: 'A',
    explanation: 'Norma kesopanan bersumber dari tata pergaulan masyarakat tentang sikap pantas dan tidak pantas, misalnya bertutur kata lembut, memberi salam, dan menghormati orang yang lebih tua.'
  },
  {
    id: 3,
    type: 'pg',
    element: TP1,
    topic: 'Norma Kesusilaan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis peristiwa sehari-hari yang mencerminkan berlakunya norma kesusilaan.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <g transform="translate(20, 20)">
        <rect width="170" height="84" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="2"/>
        <circle cx="38" cy="42" r="20" fill="#dcfce7"/>
        <text x="38" y="47" font-family="sans-serif" font-size="18" text-anchor="middle">♥</text>
        <text x="112" y="34" font-family="sans-serif" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">HATI NURANI</text>
        <text x="112" y="50" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Jujur, tidak bohong,</text>
        <text x="112" y="63" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">mengakui kesalahan</text>
      </g>
      <text x="210" y="68" font-family="sans-serif" font-size="18" font-weight="bold" fill="#16a34a" text-anchor="middle">→</text>
      <g transform="translate(230, 20)">
        <rect width="170" height="84" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
        <text x="85" y="32" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b45309" text-anchor="middle">JIKA DILANGGAR</text>
        <text x="85" y="50" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Hati merasa gelisah,</text>
        <text x="85" y="64" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">bersalah, dan menyesal</text>
      </g>
    </svg>`,
    text: 'Perhatikan ilustrasi di atas! Made tidak sengaja memecahkan vas bunga milik ibu, lalu ia merasa gelisah sebelum akhirnya jujur mengakui kesalahannya kepada ibu. Sikap jujur yang berasal dari bisikan hati nurani tersebut sesuai dengan ...',
    options: [
      { id: 'A', text: 'Norma kesusilaan' },
      { id: 'B', text: 'Norma hukum negara' },
      { id: 'C', text: 'Norma tata tertib jalan raya' },
      { id: 'D', text: 'Norma olahraga' },
    ],
    correctAnswer: 'A',
    explanation: 'Norma kesusilaan bersumber dari hati nurani manusia untuk membedakan perbuatan baik dan buruk, seperti berkata jujur dan berani mengakui kesalahan.'
  },
  {
    id: 4,
    type: 'pg',
    element: TP1,
    topic: 'Norma Agama',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menunjukkan contoh penerapan norma agama di lingkungan keluarga.',
    text: 'Berikut ini yang merupakan contoh penerapan norma agama di lingkungan keluarga adalah ...',
    options: [
      { id: 'A', text: 'Berdoa bersama sebelum makan dan melaksanakan ibadah sesuai keyakinan' },
      { id: 'B', text: 'Memakai helm saat dibonceng ayah mengendarai sepeda motor' },
      { id: 'C', text: 'Mengetuk pintu sebelum masuk ke ruang guru di sekolah' },
      { id: 'D', text: 'Membayar pajak kendaraan bermotor tepat waktu di kantor samsat' },
    ],
    correctAnswer: 'A',
    explanation: 'Berdoa sebelum makan dan beribadah sesuai ajaran agama merupakan pelaksanaan perintah Tuhan Yang Maha Esa yang termasuk dalam norma agama.'
  },
  {
    id: 5,
    type: 'pg',
    element: TP1,
    topic: 'Norma Hukum dan Sifatnya',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi ciri khas norma hukum dibandingkan norma lainnya.',
    text: 'Perbedaan utama norma hukum dibandingkan dengan norma kesopanan, kesusilaan, dan agama adalah norma hukum memiliki sanksi yang bersifat ...',
    options: [
      { id: 'A', text: 'Tegas, nyata, dan memaksa melalui aparat penegak hukum seperti denda atau penjara' },
      { id: 'B', text: 'Hanya berupa rasa malu dan penyesalan di dalam hati' },
      { id: 'C', text: 'Berlaku hanya bagi anak-anak di bawah usia sepuluh tahun' },
      { id: 'D', text: 'Tidak tertulis dan boleh dilanggar jika sedang terburu-buru' },
    ],
    correctAnswer: 'A',
    explanation: 'Norma hukum dibuat oleh lembaga negara yang berwenang dan memiliki sanksi tegas serta memaksa secara nyata (seperti tilang, denda, atau kurungan).'
  },
  {
    id: 6,
    type: 'pg',
    element: TP1,
    topic: 'Pengertian Hak dan Kewajiban',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan pengertian hak dan kewajiban secara tepat.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(20, 18)">
        <rect width="175" height="84" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="87" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">HAK</text>
        <text x="87" y="48" font-family="sans-serif" font-size="9.5" fill="#1e3a8a" text-anchor="middle">Sesuatu yang mutlak</text>
        <text x="87" y="62" font-family="sans-serif" font-size="9.5" fill="#1e3a8a" text-anchor="middle">diterima / dimiliki siswa</text>
      </g>
      <text x="210" y="65" font-family="sans-serif" font-size="16" font-weight="bold" fill="#475569" text-anchor="middle">⇄</text>
      <g transform="translate(225, 18)">
        <rect width="175" height="84" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="87" y="28" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">KEWAJIBAN</text>
        <text x="87" y="48" font-family="sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">Sesuatu yang harus</text>
        <text x="87" y="62" font-family="sans-serif" font-size="9.5" fill="#78350f" text-anchor="middle">dilaksanakan penuh tanggung jawab</text>
      </g>
    </svg>`,
    text: 'Berdasarkan bagan di atas, pelaksanaan hak dan kewajiban dalam kehidupan sehari-hari harus dilakukan secara seimbang. Urutan yang paling bijaksana dalam menerapkannya adalah ...',
    options: [
      { id: 'A', text: 'Mendahulukan melaksanakan kewajiban dengan penuh tanggung jawab sebelum menuntut hak' },
      { id: 'B', text: 'Menuntut seluruh hak terlebih dahulu baru mau memikirkan kewajiban' },
      { id: 'C', text: 'Hanya melaksanakan kewajiban jika mendapatkan hadiah uang dari orang tua' },
      { id: 'D', text: 'Mengambil hak orang lain agar hak pribadi menjadi lebih banyak' },
    ],
    correctAnswer: 'A',
    explanation: 'Kewajiban dan hak berjalan beriringan. Kita hendaknya mendahulukan pelaksanaan kewajiban dengan tanggung jawab baru kemudian menerima hak kita secara adil.'
  },
  {
    id: 7,
    type: 'pg',
    element: TP1,
    topic: 'Hak Anak sebagai Anggota Keluarga',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bentuk hak anak dalam kedudukannya sebagai anggota keluarga.',
    text: 'Sebagai anggota keluarga di rumah, seorang anak memiliki hak yang harus dipenuhi oleh orang tua. Berikut ini yang termasuk hak anak di rumah adalah ...',
    options: [
      { id: 'A', text: 'Mendapatkan kasih sayang, perlindungan, makanan bergizi, dan waktu bermain yang cukup' },
      { id: 'B', text: 'Menyuruh orang tua mengerjakan seluruh tugas rumah sekolah setiap malam' },
      { id: 'C', text: 'Membantah nasihat ibu apabila sedang asyik bermain gawai' },
      { id: 'D', text: 'Membersihkan tempat tidur sendiri setelah bangun pagi' },
    ],
    correctAnswer: 'A',
    explanation: 'Kasih sayang, perlindungan, makanan sehat, tempat tinggal, serta waktu belajar dan bermain merupakan hak dasar anak dalam keluarga. Membersihkan tempat tidur adalah kewajiban.'
  },
  {
    id: 8,
    type: 'pg',
    element: TP1,
    topic: 'Kewajiban Anak di Keluarga',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi kewajiban anak sebagai anggota keluarga di rumah.',
    text: 'Membantu orang tua menyapu halaman rumah, merapikan mainan setelah dipakai, serta menghormati ayah dan ibu termasuk contoh ...',
    options: [
      { id: 'A', text: 'Kewajiban anak sebagai anggota keluarga' },
      { id: 'B', text: 'Hak mutlak anak di rumah' },
      { id: 'C', text: 'Pelanggaran norma kesopanan' },
      { id: 'D', text: 'Tugas khusus kepala desa' },
    ],
    correctAnswer: 'A',
    explanation: 'Membantu pekerjaan ringan di rumah, menjaga kerapian kamar, dan menghormati orang tua adalah bentuk kewajiban anak sebagai anggota keluarga.'
  },
  {
    id: 9,
    type: 'pg',
    element: TP1,
    topic: 'Hak dan Kewajiban Warga Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi kewajiban siswa sebagai warga sekolah berdasarkan gambar piket kelas.',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="130" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="middle">JADWAL PIKET KEBERSIHAN KELAS 5</text>
      <g transform="translate(24, 34)">
        <rect width="115" height="76" rx="8" fill="#ffffff" stroke="#f59e0b" stroke-width="1.8"/>
        <text x="57" y="28" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b45309" text-anchor="middle">Menyapu Lantai</text>
        <text x="57" y="46" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Datang 15 menit</text>
        <text x="57" y="59" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">sebelum bel masuk</text>
      </g>
      <g transform="translate(152, 34)">
        <rect width="115" height="76" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.8"/>
        <text x="57" y="28" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">Hapus Papan Tulis</text>
        <text x="57" y="46" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Membersihkan papan</text>
        <text x="57" y="59" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">usai jam pelajaran</text>
      </g>
      <g transform="translate(280, 34)">
        <rect width="115" height="76" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="57" y="28" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Buang Sampah</text>
        <text x="57" y="46" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Memilah sampah</text>
        <text x="57" y="59" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">organik &amp; anorganik</text>
      </g>
    </svg>`,
    text: 'Perhatikan gambar jadwal piket kelas 5 di atas! Melaksanakan piket kebersihan sesuai jadwal yang disepakati merupakan ... bagi setiap siswa, sehingga seluruh siswa memperoleh ... berupa ruang kelas yang bersih dan nyaman untuk belajar.',
    options: [
      { id: 'A', text: 'kewajiban; hak' },
      { id: 'B', text: 'hak; kewajiban' },
      { id: 'C', text: 'hukuman; hadiah' },
      { id: 'D', text: 'pilihan bebas; denda' },
    ],
    correctAnswer: 'A',
    explanation: 'Melaksanakan piket kebersihan kelas adalah kewajiban siswa sebagai warga sekolah, sedangkan belajar di kelas yang bersih, rapi, dan nyaman adalah hak siswa.'
  },
  {
    id: 10,
    type: 'pg',
    element: TP1,
    topic: 'Hak Siswa di Sekolah',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bentuk-bentuk hak warga sekolah.',
    text: 'Berikut ini yang termasuk hak seorang siswa sebagai warga sekolah adalah ...',
    options: [
      { id: 'A', text: 'Meminjam buku bacaan di perpustakaan sekolah dan mendapat bimbingan dari guru' },
      { id: 'B', text: 'Mengenakan seragam sekolah lengkap sesuai hari yang ditentukan' },
      { id: 'C', text: 'Mengikuti upacara bendera hari Senin dengan tertib dan khidmat' },
      { id: 'D', text: 'Menjaga ketenangan selama kegiatan pembelajaran berlangsung' },
    ],
    correctAnswer: 'A',
    explanation: 'Memanfaatkan fasilitas perpustakaan dan memperoleh pengajaran/bimbingan guru adalah hak siswa. Memakai seragam, upacara, dan menjaga ketenangan adalah kewajiban siswa.'
  },
  {
    id: 11,
    type: 'pg',
    element: TP1,
    topic: 'Identifikasi Bentuk Norma di Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengelompokkan aturan tata tertib tertulis di sekolah ke dalam bentuk norma yang tepat.',
    text: 'Tata tertib tertulis di SD Negeri 3 Loloan Timur yang mengatur jam masuk sekolah pukul 07.30 WITA, kewajiban memakai seragam rapi, dan larangan membawa benda tajam merupakan contoh penerapan ... di lingkungan sekolah.',
    options: [
      { id: 'A', text: 'Aturan tertulis / norma hukum tingkat satuan pendidikan' },
      { id: 'B', text: 'Norma kesusilaan yang tidak memiliki aturan tertulis' },
      { id: 'C', text: 'Adat istiadat makan bersama di rumah' },
      { id: 'D', text: 'Kebebasan individu tanpa batas' },
    ],
    correctAnswer: 'A',
    explanation: 'Tata tertib sekolah dibuat secara resmi oleh lembaga sekolah (tertulis dan mengikat seluruh warga sekolah), sehingga berfungsi layaknya norma hukum di lingkungan sekolah.'
  },
  {
    id: 12,
    type: 'pg',
    element: TP1,
    topic: 'Identifikasi Norma Lalu Lintas (Norma Hukum)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bentuk norma dan sanksi pada aturan lalu lintas melalui ilustrasi gambar.',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="130" rx="12" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/>
      <g transform="translate(30, 18)">
        <rect width="48" height="94" rx="10" fill="#1e293b"/>
        <circle cx="24" cy="24" r="10" fill="#ef4444"/>
        <circle cx="24" cy="47" r="10" fill="#64748b"/>
        <circle cx="24" cy="70" r="10" fill="#64748b"/>
      </g>
      <g transform="translate(102, 24)">
        <rect width="290" height="82" rx="10" fill="#ffffff" stroke="#ef4444" stroke-width="1.8"/>
        <text x="145" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">ATURAN BERLALU LINTAS DI JALAN RAYA</text>
        <text x="145" y="44" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Berhenti di belakang garis saat lampu merah menyala</text>
        <text x="145" y="59" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Wajib mengenakan helm SNI bagi pengendara motor</text>
        <text x="145" y="74" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">Pelanggaran dikenai sanksi tilang resmi oleh Polisi</text>
      </g>
    </svg>`,
    text: 'Berdasarkan gambar di atas, aturan berhenti saat lampu lalu lintas berwarna merah dan kewajiban memakai helm SNI merupakan bentuk penerapan ...',
    options: [
      { id: 'A', text: 'Norma hukum' },
      { id: 'B', text: 'Norma kesopanan' },
      { id: 'C', text: 'Norma kesusilaan' },
      { id: 'D', text: 'Norma agama' },
    ],
    correctAnswer: 'A',
    explanation: 'Undang-undang lalu lintas dibuat oleh negara dan pelanggarnya dikenai sanksi tilang atau denda secara resmi oleh kepolisian. Ini merupakan ciri khas norma hukum.'
  },
  {
    id: 13,
    type: 'pg',
    element: TP1,
    topic: 'Hubungan Norma, Hak, dan Kewajiban',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis keterkaitan antara pelaksanaan norma dengan terpenuhinya hak orang lain.',
    text: 'Ketika seluruh siswa mematuhi norma kesopanan untuk tidak berbicara keras di dalam perpustakaan sekolah, maka akibat baik yang langsung dirasakan oleh warga sekolah adalah ...',
    options: [
      { id: 'A', text: 'Hak setiap siswa untuk membaca buku dengan tenang dan berkonsentrasi dapat terpenuhi dengan baik' },
      { id: 'B', text: 'Jumlah buku di perpustakaan menjadi berkurang karena tidak ada yang meminjam' },
      { id: 'C', text: 'Petugas perpustakaan tidak perlu lagi merapikan rak buku' },
      { id: 'D', text: 'Siswa kehilangan hak bertanya kepada guru di dalam kelas' },
    ],
    correctAnswer: 'A',
    explanation: 'Kepatuhan terhadap norma dan kewajiban (menjaga ketenangan) secara langsung melindungi dan memenuhi hak warga sekolah lain (membaca dengan nyaman dan tenang).'
  },

  // --- TP 2: MEMPRAKTIKKAN NORMA, HAK, KEWAJIBAN & CONTOH PELANGGARAN NORMA (SOAL 14 - 27) ---
  {
    id: 14,
    type: 'pg',
    element: TP2,
    topic: 'Praktik Norma di Keluarga',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih tindakan yang mencerminkan praktik norma kesopanan di lingkungan keluarga.',
    text: 'Ayu hendak berangkat ke sekolah pada pagi hari. Tindakan yang mencerminkan praktik norma kesopanan sebagai anak di rumah sebelum berangkat adalah ...',
    options: [
      { id: 'A', text: 'Berpamitan dengan sopan, mencium tangan orang tua, dan mengucapkan salam' },
      { id: 'B', text: 'Langsung berlari keluar rumah tanpa memberi tahu ibu agar tidak terlambat' },
      { id: 'C', text: 'Meminta uang jajan dengan nada membentak karena terburu-buru' },
      { id: 'D', text: 'Menyuruh adik menyiapkan sepatu dan tas sekolahnya sendiri' },
    ],
    correctAnswer: 'A',
    explanation: 'Berpamitan, bersalaman/mencium tangan orang tua, dan mengucapkan salam adalah wujud nyata mempraktikkan norma kesopanan dan rasa hormat dalam keluarga.'
  },
  {
    id: 15,
    type: 'pg',
    element: TP2,
    topic: 'Contoh Pelanggaran Norma Kesopanan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menilai sikap yang tepat saat melihat contoh pelanggaran norma kesopanan di tempat umum/kantin.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#fff7ed" stroke="#fed7aa" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#9a3412" text-anchor="middle">SITUASI ANTREAN DI KANTIN SEKOLAH</text>
      <g transform="translate(22, 34)">
        <rect width="175" height="72" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.8"/>
        <text x="87" y="24" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Siswa Antre Tertib</text>
        <text x="87" y="42" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Siswa 1 → Siswa 2 → Siswa 3</text>
        <text x="87" y="57" font-family="sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">(Menghormati hak pembeli lain)</text>
      </g>
      <g transform="translate(222, 34)">
        <rect width="175" height="72" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.8"/>
        <text x="87" y="24" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Contoh Pelanggaran</text>
        <text x="87" y="42" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Doni menyerobot barisan</text>
        <text x="87" y="57" font-family="sans-serif" font-size="8.5" fill="#dc2626" text-anchor="middle">(Melanggar budaya antre)</text>
      </g>
    </svg>`,
    text: 'Perhatikan ilustrasi situasi kantin sekolah di atas! Tindakan Doni yang menyerobot barisan teman saat membeli makanan termasuk pelanggaran norma ... karena tidak menghormati hak siswa yang datang lebih awal.',
    options: [
      { id: 'A', text: 'Norma kesopanan' },
      { id: 'B', text: 'Norma agama' },
      { id: 'C', text: 'Norma hukum pidana' },
      { id: 'D', text: 'Norma lalu lintas' },
    ],
    correctAnswer: 'A',
    explanation: 'Budaya antre mencerminkan sikap sopan, tertib, dan menghargai hak orang lain. Menyerobot antrean melanggar norma kesopanan dan menimbulkan teguran/celaan dari lingkungan.'
  },
  {
    id: 16,
    type: 'pg',
    element: TP2,
    topic: 'Praktik Kewajiban di Rumah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih cara mempraktikkan tanggung jawab dan kewajiban di lingkungan keluarga.',
    text: 'Setelah selesai belajar di malam hari, tindakan paling bertanggung jawab yang sebaiknya kamu praktikkan sebelum tidur adalah ...',
    options: [
      { id: 'A', text: 'Merapikan kembali buku dan alat tulis serta menyiapkan jadwal pelajaran untuk esok hari' },
      { id: 'B', text: 'Membiarkan buku berserakan di meja makan agar dirapikan oleh ibu besok pagi' },
      { id: 'C', text: 'Menyalakan televisi dengan suara keras hingga tengah malam' },
      { id: 'D', text: 'Menyimpan tas sekolah teman tanpa izin' },
    ],
    correctAnswer: 'A',
    explanation: 'Merapikan perlengkapan belajar sendiri dan menyiapkan jadwal sekolah adalah bentuk kemandirian serta praktik kewajiban anak di rumah.'
  },
  {
    id: 17,
    type: 'pg',
    element: TP2,
    topic: 'Contoh Pelanggaran Norma di Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi dampak pelanggaran tata tertib sekolah dan sikap memperbaikinya.',
    text: 'Rama membuang bungkus makanan plastik di kolong meja kelas karena malas berjalan ke tempat sampah. Dampak dari pelanggaran kewajiban menjaga kebersihan tersebut adalah ...',
    options: [
      { id: 'A', text: 'Kelas menjadi kotor, bau, berpotensi mengundang semut/nyamuk, dan mengganggu kenyamanan belajar warga kelas' },
      { id: 'B', text: 'Petugas piket menjadi lebih senang karena memiliki pekerjaan tambahan' },
      { id: 'C', text: 'Meja belajar Rama terlihat lebih berwarna dan rapi' },
      { id: 'D', text: 'Semua teman akan meniru perbuatan tersebut sebagai teladan baik' },
    ],
    correctAnswer: 'A',
    explanation: 'Membuang sampah sembarangan melanggar tata tertib dan merugikan hak seluruh warga kelas untuk belajar di ruangan yang bersih dan sehat.'
  },
  {
    id: 18,
    type: 'pg',
    element: TP2,
    topic: 'Pelanggaran Norma Kesusilaan (Kejujuran)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menilai tindakan menyontek saat ujian sebagai pelanggaran norma kesusilaan.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <g transform="translate(22, 20)">
        <rect width="175" height="80" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="1.8"/>
        <text x="87" y="25" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">UJIAN JUJUR &amp; MANDIRI</text>
        <text x="87" y="45" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Mengerjakan dengan</text>
        <text x="87" y="59" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">kemampuan sendiri</text>
      </g>
      <text x="210" y="65" font-family="sans-serif" font-size="14" font-weight="bold" fill="#64748b" text-anchor="middle">VS</text>
      <g transform="translate(223, 20)">
        <rect width="175" height="80" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8"/>
        <text x="87" y="25" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">MENYONTEK</text>
        <text x="87" y="45" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Melirik jawaban teman</text>
        <text x="87" y="59" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">atau membuka catatan</text>
      </g>
    </svg>`,
    text: 'Saat ulangan harian Pendidikan Pancasila berlangsung, teman sebangkumu berusaha membuka buku catatan secara diam-diam dan mengajakmu bekerja sama. Sikap yang paling tepat untuk mempraktikkan norma kesusilaan adalah ...',
    options: [
      { id: 'A', text: 'Menolak dengan halus dan tetap mengerjakan soal dengan jujur sesuai kemampuan sendiri' },
      { id: 'B', text: 'Ikut menyontek agar sama-sama mendapat nilai tinggi' },
      { id: 'C', text: 'Berteriak keras di tengah kelas sehingga suasana ujian menjadi ricuh' },
      { id: 'D', text: 'Memberikan seluruh lembar jawabanmu agar temanmu menyalinnya' },
    ],
    correctAnswer: 'A',
    explanation: 'Menyontek merupakan pelanggaran norma kesusilaan (ketidakjujuran) dan tata tertib ujian. Menolak dengan baik dan mengerjakan secara mandiri menjaga integritas diri.'
  },
  {
    id: 19,
    type: 'pg',
    element: TP2,
    topic: 'Sanksi Pelanggaran Norma',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi sanksi yang diterima jika melanggar norma kesopanan.',
    text: 'Seseorang yang berbicara dengan kata-kata kasar dan tidak menghormati orang yang lebih tua akan mendapatkan sanksi berupa ...',
    options: [
      { id: 'A', text: 'Cemoohan, teguran, atau dikucilkan dari pergaulan masyarakat' },
      { id: 'B', text: 'Kurungan penjara selama lima tahun di lembaga pemasyarakatan' },
      { id: 'C', text: 'Surat tilang kendaraan bermotor dari polisi lalu lintas' },
      { id: 'D', text: 'Penghargaan sebagai warga yang paling pemberani' },
    ],
    correctAnswer: 'A',
    explanation: 'Sanksi pelanggaran norma kesopanan berasal dari masyarakat sekitar, seperti teguran lisan, rasa malu, dicela, atau dijauhi dalam pergaulan.'
  },
  {
    id: 20,
    type: 'pg',
    element: TP2,
    topic: 'Pelanggaran Norma Agama & Kesusilaan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan tindakan tepat saat menemukan barang milik orang lain di sekolah.',
    text: 'Sinta menemukan selembar uang Rp20.000 di depan kamar mandi sekolah tanpa ada nama pemiliknya. Perilaku yang sesuai dengan norma kesusilaan dan norma agama adalah ...',
    options: [
      { id: 'A', text: 'Menyerahkan uang tersebut kepada guru piket atau wali kelas agar diumumkan kepada pemiliknya' },
      { id: 'B', text: 'Menggunakan uang tersebut untuk mentraktir teman dekat di kantin' },
      { id: 'C', text: 'Menyimpannya di dalam saku karena menganggapnya rezeki tak terduga' },
      { id: 'D', text: 'Membiarkannya tergeletak di lantai kamar mandi yang basah' },
    ],
    correctAnswer: 'A',
    explanation: 'Mengembalikan atau menyerahkan barang temuan melalui guru adalah praktik kejujuran (norma kesusilaan dan agama) karena barang tersebut bukan hak milik kita.'
  },
  {
    id: 21,
    type: 'pg',
    element: TP2,
    topic: 'Menghargai Hak Orang Lain di Keluarga',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menerapkan sikap menghormati hak anggota keluarga lain di rumah.',
    text: 'Kakak sedang fokus belajar untuk persiapan ujian di ruang keluarga, sedangkan kamu ingin mendengarkan musik. Praktik norma yang paling tepat adalah ...',
    options: [
      { id: 'A', text: 'Mengecilkan volume suara atau menggunakan earphone agar tidak mengganggu hak kakak untuk belajar dengan tenang' },
      { id: 'B', text: 'Menyalakan speaker dengan suara penuh karena kamu juga berhak mendengarkan musik' },
      { id: 'C', text: 'Meminta kakak pindah ke teras rumah karena kamu lebih dulu menyalakan musik' },
      { id: 'D', text: 'Mengajak teman bermain bola di ruang keluarga dekat kakak' },
    ],
    correctAnswer: 'A',
    explanation: 'Hak kita dibatasi oleh hak orang lain. Mengatur volume suara atau memakai earphone menghormati hak kakak untuk belajar dengan nyaman.'
  },
  {
    id: 22,
    type: 'pg',
    element: TP2,
    topic: 'Mempraktikkan Norma Hukum di Jalan & Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menunjukkan perilaku tertib berlalu lintas saat berangkat dan pulang sekolah.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#f0f9ff" stroke="#bae6fd" stroke-width="1.5"/>
      <g transform="translate(20, 22)">
        <rect width="380" height="76" rx="10" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
        <text x="190" y="24" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">KESELAMATAN BERLALU LINTAS SISWA SD</text>
        <text x="190" y="44" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">1. Menyeberang jalan di zebra cross atau jembatan penyeberangan</text>
        <text x="190" y="60" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">2. Berjalan kaki di trotoar sebelah kiri dan selalu waspada</text>
      </g>
    </svg>`,
    text: 'Berdasarkan panduan keselamatan di atas, saat berjalan kaki pulang sekolah melewati jalan raya yang ramai, sikap taat norma hukum yang harus dipraktikkan adalah ...',
    options: [
      { id: 'A', text: 'Berjalan di trotoar dan menyeberang di zebra cross sambil menoleh kanan dan kiri' },
      { id: 'B', text: 'Berjalan berjajar empat orang di tengah badan jalan raya sambil bercanda' },
      { id: 'C', text: 'Berlari menyeberang secara mendadak tanpa melihat kendaraan yang melintas' },
      { id: 'D', text: 'Bersepeda melawan arus kendaraan bermotor di jalur cepat' },
    ],
    correctAnswer: 'A',
    explanation: 'Berjalan di trotoar dan menyeberang melalui zebra cross merupakan kepatuhan terhadap aturan lalu lintas (norma hukum) demi keselamatan diri dan pengguna jalan lain.'
  },
  {
    id: 23,
    type: 'pg',
    element: TP2,
    topic: 'Pelanggaran Norma Hukum',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi contoh pelanggaran norma hukum di lingkungan sekitar.',
    text: 'Perbuatan di bawah ini yang merupakan contoh pelanggaran norma hukum adalah ...',
    options: [
      { id: 'A', text: 'Menerobos lampu lalu lintas berwarna merah dan mengendarai motor tanpa SIM' },
      { id: 'B', text: 'Lupa mencuci tangan sebelum makan malam bersama keluarga' },
      { id: 'C', text: 'Tidak membalas senyuman teman saat berpapasan di koridor sekolah' },
      { id: 'D', text: 'Terlambat bangun pagi pada hari Minggu libur sekolah' },
    ],
    correctAnswer: 'A',
    explanation: 'Menerobos lampu merah dan berkendara tanpa Surat Izin Mengemudi (SIM) melanggar Undang-Undang Lalu Lintas dan Angkutan Jalan (norma hukum).'
  },
  {
    id: 24,
    type: 'pg',
    element: TP2,
    topic: 'Keseimbangan Hak dan Kewajiban di Sekolah',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengevaluasi sikap menuntut hak tanpa melaksanakan kewajiban di sekolah.',
    text: 'Bagas sering mengeluh karena tidak dipilih menjadi petugas pembaca teks Pancasila saat upacara, padahal ia selalu datang terlambat dan sering tidak mengikuti latihan upacara. Evaluasi yang tepat terhadap sikap Bagas adalah ...',
    options: [
      { id: 'A', text: 'Bagas seharusnya memperbaiki kedisiplinannya dan berlatih sungguh-sungguh terlebih dahulu sebagai kewajiban sebelum mengharapkan kepercayaan tersebut' },
      { id: 'B', text: 'Bagas berhak memarahi ketua kelas karena tidak memilihnya meskipun sering terlambat' },
      { id: 'C', text: 'Sekolah wajib menghapus kewajiban datang tepat waktu bagi petugas upacara' },
      { id: 'D', text: 'Bagas tidak perlu lagi mengikuti upacara bendera setiap hari Senin' },
    ],
    correctAnswer: 'A',
    explanation: 'Untuk memperoleh kepercayaan atau hak tertentu di sekolah, siswa harus menunjukkan tanggung jawab dan kedisiplinan dalam melaksanakan kewajibannya terlebih dahulu.'
  },
  {
    id: 25,
    type: 'pg',
    element: TP2,
    topic: 'Menerapkan Norma Kesopanan Terhadap Guru',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mempraktikkan cara berinteraksi yang santun kepada guru di sekolah.',
    text: 'Saat guru sedang menjelaskan pelajaran di depan kelas dan kamu ingin bertanya tentang materi yang belum dipahami, cara yang paling sopan adalah ...',
    options: [
      { id: 'A', text: 'Mengangkat tangan terlebih dahulu, lalu berbicara dengan bahasa yang santun setelah dipersilakan guru' },
      { id: 'B', text: 'Langsung memotong pembicaraan guru dengan suara keras dari bangku belakang' },
      { id: 'C', text: 'Berjalan maju ke meja guru sambil membawa makanan ringan' },
      { id: 'D', text: 'Berbisik-bisik dengan teman sebangku hingga suara kelas menjadi ramai' },
    ],
    correctAnswer: 'A',
    explanation: 'Mengangkat tangan dan menunggu dipersilakan berbicara merupakan praktik norma kesopanan serta tata tertib belajar yang menghormati guru dan teman sekelas.'
  },
  {
    id: 26,
    type: 'pg',
    element: TP2,
    topic: 'Praktik Norma di Lingkungan Masyarakat/Sekolah',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat memecahkan masalah pelanggaran tata tertib merusak fasilitas sekolah.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(20, 20)">
        <rect width="380" height="80" rx="10" fill="#fff1f2" stroke="#f43f5e" stroke-width="1.8"/>
        <text x="190" y="25" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be123c" text-anchor="middle">KASUS: MENCORET MEJA &amp; DINDING KELAS</text>
        <text x="190" y="45" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Fasilitas umum sekolah adalah milik bersama yang wajib dijaga.</text>
        <text x="190" y="61" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Merusak fasilitas sekolah berarti melanggar tata tertib &amp; kewajiban siswa.</text>
      </g>
    </svg>`,
    text: 'Kamu melihat seorang teman mencoret-coret meja kelas dengan spidol permanen saat jam istirahat. Tindakan bijak yang mencerminkan warga sekolah yang peduli norma adalah ...',
    options: [
      { id: 'A', text: 'Menegurnya dengan bahasa yang baik agar berhenti, lalu mengajaknya membersihkan coretan tersebut bersama-sama' },
      { id: 'B', text: 'Ikut menggambar di meja sebelah karena terlihat menarik' },
      { id: 'C', text: 'Membiarkannya saja asalkan bukan meja milikmu yang dicoret' },
      { id: 'D', text: 'Langsung memukul teman tersebut tanpa memberi peringatan terlebih dahulu' },
    ],
    correctAnswer: 'A',
    explanation: 'Mengingatkan teman dengan cara santun dan mengajak memperbaiki kesalahan merupakan praktik tanggung jawab menjaga fasilitas umum sekolah tanpa kekerasan.'
  },
  {
    id: 27,
    type: 'pg',
    element: TP2,
    topic: 'Manfaat Mematuhi Norma',
    level: 'L3',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan manfaat kepatuhan terhadap norma dalam kehidupan keluarga dan sekolah.',
    text: 'Apabila setiap anggota keluarga dan warga sekolah mempraktikkan norma agama, kesusilaan, kesopanan, serta tata tertib dengan penuh kesadaran, maka suasana yang tercipta adalah ...',
    options: [
      { id: 'A', text: 'Kehidupan menjadi aman, rukun, saling menghargai, dan terhindar dari perselisihan' },
      { id: 'B', text: 'Setiap orang merasa tertekan karena tidak boleh bermain sama sekali' },
      { id: 'C', text: 'Hanya siswa yang kaya saja yang mendapatkan hak belajar' },
      { id: 'D', text: 'Guru dan orang tua tidak perlu lagi berkomunikasi dengan anak' },
    ],
    correctAnswer: 'A',
    explanation: 'Penerapan norma menciptakan ketertiban, rasa aman, kerukunan, saling menghormati, dan meminimalkan konflik dalam keluarga maupun sekolah.'
  },

  // --- TP 3: PENGERTIAN, ARTI PENTING, & PRAKTIK MUSYAWARAH (SOAL 28 - 40) ---
  {
    id: 28,
    type: 'pg',
    element: TP3,
    topic: 'Pengertian Musyawarah',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan pengertian musyawarah secara tepat.',
    text: 'Pembahasan bersama untuk menyatukan pendapat dalam menyelesaikan suatu masalah guna mencapai keputusan atau kesepakatan bersama disebut ...',
    options: [
      { id: 'A', text: 'Musyawarah' },
      { id: 'B', text: 'Persaingan bebas' },
      { id: 'C', text: 'Perdebatan tanpa ujung' },
      { id: 'D', text: 'Keputusan sepihak' },
    ],
    correctAnswer: 'A',
    explanation: 'Musyawarah adalah kegiatan berunding atau berdiskusi secara bersama-sama untuk mencapai kata sepakat (mufakat) dalam menyelesaikan persoalan bersama.'
  },
  {
    id: 29,
    type: 'pg',
    element: TP3,
    topic: 'Keterkaitan Musyawarah dengan Pancasila',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi sila Pancasila yang mendasari praktik musyawarah.',
    text: 'Budaya musyawarah untuk mencapai mufakat dalam kehidupan keluarga dan sekolah merupakan pengamalan nilai-nilai Pancasila, terutama sila ke- ...',
    options: [
      { id: 'A', text: 'Empat (Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan)' },
      { id: 'B', text: 'Satu (Ketuhanan Yang Maha Esa)' },
      { id: 'C', text: 'Dua (Kemanusiaan yang adil dan beradab)' },
      { id: 'D', text: 'Tiga (Persatuan Indonesia)' },
    ],
    correctAnswer: 'A',
    explanation: 'Sila keempat Pancasila berbunyi "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan", yang dilambangkan dengan Kepala Banteng dan menekankan musyawarah mufakat.'
  },
  {
    id: 30,
    type: 'pg',
    element: TP3,
    topic: 'Alur Pengambilan Keputusan Musyawarah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat memahami alur mufakat dan pemungutan suara (voting) berdasarkan bagan musyawarah.',
    image: `<svg viewBox="0 0 440 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="120" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <g transform="translate(15, 25)">
        <rect width="90" height="70" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="45" y="28" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1. USUL</text>
        <text x="45" y="45" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Menyampaikan</text>
        <text x="45" y="57" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">pendapat santun</text>
      </g>
      <text x="115" y="64" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">→</text>
      <g transform="translate(125, 25)">
        <rect width="90" height="70" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.8"/>
        <text x="45" y="28" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. DISKUSI</text>
        <text x="45" y="45" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Mendengarkan</text>
        <text x="45" y="57" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">dengan terbuka</text>
      </g>
      <text x="225" y="64" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">→</text>
      <g transform="translate(235, 25)">
        <rect width="90" height="70" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
        <text x="45" y="28" font-family="sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">3. MUFAKAT</text>
        <text x="45" y="45" font-family="sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">Kesepakatan</text>
        <text x="45" y="57" font-family="sans-serif" font-size="8.5" fill="#166534" text-anchor="middle">bersama (Utama)</text>
      </g>
      <text x="335" y="64" font-size="14" font-weight="bold" fill="#d97706" text-anchor="middle">→</text>
      <g transform="translate(345, 25)">
        <rect width="82" height="70" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="1.8"/>
        <text x="41" y="28" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b45309" text-anchor="middle">4. VOTING</text>
        <text x="41" y="45" font-family="sans-serif" font-size="8" fill="#78350f" text-anchor="middle">Jika mufakat</text>
        <text x="41" y="57" font-family="sans-serif" font-size="8" fill="#78350f" text-anchor="middle">belum tercapai</text>
      </g>
    </svg>`,
    text: 'Berdasarkan bagan tahapan musyawarah di atas, apabila setelah berdiskusi dengan baik ternyata kata mufakat belum berhasil dicapai karena adanya perbedaan pilihan yang tetap bertahan, maka cara terakhir yang sah ditempuh adalah ...',
    options: [
      { id: 'A', text: 'Pemungutan suara terbanyak (voting) secara jujur dan adil' },
      { id: 'B', text: 'Membubarkan musyawarah dan tidak mengambil keputusan apa pun' },
      { id: 'C', text: 'Menetapkan pendapat siswa yang suaranya paling keras' },
      { id: 'D', text: 'Mengundi pemenang dengan melempar uang koin sambil bertengkar' },
    ],
    correctAnswer: 'A',
    explanation: 'Musyawarah selalu mengutamakan mufakat (kesepakatan bersama). Namun jika jalan mufakat menemui jalan buntu setelah didiskusikan, dapat dilakukan pemungutan suara terbanyak (voting).'
  },
  {
    id: 31,
    type: 'pg',
    element: TP3,
    topic: 'Arti Penting Musyawarah dalam Kehidupanku',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan arti penting musyawarah bagi kerukunan kelompok.',
    text: 'Arti penting dilaksanakannya musyawarah dalam kehidupan keluarga dan sekolah adalah ...',
    options: [
      { id: 'A', text: 'Masalah dapat diselesaikan bersama dengan adil sehingga tidak ada pihak yang merasa dirugikan atau dipaksa' },
      { id: 'B', text: 'Hanya menguntungkan satu orang yang menjadi pemimpin kelompok saja' },
      { id: 'C', text: 'Membuat pekerjaan ringan menjadi lebih lama dan penuh perselisihan' },
      { id: 'D', text: 'Memaksa seluruh anggota agar memiliki hobi yang sama persis' },
    ],
    correctAnswer: 'A',
    explanation: 'Musyawarah penting karena menampung suara seluruh anggota, menghasilkan keputusan adil yang diterima bersama, mempererat persaudaraan, dan mencegah perpecahan.'
  },
  {
    id: 32,
    type: 'pg',
    element: TP3,
    topic: 'Ciri dan Prinsip Musyawarah',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi sikap yang harus dimiliki peserta musyawarah.',
    text: 'Dalam kegiatan musyawarah kelas, setiap peserta diperbolehkan menyampaikan usulan. Sikap yang benar ketika ada teman yang sedang mengemukakan pendapat adalah ...',
    options: [
      { id: 'A', text: 'Mendengarkan dengan tenang hingga selesai dan menghargai pendapatnya meskipun berbeda' },
      { id: 'B', text: 'Menertawakan usulan teman yang dianggap kurang menarik' },
      { id: 'C', text: 'Menyela pembicaraan teman sebelum ia menyelesaikan kalimatnya' },
      { id: 'D', text: 'Mengobrol sendiri karena merasa pendapat pribadi pasti yang terpilih' },
    ],
    correctAnswer: 'A',
    explanation: 'Etika utama musyawarah adalah menghormati hak bicara orang lain, mendengarkan dengan saksama tanpa memotong pembicaraan, dan tidak mengejek pendapat yang berbeda.'
  },
  {
    id: 33,
    type: 'pg',
    element: TP3,
    topic: 'Praktik Musyawarah di Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyebutkan contoh persoalan di sekolah yang tepat diselesaikan melalui musyawarah.',
    text: 'Berikut ini kegiatan di sekolah yang paling tepat diputuskan melalui musyawarah kelas adalah ...',
    options: [
      { id: 'A', text: 'Pemilihan pengurus kelas, pembagian jadwal piket, dan kesepakatan tema menghias kelas' },
      { id: 'B', text: 'Menentukan jawaban soal ulangan matematika secara bersama-sama saat ujian berlangsung' },
      { id: 'C', text: 'Menetapkan jadwal libur nasional seluruh Indonesia' },
      { id: 'D', text: 'Menentukan siapa yang boleh membuang sampah di laci meja teman' },
    ],
    correctAnswer: 'A',
    explanation: 'Pemilihan ketua kelas, pembagian tugas piket, dan rencana menghias kelas menyangkut kepentingan bersama warga kelas sehingga harus dimusyawarahkan.'
  },
  {
    id: 34,
    type: 'pg',
    element: TP3,
    topic: 'Praktik Musyawarah di Keluarga',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi praktik musyawarah di lingkungan keluarga melalui ilustrasi.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#166534" text-anchor="middle">MUSYAWARAH KELUARGA DI AKHIR PEKAN</text>
      <g transform="translate(20, 34)">
        <rect width="380" height="72" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.8"/>
        <text x="190" y="22" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1e293b" text-anchor="middle">Ayah, Ibu, Kakak, dan Adik duduk berdiskusi bersama:</text>
        <text x="190" y="40" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">• Pembagian tugas membersihkan rumah setiap hari Minggu</text>
        <text x="190" y="56" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">• Menentukan tujuan rekreasi keluarga saat liburan sekolah</text>
      </g>
    </svg>`,
    text: 'Berdasarkan gambar di atas, apabila dalam musyawarah keluarga ayah ingin pergi ke pantai sedangkan adik ingin mengunjungi nenek di desa, langkah musyawarah yang mencerminkan asas kekeluargaan adalah ...',
    options: [
      { id: 'A', text: 'Berdiskusi mencari jalan tengah yang disetujui semua anggota, misalnya mengunjungi nenek minggu ini dan ke pantai pada liburan berikutnya' },
      { id: 'B', text: 'Adik menangis keras sampai seluruh anggota keluarga terpaksa mengikuti kemauannya' },
      { id: 'C', text: 'Keluarga terbagi dua dan saling bermusuhan sepanjang hari libur' },
      { id: 'D', text: 'Membatalkan seluruh kegiatan tanpa memberi kesempatan anggota keluarga berbicara' },
    ],
    correctAnswer: 'A',
    explanation: 'Musyawarah keluarga mengutamakan kerukunan dan jalan tengah yang membuat seluruh anggota keluarga merasa dihargai dan senang.'
  },
  {
    id: 35,
    type: 'pg',
    element: TP3,
    topic: 'Sikap Terhadap Keputusan Musyawarah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan sikap yang tepat apabila usulannya tidak terpilih dalam musyawarah.',
    text: 'Kelas 5 mengadakan musyawarah untuk menentukan warna cat pot bunga taman kelas. Usulanmu memilih warna biru tidak terpilih karena mayoritas teman dan hasil mufakat memilih warna hijau. Sikap yang seharusnya kamu tunjukkan adalah ...',
    options: [
      { id: 'A', text: 'Menerima hasil keputusan dengan lapang dada dan tetap ikut bergotong royong mengecat pot berwarna hijau' },
      { id: 'B', text: 'Pulang lebih awal dan menolak membantu teman-teman mengecat pot bunga' },
      { id: 'C', text: 'Tetap mengecat beberapa pot dengan warna biru secara diam-diam' },
      { id: 'D', text: 'Mengejek pilihan warna hijau agar teman-teman merasa menyesal' },
    ],
    correctAnswer: 'A',
    explanation: 'Keputusan musyawarah yang telah disepakati bersama wajib diterima dengan ikhlas (lapang dada) dan dilaksanakan dengan penuh tanggung jawab oleh seluruh anggota, termasuk yang usulannya tidak terpilih.'
  },
  {
    id: 36,
    type: 'pg',
    element: TP3,
    topic: 'Asas Kekeluargaan dalam Musyawarah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi asas yang menjadi landasan musyawarah di Indonesia.',
    text: 'Asas utama yang mendasari pelaksanaan musyawarah di lingkungan keluarga, sekolah, dan masyarakat Indonesia adalah asas ...',
    options: [
      { id: 'A', text: 'Kekeluargaan dan gotong royong' },
      { id: 'B', text: 'Kepentingan pribadi dan golongan' },
      { id: 'C', text: 'Persaingan untuk menjatuhkan lawan' },
      { id: 'D', text: 'Pemaksaan kehendak oleh yang paling kuat' },
    ],
    correctAnswer: 'A',
    explanation: 'Musyawarah dilaksanakan berlandaskan asas kekeluargaan, kebersamaan, dan gotong royong demi kebaikan bersama.'
  },
  {
    id: 37,
    type: 'pg',
    element: TP3,
    topic: 'Etika Menyampaikan Pendapat',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mempraktikkan cara menyampaikan pendapat yang santun saat musyawarah.',
    text: 'Kalimat manakah yang paling santun untuk digunakan ketika ingin menyampaikan pendapat berbeda saat musyawarah kelompok di kelas?',
    options: [
      { id: 'A', text: '"Terima kasih atas kesempatannya. Menurut pendapat saya, akan lebih rapi jika kita membagi tugas menempel dan menulis secara bergantian."' },
      { id: 'B', text: '"Pendapatmu itu salah total, tidak masuk akal! Ikuti saja caraku!"' },
      { id: 'C', text: '"Kalau bukan ideku yang dipakai, aku tidak mau mengerjakan tugas kelompok ini."' },
      { id: 'D', text: '"Diamlah sebentar, jangan bicara terus, sekarang giliranku yang mengatur!"' },
    ],
    correctAnswer: 'A',
    explanation: 'Menyampaikan pendapat dalam musyawarah harus menggunakan kata-kata yang sopan, beralasan jelas, tidak menyinggung perasaan orang lain, dan bertujuan demi kebaikan bersama.'
  },
  {
    id: 38,
    type: 'pg',
    element: TP3,
    topic: 'Nilai-Nilai Luhur Musyawarah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan nilai-nilai positif yang tumbuh melalui kegiatan musyawarah berdasarkan ilustrasi.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#f5f3ff" stroke="#ddd6fe" stroke-width="1.5"/>
      <text x="210" y="22" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#5b21b6" text-anchor="middle">NILAI-NILAI LUHUR DALAM MUSYAWARAH</text>
      <g transform="translate(18, 36)">
        <rect width="90" height="68" rx="8" fill="#ffffff" stroke="#7c3aed" stroke-width="1.6"/>
        <text x="45" y="38" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#6d28d9" text-anchor="middle">Kebersamaan</text>
      </g>
      <g transform="translate(116, 36)">
        <rect width="90" height="68" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.6"/>
        <text x="45" y="38" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Persatuan</text>
      </g>
      <g transform="translate(214, 36)">
        <rect width="90" height="68" rx="8" fill="#ffffff" stroke="#059669" stroke-width="1.6"/>
        <text x="45" y="38" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">Keadilan</text>
      </g>
      <g transform="translate(312, 36)">
        <rect width="90" height="68" rx="8" fill="#ffffff" stroke="#d97706" stroke-width="1.6"/>
        <text x="45" y="38" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b45309" text-anchor="middle">Tanggung Jawab</text>
      </g>
    </svg>`,
    text: 'Berdasarkan gambar nilai-nilai musyawarah di atas, mengapa setiap keputusan hasil musyawarah harus dijalankan bersama dengan penuh tanggung jawab?',
    options: [
      { id: 'A', text: 'Karena keputusan tersebut merupakan hasil kesepakatan bersama untuk kepentingan dan kebaikan seluruh anggota' },
      { id: 'B', text: 'Karena takut dimarahi oleh ketua kelompok apabila tidak hadir' },
      { id: 'C', text: 'Agar pemimpin kelompok tidak perlu ikut bekerja saat kegiatan berlangsung' },
      { id: 'D', text: 'Supaya musyawarah dapat diulang kembali keesokan harinya' },
    ],
    correctAnswer: 'A',
    explanation: 'Keputusan musyawarah lahir dari kesepakatan bersama, sehingga seluruh peserta memiliki tanggung jawab moral untuk melaksanakannya secara kompak demi kebaikan bersama.'
  },
  {
    id: 39,
    type: 'pg',
    element: TP3,
    topic: 'Peran Pemimpin Musyawarah',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis sikap adil seorang ketua kelas saat memimpin musyawarah.',
    text: 'Saat memimpin musyawarah penentuan petugas lomba kebersihan kelas, Putu sebagai ketua kelas melihat dua kelompok sahabatnya berselisih pendapat dengan nada tinggi. Langkah paling bijaksana yang harus dilakukan Putu adalah ...',
    options: [
      { id: 'A', text: 'Menenangkan suasana, memberi kesempatan kedua pihak berbicara bergantian secara adil, lalu merangkum usulan terbaik untuk disepakati bersama' },
      { id: 'B', text: 'Langsung memilih usulan sahabat terdekatnya tanpa mendengarkan kelompok lain' },
      { id: 'C', text: 'Keluar meninggalkan ruang kelas karena tidak mau pusing' },
      { id: 'D', text: 'Menghukum kedua kelompok agar tidak boleh ikut lomba selamanya' },
    ],
    correctAnswer: 'A',
    explanation: 'Pemimpin musyawarah harus bersikap adil, netral, mampu menengahi perbedaan dengan bijaksana, serta memberi ruang yang sama bagi semua peserta.'
  },
  {
    id: 40,
    type: 'pg',
    element: TP3,
    topic: 'Evaluasi Dampak Musyawarah vs Keputusan Sepihak',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat membandingkan akibat pengambilan keputusan sepihak dengan keputusan hasil musyawarah.',
    text: 'Jika seorang ketua kelompok selalu mengambil keputusan secara sepihak tanpa pernah mengajak anggotanya bermusyawarah, akibat yang paling mungkin terjadi adalah ...',
    options: [
      { id: 'A', text: 'Anggota kelompok merasa tidak dihargai, kurang bersemangat bekerja sama, dan mudah timbul perselisihan' },
      { id: 'B', text: 'Seluruh anggota menjadi sangat kompak karena tidak perlu berpikir' },
      { id: 'C', text: 'Hasil kerja kelompok pasti menjadi juara pertama di sekolah' },
      { id: 'D', text: 'Semua anggota akan selalu menyetujui keputusan sepihak selamanya' },
    ],
    correctAnswer: 'A',
    explanation: 'Keputusan sepihak mengabaikan suara dan hak anggota lain. Hal ini dapat memicu rasa kecewa, hilangnya rasa memiliki terhadap tugas, serta perpecahan dalam kelompok.'
  },

  // ============================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (PGK KATEGORI)
  // Setiap soal memiliki 3 pernyataan yang harus direspons Benar / Salah
  // Bobot per butir: 6 poin (2 poin per pernyataan)
  // ============================================================================

  {
    id: 41,
    type: 'pgk_kategori',
    element: TP1,
    topic: 'Identifikasi Bentuk Norma dalam Kehidupan',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengidentifikasi kebenaran pengelompokan contoh perilaku terhadap bentuk-bentuk norma yang berlaku.',
    image: `<svg viewBox="0 0 420 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="115" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#1e3a8a" text-anchor="middle">PETA PENERAPAN NORMA SEHARI-HARI</text>
      <rect x="20" y="38" width="120" height="58" rx="8" fill="#ffffff" stroke="#3b82f6"/>
      <text x="80" y="62" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Norma Agama</text>
      <text x="80" y="78" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Ibadah &amp; Doa</text>
      <rect x="150" y="38" width="120" height="58" rx="8" fill="#ffffff" stroke="#10b981"/>
      <text x="210" y="62" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">Norma Kesopanan</text>
      <text x="210" y="78" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Salam &amp; Tata Krama</text>
      <rect x="280" y="38" width="120" height="58" rx="8" fill="#ffffff" stroke="#ef4444"/>
      <text x="340" y="62" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b91c1c" text-anchor="middle">Norma Hukum</text>
      <text x="340" y="78" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Aturan Resmi &amp; Tegas</text>
    </svg>`,
    text: 'Perhatikan gambar peta penerapan norma di atas! Tentukan apakah setiap pernyataan berikut tentang bentuk-bentuk norma bernilai BENAR atau SALAH.',
    statements: [
      {
        id: 's1',
        text: 'Mengucapkan salam dan membungkukkan badan saat melewati orang tua merupakan penerapan norma kesopanan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Memakai helm standar SNI saat berkendara di jalan raya merupakan contoh norma agama yang sanksinya berupa rasa menyesal saja.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Norma kesusilaan bersumber dari hati nurani manusia, misalnya bersikap jujur dan tidak menyontek saat ujian.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (salam dan tata krama adalah norma kesopanan). Pernyataan 2 SALAH (memakai helm adalah norma hukum lalu lintas dengan sanksi tilang resmi, bukan norma agama). Pernyataan 3 BENAR (kejujuran bersumber dari hati nurani / norma kesusilaan).'
  },
  {
    id: 42,
    type: 'pgk_kategori',
    element: TP1,
    topic: 'Identifikasi Hak dan Kewajiban di Keluarga dan Sekolah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat membedakan antara hak dan kewajiban dalam kedudukan sebagai anggota keluarga dan warga sekolah.',
    text: 'Bacalah tiga pernyataan mengenai hak dan kewajiban anak sebagai anggota keluarga dan warga sekolah berikut ini, lalu tentukan BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Mendapatkan pendidikan, bimbingan belajar dari guru, dan lingkungan kelas yang aman merupakan hak siswa di sekolah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Membantu orang tua merapikan tempat tidur dan menjaga kebersihan rumah termasuk hak anak yang boleh tidak dikerjakan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Mematuhi tata tertib sekolah dan menghormati seluruh warga sekolah adalah kewajiban siswa.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (pendidikan dan kenyamanan belajar adalah hak siswa). Pernyataan 2 SALAH (merapikan tempat tidur dan membantu di rumah adalah kewajiban anak). Pernyataan 3 BENAR (menaati tata tertib dan menghormati warga sekolah adalah kewajiban).'
  },
  {
    id: 43,
    type: 'pgk_kategori',
    element: TP2,
    topic: 'Praktik Norma & Dampak Pelanggaran Norma',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi contoh pelanggaran norma beserta dampak dan sikap perbaikannya di sekolah.',
    image: `<svg viewBox="0 0 420 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="115" rx="12" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="middle">STUDI KASUS KEDISIPLINAN WARGA SEKOLAH</text>
      <rect x="24" y="38" width="180" height="58" rx="8" fill="#fef2f2" stroke="#ef4444"/>
      <text x="114" y="60" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">Pelanggaran Tata Tertib</text>
      <text x="114" y="76" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Datang terlambat &amp; membuang sampah</text>
      <rect x="216" y="38" width="180" height="58" rx="8" fill="#ecfdf5" stroke="#10b981"/>
      <text x="306" y="60" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="middle">Praktik Perbaikan Diri</text>
      <text x="306" y="76" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Mengakui salah &amp; bertindak tertib</text>
    </svg>`,
    text: 'Perhatikan studi kasus kedisiplinan warga sekolah di atas! Tentukan apakah pernyataan berikut bernilai BENAR atau SALAH.',
    statements: [
      {
        id: 's1',
        text: 'Datang terlambat berulang kali ke sekolah melanggar tata tertib dan dapat mengganggu ketenangan teman yang sudah mulai belajar.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Ketika melanggar tata tertib sekolah, sikap yang baik adalah menyalahkan teman lain agar terhindar dari teguran guru.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menjaga kebersihan halaman sekolah dengan membuang sampah pada tempatnya merupakan praktik nyata kewajiban warga sekolah.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (datang terlambat mengganggu ketertiban kelas). Pernyataan 2 SALAH (menyalahkan orang lain melanggar norma kesusilaan; kita harus jujur mengakui kesalahan dan memperbaikinya). Pernyataan 3 BENAR (membuang sampah pada tempatnya adalah praktik kewajiban menjaga kebersihan).'
  },
  {
    id: 44,
    type: 'pgk_kategori',
    element: TP3,
    topic: 'Pengertian dan Tata Cara Musyawarah',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 6,
    indicator: 'Siswa dapat menilai kebenaran prinsip dan tata cara musyawarah yang baik.',
    text: 'Tentukan apakah pernyataan-pernyataan mengenai pengertian dan tata cara musyawarah berikut ini bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Musyawarah bertujuan mencapai keputusan bersama yang adil dan dapat diterima oleh seluruh anggota.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam musyawarah, hanya ketua kelompok yang boleh berpendapat sedangkan anggota lainnya wajib diam tanpa usulan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Jika mufakat belum tercapai setelah berdiskusi dengan baik, keputusan dapat diambil melalui pemungutan suara terbanyak (voting).',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (tujuan musyawarah adalah kesepakatan adil bagi semua). Pernyataan 2 SALAH (setiap peserta musyawarah berhak menyampaikan pendapat secara santun). Pernyataan 3 BENAR (voting adalah langkah sah apabila mufakat sulit dicapai).'
  },
  {
    id: 45,
    type: 'pgk_kategori',
    element: TP3,
    topic: 'Arti Penting & Praktik Musyawarah di Keluarga dan Sekolah',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 6,
    indicator: 'Siswa dapat mengevaluasi arti penting musyawarah serta sikap dalam menjalankan hasil mufakat di keluarga dan sekolah.',
    image: `<svg viewBox="0 0 420 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="115" rx="12" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="11.5" font-weight="bold" fill="#166534" text-anchor="middle">PRINSIP MUSYAWARAH KELUARGA &amp; SEKOLAH</text>
      <rect x="20" y="38" width="120" height="58" rx="8" fill="#ffffff" stroke="#16a34a"/>
      <text x="80" y="60" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#15803d" text-anchor="middle">Saling Menghargai</text>
      <text x="80" y="76" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Beda pendapat wajar</text>
      <rect x="150" y="38" width="120" height="58" rx="8" fill="#ffffff" stroke="#2563eb"/>
      <text x="210" y="60" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Lapang Dada</text>
      <text x="210" y="76" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Terima hasil mufakat</text>
      <rect x="280" y="38" width="120" height="58" rx="8" fill="#ffffff" stroke="#d97706"/>
      <text x="340" y="60" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b45309" text-anchor="middle">Kompak</text>
      <text x="340" y="76" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Laksanakan bersama</text>
    </svg>`,
    text: 'Perhatikan infografis prinsip musyawarah di atas! Tentukan apakah pernyataan mengenai praktik dan arti penting musyawarah di keluarga dan sekolah berikut ini bernilai BENAR atau SALAH.',
    statements: [
      {
        id: 's1',
        text: 'Musyawarah dalam keluarga membantu menentukan pembagian tugas rumah tangga secara adil sehingga kerukunan tetap terjaga.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Apabila usulan kita kalah dalam musyawarah kelas, kita boleh menolak melaksanakan hasil keputusan tersebut.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Arti penting musyawarah di sekolah adalah melatih siswa berani berpendapat dengan santun, belajar menghargai perbedaan, dan menghindari pertengkaran.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (musyawarah keluarga menjaga keadilan dan kerukunan). Pernyataan 2 SALAH (hasil musyawarah harus diterima dengan lapang dada dan dilaksanakan bersama walaupun usulan kita tidak terpilih). Pernyataan 3 BENAR (musyawarah melatih keberanian berpendapat santun dan sikap toleran).'
  },
];
