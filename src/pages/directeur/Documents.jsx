
import React, { useMemo } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArticleIcon from "@mui/icons-material/Article";
import ImageIcon from "@mui/icons-material/Image";
import TableChartIcon from "@mui/icons-material/TableChart";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DownloadIcon from "@mui/icons-material/Download";
import DataTable3, { Badge } from "../../components/DataTable3";

const DATA = [
  { id: "DOC-2024-001", titre: "Rapport annuel des brevets 2023",             type: "PDF",  categorie: "Rapport",     brevet: "—",             agent: "Direction R&D",      taille: "4.2 MB", date: "2024-01-15", statut: "Publié",  url: "#" },
  { id: "DOC-2024-002", titre: "Certificat de dépôt BRV-2024-0112",           type: "PDF",  categorie: "Certificat",  brevet: "BRV-2024-0112", agent: "Karim Boudjema",     taille: "1.1 MB", date: "2024-01-18", statut: "Publié",  url: "#" },
  { id: "DOC-2024-003", titre: "Formulaire demande de brevet F-BRV-001",      type: "DOCX", categorie: "Formulaire",  brevet: "BRV-2024-0089", agent: "Sara Moussaoui",     taille: "320 KB", date: "2024-01-25", statut: "Archivé", url: "#" },
  { id: "DOC-2024-004", titre: "Description technique — Alliage pipeline",    type: "PDF",  categorie: "Technique",   brevet: "BRV-2024-0201", agent: "Yacine Amrani",      taille: "8.7 MB", date: "2024-02-10", statut: "Publié",  url: "#" },
  { id: "DOC-2024-005", titre: "Rapport d'examen préliminaire",               type: "PDF",  categorie: "Rapport",     brevet: "BRV-2024-0055", agent: "Nadia Ferhat",       taille: "2.3 MB", date: "2024-02-20", statut: "Publié",  url: "#" },
  { id: "DOC-2024-006", titre: "Dessin technique capteur IoT",                type: "PNG",  categorie: "Dessin",      brevet: "BRV-2023-0344", agent: "Omar Bensalem",      taille: "5.8 MB", date: "2024-03-01", statut: "Publié",  url: "#" },
  { id: "DOC-2024-007", titre: "PV audience recours REC-2024-003",            type: "PDF",  categorie: "PV",          brevet: "BRV-2023-0344", agent: "Amina Kebir",        taille: "680 KB", date: "2024-03-15", statut: "Publié",  url: "#" },
  { id: "DOC-2024-008", titre: "Contrat de cession de droits — Catalyseur",   type: "PDF",  categorie: "Contrat",     brevet: "BRV-2023-0290", agent: "Mourad Tlemçani",    taille: "1.9 MB", date: "2024-03-22", statut: "Archivé", url: "#" },
  { id: "DOC-2024-009", titre: "Notice d'utilisation brevet turbine",         type: "PDF",  categorie: "Notice",      brevet: "BRV-2024-0231", agent: "Rania Hadj",         taille: "3.4 MB", date: "2024-04-05", statut: "Publié",  url: "#" },
  { id: "DOC-2024-010", titre: "Reçu de paiement PAY-2024-005",              type: "PDF",  categorie: "Reçu",        brevet: "BRV-2024-0055", agent: "Khalil Aouadi",      taille: "210 KB", date: "2024-04-10", statut: "Publié",  url: "#" },
  { id: "DOC-2024-011", titre: "Rapport bilan recours 2024 — T1",            type: "PDF",  categorie: "Rapport",     brevet: "—",             agent: "Direction Juridique", taille: "6.1 MB", date: "2024-04-15", statut: "Publié",  url: "#" },
  { id: "DOC-2024-012", titre: "Spécification robot inspection sous-marin",   type: "DOCX", categorie: "Technique",   brevet: "BRV-2023-0188", agent: "Djamel Brahim",      taille: "2.7 MB", date: "2024-05-02", statut: "Archivé", url: "#" },
  { id: "DOC-2024-013", titre: "Attestation conformité annuité 2024",         type: "PDF",  categorie: "Attestation", brevet: "BRV-2023-0502", agent: "Fatima Zerrouki",    taille: "450 KB", date: "2024-05-12", statut: "Publié",  url: "#" },
  { id: "DOC-2024-014", titre: "Schéma système de détection fuites",          type: "PNG",  categorie: "Dessin",      brevet: "BRV-2024-0178", agent: "Adel Hadjadj",       taille: "4.9 MB", date: "2024-05-20", statut: "Publié",  url: "#" },
  { id: "DOC-2024-015", titre: "Tableau de bord propriété intellectuelle Q2", type: "PDF",  categorie: "Rapport",     brevet: "—",             agent: "Direction R&D",      taille: "3.2 MB", date: "2024-06-01", statut: "Publié",  url: "#" },
];

/* ── icône + style selon type ── */
const TYPE_META = {
  PDF:  { icon: <PictureAsPdfIcon style={{ fontSize: 17, color: "#dc2626" }} />, bg: "#fee2e2", color: "#dc2626" },
  DOCX: { icon: <ArticleIcon      style={{ fontSize: 17, color: "#2563eb" }} />, bg: "#dbeafe", color: "#1d4ed8" },
  PNG:  { icon: <ImageIcon        style={{ fontSize: 17, color: "#7c3aed" }} />, bg: "#ede9fe", color: "#6d28d9" },
  XLSX: { icon: <TableChartIcon   style={{ fontSize: 17, color: "#16a34a" }} />, bg: "#dcfce7", color: "#15803d" },
};

const STATUT_COLOR = { "Publié": "green", "Archivé": "gray", "En révision": "yellow" };

/* ── téléchargement simulé (remplacer url par le vrai lien API) ── */
function handleDownload(row) {
  const a = document.createElement("a");
  a.href = row.url !== "#"
    ? row.url
    : `data:text/plain,Contenu simulé : ${row.titre}`;
  a.download = `${row.id}.${row.type.toLowerCase()}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const COLUMNS = [
  {
    key: "id", label: "Référence", sortable: true,
    render: (r) => <span className="dt3-ref">{r.id}</span>,
  },
  {
    key: "titre", label: "Titre", sortable: true,
    render: (r) => {
      const meta = TYPE_META[r.type] || {};
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {meta.icon || <InsertDriveFileIcon style={{ fontSize: 17, color: "#888" }} />}
          <span title={r.titre}>{r.titre.length > 44 ? r.titre.slice(0, 44) + "…" : r.titre}</span>
        </div>
      );
    },
  },
  {
    key: "type", label: "Type", sortable: true,
    render: (r) => {
      const m = TYPE_META[r.type] || { bg: "#f3f4f6", color: "#374151" };
      return <span className="dt3-badge" style={{ background: m.bg, color: m.color }}>{r.type}</span>;
    },
  },
  { key: "categorie", label: "Catégorie",  sortable: true  },
  {
    key: "brevet", label: "Brevet lié", sortable: false,
    render: (r) => r.brevet === "—"
      ? <span className="dt3-muted">—</span>
      : <span className="dt3-ref">{r.brevet}</span>,
  },
  { key: "agent",  label: "Émetteur", sortable: true  },
  { key: "taille", label: "Taille",   sortable: false, render: (r) => <span style={{ color: "#888", fontSize: 12 }}>{r.taille}</span> },
  { key: "date",   label: "Date",     sortable: true  },
  { key: "statut", label: "Statut",   sortable: false, render: (r) => <Badge label={r.statut} color={STATUT_COLOR[r.statut]} /> },
  {
    key: "_dl", label: "Télécharger", sortable: false,
    render: (r) => (
      <button className="dt3-btn dt3-btn-dl" onClick={() => handleDownload(r)} title={`Télécharger ${r.titre}`}>
        <DownloadIcon style={{ fontSize: 14 }} /> {r.type}
      </button>
    ),
  },
];

export default function DirDocuments() {
  const stats = useMemo(() => [
    { label: "Total documents", value: DATA.length },
    { label: "PDFs",            value: DATA.filter(r => r.type === "PDF").length,                         color: "red"    },
    { label: "Word (DOCX)",     value: DATA.filter(r => r.type === "DOCX").length,                        color: "blue"   },
    { label: "Images",          value: DATA.filter(r => r.type === "PNG" || r.type === "JPG").length,     color: "purple" },
    { label: "Publiés",         value: DATA.filter(r => r.statut === "Publié").length,                    color: "green"  },
  ], []);

  return (
    <DataTable3
      icon={<FolderIcon />}
      title="Documents"
      subtitle="Consultation et téléchargement des documents — lecture seule"
      stats={stats}
      columns={COLUMNS}
      data={DATA}
      searchKeys={["id", "titre", "categorie", "brevet", "agent", "type"]}
      statusKey="statut"
      statusList={["Tous", "Publié", "Archivé", "En révision"]}
      extraFilters={[{
        key: "type",
        label: "Type",
        options: ["Tous", "PDF", "DOCX", "PNG", "XLSX"],
      }]}
      pdfTitle="Registre des Documents — Directeur"
      pdfColumns={["Référence", "Titre", "Type", "Catégorie", "Brevet lié", "Émetteur", "Taille", "Date", "Statut"]}
      pdfRow={(r) => [r.id, r.titre.slice(0, 50), r.type, r.categorie, r.brevet, r.agent, r.taille, r.date, r.statut]}
      excelRow={(r) => ({ Référence: r.id, Titre: r.titre, Type: r.type, Catégorie: r.categorie, "Brevet lié": r.brevet, Émetteur: r.agent, Taille: r.taille, Date: r.date, Statut: r.statut })}
      fileName="documents"
    />
  );
}