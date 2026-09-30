import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Bento from './components/Bento';
import Split from './components/Split';
import CountUp from './components/CountUp';
import StatGrid from './components/StatGrid';
import Accordion from './components/Accordion';
import Comparison from './components/Comparison';
import Tabs from './components/Tabs';
import Timeline from './components/Timeline';
import CodeWindow from './components/CodeWindow';
import BrowserFrame from './components/BrowserFrame';
import Steps from './components/Steps';
import Table from './components/Table';
import Team from './components/Team';
import Agenda from './components/Agenda';
import Cover from './components/Cover';
import Contrast from './components/Contrast';
import BigNumber from './components/BigNumber';

export default function App() {
  return (
    <Deck>
      {/* 1. Cover */}
      <Slide
        notes="Selamat datang di perkuliahan Sistem Informasi Bisnis."
      >
        <Cover
          kicker="TEKNIK INFORMATIKA · SEMESTER 7"
          title="Sistem Informasi Bisnis"
          subtitle="Kode MK: IF260624 · 3 SKS · Semester 5/7"
          foot="Universitas PGRI Ronggolawe Tuban — Fakultas Teknik | Andy Haryoko, ST., MT."
          image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        />
      </Slide>

      {/* 2. Agenda / Course Overview */}
      <Slide notes="Berikut adalah peta perjalanan kita selama 16 minggu ke depan.">
        <Agenda
          title="Peta Perkuliahan 16 Minggu"
          items={[
            {
              title: "Minggu 1–2: Pengantar SIB & Strategi Bisnis",
              hint: "Definisi, tipe, fungsi, peran SIB dalam keunggulan kompetitif"
            },
            {
              title: "Minggu 3–4: Organisasi & Enterprise Network",
              hint: "Analisis SWOT, studi kasus UMKM"
            },
            {
              title: "Minggu 5–7: Infrastruktur TI & Aplikasi Kunci",
              hint: "RAD Tools, proposal proyek SIB"
            },
            {
              title: "Minggu 8–12: UTS & Pembangunan Sistem",
              hint: "UTS, Perancangan, dan Implementasi UMKM"
            },
            {
              title: "Minggu 13–16: Evaluasi & Publikasi Jurnal",
              hint: "Penulisan, Review, Presentasi, UAS"
            }
          ]}
        />
      </Slide>

      {/* 3. SubCPMK 1 — Pengantar SIB */}
      <Slide notes="Tanyakan ke mahasiswa: contoh SIB yang mereka gunakan sehari-hari.">
        <Split
          title="Apa itu Sistem Informasi Bisnis?"
          body={
            <>
              <p>
                SIB adalah sistem terintegrasi yang mengumpulkan, memproses, menyimpan, dan mendistribusikan informasi untuk mendukung pengambilan keputusan bisnis.
              </p>
              <ul>
                <Build at={1}>
                  <li><strong>Definisi:</strong> Sistem sosioteknikal untuk manajemen informasi.</li>
                </Build>
                <Build at={2}>
                  <li><strong>Tipe:</strong> TPS, MIS, DSS, ESS.</li>
                </Build>
                <Build at={3}>
                  <li><strong>Fungsi:</strong> Operasional, Manajerial, Strategis.</li>
                </Build>
              </ul>
            </>
          }
          media={
            <BrowserFrame>
              <div style={{ padding: '2rem', background: 'var(--surface)', height: '100%' }}>
                <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
                  <div style={{ background: 'var(--surface-2)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                    <h4>Sales YTD</h4>
                    <p style={{ fontSize: '2rem', color: 'var(--primary)' }}>$42,000</p>
                  </div>
                  <div style={{ background: 'var(--surface-2)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                    <h4>Active Users</h4>
                    <p style={{ fontSize: '2rem', color: 'var(--accent)' }}>1,204</p>
                  </div>
                  <div style={{ gridColumn: '1 / -1', background: 'var(--surface-2)', height: '200px', borderRadius: 'var(--radius-sm)' }}></div>
                </div>
              </div>
            </BrowserFrame>
          }
        />
      </Slide>

      {/* 4. SubCPMK 1 — Strategi Bisnis */}
      <Slide notes="Kaitkan dengan studi kasus Amazon vs Walmart dari buku Laudon.">
        <Contrast
          title="Peran SIB dalam Strategi Bisnis Modern"
          left={{
            label: "Tanpa SIB",
            points: [
              "Keputusan berbasis intuisi",
              "Data tersebar di berbagai unit",
              "Respons lambat terhadap pasar"
            ]
          }}
          right={{
            label: "Dengan SIB",
            points: [
              "Keputusan berbasis data real-time",
              "Integrasi lintas fungsi yang baik",
              "Menciptakan keunggulan kompetitif"
            ]
          }}
        />
      </Slide>

      {/* 5. SubCPMK 2 — Organisasi & Enterprise Network */}
      <Slide notes="Jelaskan masing-masing pilar pembentuk SIB.">
        <Bento
          title="Organisasi, Manajemen & Enterprise Network"
          tiles={[
            {
              title: "Organisasi",
              body: "Struktur hierarki, budaya, politik, dan proses bisnis.",
              c: 8,
              r: 2,
              variant: "accent"
            },
            {
              title: "Manajemen",
              body: "Pengambilan keputusan, alokasi sumber daya, kepemimpinan.",
              c: 4,
              r: 1
            },
            {
              title: "Enterprise Network",
              body: "Jaringan lintas organisasi untuk koordinasi dan kolaborasi.",
              c: 4,
              r: 1
            },
            {
              img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
              c: 12,
              r: 2
            }
          ]}
        />
      </Slide>

      {/* 6. SubCPMK 2 — SWOT UMKM */}
      <Slide notes="Tugas-1: Survei ke UMKM di sekitar kampus/tempat tinggal.">
        <Reveal>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Analisis SWOT UMKM</h2>
        </Reveal>
        <Comparison
          cols={["Karakteristik", "Kekuatan (S) & Peluang (O)", "Kelemahan (W) & Ancaman (T)"]}
          highlight={2}
          rows={[
            { label: "Operasional", values: ["Fleksibilitas tinggi", "Proses bisnis masih manual"] },
            { label: "Pasar", values: ["Pangsa lokal yang kuat", "Persaingan perusahaan besar"] },
            { label: "Sumber Daya", values: ["Peluang digitalisasi (e-commerce)", "Keterbatasan modal & SDM IT"] }
          ]}
        />
        <Build at={1}>
          <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--surface-2)', borderRadius: 'var(--radius)' }}>
            <h4>Strategi Pengembangan</h4>
            <p>Fokus pada strategi SO (menggunakan kekuatan untuk meraih peluang) dengan implementasi SIB skala kecil (SaaS / Cloud).</p>
          </div>
        </Build>
      </Slide>

      {/* 7. SubCPMK 2 — Infrastruktur TI */}
      <Slide notes="Diskusikan trade-off cloud vs on-premise.">
        <StatGrid
          title="Infrastruktur TI dalam SIB"
          stats={[
            { value: <CountUp to={99.7} suffix="%" />, label: "Uptime infrastruktur cloud", caption: "Sumber: Gartner, 2024" },
            { value: <CountUp to={5} suffix=" B+" />, label: "Pengguna Internet global", caption: "Sumber: ITU" },
            { value: <CountUp to={3.6} prefix="$" suffix=" T" decimals={1} />, label: "Nilai B2B e-commerce AS", caption: "Sumber: U.S. Census" },
            { value: <CountUp to={78} suffix="%" />, label: "Perusahaan gunakan cloud", caption: "Sumber: Flexera" }
          ]}
        />
      </Slide>

      {/* 8. SubCPMK 3 — Aplikasi Kunci SIB */}
      <Slide notes="Fokus pada bagaimana aplikasi-aplikasi ini menyelesaikan masalah bisnis UMKM.">
        <Reveal>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Aplikasi Kunci SIB di Era Digital</h2>
        </Reveal>
        <Tabs
          tabs={[
            {
              label: "ERP",
              content: (
                <div>
                  <h3>Enterprise Resource Planning (ERP)</h3>
                  <p>Integrasi proses bisnis inti: keuangan, SDM, manufaktur dalam satu sistem terpusat.</p>
                </div>
              )
            },
            {
              label: "SCM",
              content: (
                <div>
                  <h3>Supply Chain Management (SCM)</h3>
                  <p>Koordinasi pemasok, produksi, distribusi, dan logistik secara efisien.</p>
                </div>
              )
            },
            {
              label: "CRM",
              content: (
                <div>
                  <h3>Customer Relationship Management (CRM)</h3>
                  <p>Manajemen interaksi dan hubungan pelanggan untuk meningkatkan penjualan dan retensi.</p>
                </div>
              )
            },
            {
              label: "KMS",
              content: (
                <div>
                  <h3>Knowledge Management System (KMS)</h3>
                  <p>Manajemen pengetahuan, kolaborasi tim, dan dokumentasi operasional perusahaan.</p>
                </div>
              )
            },
            {
              label: "BI/Analytics",
              content: (
                <div>
                  <h3>Business Intelligence & Analytics</h3>
                  <p>Analisis data historis dan real-time untuk mendukung pengambilan keputusan.</p>
                </div>
              )
            }
          ]}
        />
      </Slide>

      {/* 9. SubCPMK 3 — RAD Tools */}
      <Slide notes="Jelaskan bahwa RAD memungkinkan UMKM membangun aplikasi dengan cepat.">
        <Steps
          title="User Guide RAD Tools: Pengembangan Aplikasi"
          items={[
            { title: "Identifikasi Kebutuhan", body: "Analisis proses bisnis UMKM yang ingin didigitalisasi." },
            { title: "Desain Prototipe", body: "Mockup UI/UX dengan RAD Tools." },
            { title: "Pengembangan Iteratif", body: "Build, test, iterate secara berkelanjutan." },
            { title: "Deployment", body: "Rilis ke UMKM untuk operasional." },
            { title: "Evaluasi", body: "Umpan balik dan perbaikan." }
          ]}
        />
      </Slide>

      {/* 10. SubCPMK 3 — Proposal Proyek SIB */}
      <Slide notes="Tugas Besar dimulai dari sini.">
        <Bento
          title="Proposal Proyek SIB"
          tiles={[
            {
              title: "Latar Belakang",
              body: "Masalah bisnis UMKM secara spesifik yang akan diselesaikan oleh SIB yang diusulkan.",
              c: 8,
              r: 1,
              variant: "accent"
            },
            {
              title: "Tujuan",
              body: "Solusi SIB dan dampak bisnis yang diharapkan.",
              c: 4,
              r: 1
            },
            {
              title: "Ruang Lingkup",
              body: "Fitur utama, pengguna sistem, dan batasan implementasi.",
              c: 6,
              r: 1
            },
            {
              title: "Kebutuhan Sistem",
              body: "Kebutuhan Hardware, Software, Data, dan SDM.",
              c: 6,
              r: 1
            }
          ]}
        />
        <Build at={1}>
          <div style={{ marginTop: '1.5rem', padding: '1rem', border: '1px solid var(--hair)', borderRadius: 'var(--radius)' }}>
            <strong>Timeline Proyek:</strong> Analisis (M3) → Desain (M4) → Prototipe (M5) → Pengujian (M6) → Presentasi (M7)
          </div>
        </Build>
      </Slide>

      {/* 11. SubCPMK 4 — Building Systems */}
      <Slide notes="Tugas Besar: Progres 1 — Perancangan aplikasi UMKM.">
        <Split
          title="Building & Managing Systems: Perancangan"
          body={
            <>
              <p>
                Tahap perancangan mencakup analisis kebutuhan, desain arsitektur, desain database, dan desain antarmuka.
              </p>
              <ul>
                <Build at={1}>
                  <li><strong>Analisis Kebutuhan:</strong> Use case dan alur bisnis.</li>
                </Build>
                <Build at={2}>
                  <li><strong>Desain Arsitektur & Database:</strong> ERD, skema tabel, integrasi API.</li>
                </Build>
              </ul>
            </>
          }
          media={
            <BrowserFrame>
              <div style={{ padding: '1rem', background: '#fff', color: '#111', height: '100%', fontFamily: 'sans-serif' }}>
                <div style={{ borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  <strong>UMKM Inventory System</strong>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ width: '150px', background: '#f5f5f5', padding: '1rem', height: '200px' }}>
                    <p>Dashboard</p>
                    <p><b>Products</b></p>
                    <p>Orders</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3>Product List</h3>
                    <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid #eee' }}><th>ID</th><th>Name</th><th>Stock</th></tr>
                        <tr><td>001</td><td>Keripik Singkong</td><td>45</td></tr>
                        <tr><td>002</td><td>Kopi Bubuk</td><td>12</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </BrowserFrame>
          }
        />
      </Slide>

      {/* 12. SubCPMK 4 — Implementasi RAD */}
      <Slide notes="Tugas Besar: Progres 2 — Pengembangan aplikasi.">
        <Split
          title="Implementasi dengan RAD Tools"
          body={
            <>
              <p>Menerapkan rancangan ke dalam platform RAD atau kode aktual.</p>
              <ul>
                <Build at={1}>
                  <li><strong>Sprint 1:</strong> Setup project & Authentication.</li>
                </Build>
                <Build at={2}>
                  <li><strong>Sprint 2:</strong> Product Management (CRUD).</li>
                </Build>
              </ul>
            </>
          }
          media={
            <CodeWindow title="ProductList.tsx" code={`// ProductList.tsx
import React, { useState, useEffect } from 'react';
import { getProducts } from './api';

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <table>
      {products.map(p => (
        <tr key={p.id}>
          <td>{p.name}</td>
          <td>{p.stock} units</td>
        </tr>
      ))}
    </table>
  );
}`}
            />
          }
        />
      </Slide>

      {/* 13. SubCPMK 4 — Pengujian */}
      <Slide notes="Tugas Besar: Progres 3 — Implementasi & Progres 4 — Pengujian.">
        <Reveal>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Pengujian dan Perbaikan Aplikasi</h2>
        </Reveal>
        <Timeline
          items={[
            { time: "T-1", title: "Unit Testing", body: "Test setiap fungsi secara terpisah." },
            { time: "T-2", title: "Integration Testing", body: "Test interaksi antar modul." },
            { time: "T-3", title: "User Acceptance Testing", body: "Test dengan pengguna UMKM." },
            { time: "T-4", title: "Performance Testing", body: "Test beban dan responsivitas." }
          ]}
        />
      </Slide>

      {/* 14. SubCPMK 5 — Evaluasi Efektivitas */}
      <Slide notes="Diskusikan metrik evaluasi: ROI, time savings, error reduction.">
        <BigNumber
          value={<CountUp to={87} suffix="%" />}
          caption="Peningkatan efisiensi operasional UMKM setelah implementasi SIB."
          foot="Sumber: Studi kasus implementasi SIB UMKM, 2024."
        />
      </Slide>

      {/* 15. SubCPMK 5 — Penulisan Jurnal */}
      <Slide notes="Template jurnal tersedia di Google Classroom.">
        <Reveal>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Penulisan Jurnal SIB</h2>
        </Reveal>
        <Accordion
          items={[
            { title: "1. Judul", body: "Singkat, spesifik, mencerminkan kontribusi." },
            { title: "2. Abstrak", body: "150–250 kata: tujuan, metode, hasil, kesimpulan." },
            { title: "3. Pendahuluan", body: "Latar belakang, rumusan masalah, tujuan penelitian." },
            { title: "4. Metode", body: "Deskripsi pendekatan pengembangan (RAD) dan evaluasi sistem." },
            { title: "5. Hasil dan Pembahasan", body: "Data implementasi, UI/UX, analisis efektivitas, dan interpretasi." },
            { title: "6. Kesimpulan & Referensi", body: "Ringkasan temuan utama, keterbatasan, min. 5 referensi jurnal terakreditasi." }
          ]}
        />
      </Slide>

      {/* 16. SubCPMK 5 — Presentasi & Publikasi */}
      <Slide notes="Pastikan semua mahasiswa mendapat umpan balik.">
        <Steps
          title="Presentasi Final & Publikasi Jurnal"
          items={[
            { title: "Submit Jurnal", body: "Kumpulkan draf awal sesuai format dan tenggat." },
            { title: "Peer Review", body: "Review jurnal antar mahasiswa / kelompok untuk perbaikan kualitas." },
            { title: "Revisi", body: "Perbaikan artikel berdasarkan umpan balik reviewer dan dosen." },
            { title: "Presentasi Final", body: "Presentasi proyek dan pemaparan hasil implementasi (UAS)." },
            { title: "Publikasi", body: "Revisi akhir dan submit ke jurnal/prosiding SIB." }
          ]}
        />
      </Slide>

      {/* 17. Assessment */}
      <Slide notes="Jelaskan kriteria penilaian untuk setiap komponen.">
        <Reveal>
          <h2>Penilaian & Bobot (100%)</h2>
        </Reveal>
        <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'var(--surface-2)' }}>
                <th style={{ padding: '1rem' }}>Komponen</th>
                <th style={{ padding: '1rem' }}>Bobot</th>
                <th style={{ padding: '1rem' }}>Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--hair)' }}>
                <td style={{ padding: '1rem' }}>UTS</td>
                <td style={{ padding: '1rem' }}>15%</td>
                <td style={{ padding: '1rem' }}>Ujian Tulis Materi M1-M7</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hair)' }}>
                <td style={{ padding: '1rem' }}>UAS</td>
                <td style={{ padding: '1rem' }}>15%</td>
                <td style={{ padding: '1rem' }}>Ujian Tulis / Lisan Materi M9-M15</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hair)' }}>
                <td style={{ padding: '1rem' }}>Tugas-1 SWOT</td>
                <td style={{ padding: '1rem' }}>10%</td>
                <td style={{ padding: '1rem' }}>Analisis UMKM</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hair)' }}>
                <td style={{ padding: '1rem' }}>Tugas-2 Proposal</td>
                <td style={{ padding: '1rem' }}>5%</td>
                <td style={{ padding: '1rem' }}>Proposal Proyek SIB</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hair)' }}>
                <td style={{ padding: '1rem' }}>Tugas-3 RAD</td>
                <td style={{ padding: '1rem' }}>5%</td>
                <td style={{ padding: '1rem' }}>Progress Pengembangan Aplikasi</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--hair)' }}>
                <td style={{ padding: '1rem' }}>Tugas Besar</td>
                <td style={{ padding: '1rem' }}>30%</td>
                <td style={{ padding: '1rem' }}>Aplikasi SIB UMKM (Individu/Kelompok)</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem' }}>Presentasi & Jurnal</td>
                <td style={{ padding: '1rem' }}>20%</td>
                <td style={{ padding: '1rem' }}>Artikel Ilmiah dan Paparan Final</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slide>

      {/* 18. Closing/CTA */}
      <Slide center notes="Ingatkan tenggat pengumpulan proposal.">
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Siap Membangun Solusi SIB?</h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--fg-muted)', marginBottom: '3rem' }}>
            Mulai proyek Anda dari analisis UMKM hingga publikasi jurnal.
          </p>
          <Build at={1}>
            <a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: 'var(--primary)',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '999px',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              boxShadow: 'var(--glow)'
            }}>
              Akses Google Classroom →
            </a>
          </Build>
        </div>
      </Slide>
    </Deck>
  );
}
