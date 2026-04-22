
import React, { useMemo } from "react";
import GavelIcon from "@mui/icons-material/Gavel";
import DataTable3, { Badge } from "../../components/DataTable3";

const DATA = [
  { id: "REC-2024-001", brevet: "BRV-2023-0155", agent: "Karim Boudjema",   type: "Opposition",         motif: "Antériorité",                depot: "2024-01-08", audience: "2024-03-15", decision: "En cours",    statut: "En instruction" },
  { id: "REC-2024-002", brevet: "BRV-2022-0890", agent: "Sara Moussaoui",   type: "Recours en nullité", motif: "Défaut de nouveauté",        depot: "2024-01-20", audience: "2024-04-10", decision: "—",           statut: "Accepté"        },
  { id: "REC-2024-003", brevet: "BRV-2023-0344", agent: "Yacine Amrani",    type: "Appel",              motif: "Rejet injustifié",           depot: "2024-02-05", audience: "2024-05-20", decision: "Favorable",   statut: "Clôturé"        },
  { id: "REC-2024-004", brevet: "BRV-2024-0055", agent: "Nadia Ferhat",     type: "Opposition",         motif: "Violation de brevet",        depot: "2024-02-18", audience: "2024-06-05", decision: "En cours",    statut: "En instruction" },
  { id: "REC-2024-005", brevet: "BRV-2023-0415", agent: "Omar Bensalem",    type: "Recours en nullité", motif: "Insuffisance de description",depot: "2024-03-01", audience: "2024-06-15", decision: "—",           statut: "En instruction" },
  { id: "REC-2024-006", brevet: "BRV-2022-0720", agent: "Amina Kebir",      type: "Appel",              motif: "Délai non respecté",         depot: "2024-03-12", audience: "2024-07-01", decision: "Défavorable", statut: "Clôturé"        },
  { id: "REC-2024-007", brevet: "BRV-2023-0290", agent: "Mourad Tlemçani",  type: "Opposition",         motif: "Antériorité",                depot: "2024-03-28", audience: "2024-07-20", decision: "En cours",    statut: "En instruction" },
  { id: "REC-2024-008", brevet: "BRV-2024-0099", agent: "Rania Hadj",       type: "Recours gracieux",   motif: "Erreur administrative",      depot: "2024-04-05", audience: "2024-08-10", decision: "Favorable",   statut: "Clôturé"        },
  { id: "REC-2024-009", brevet: "BRV-2023-0502", agent: "Khalil Aouadi",    type: "Appel",              motif: "Violation de procédure",     depot: "2024-04-15", audience: "—",           decision: "—",           statut: "Déposé"         },
  { id: "REC-2024-010", brevet: "BRV-2024-0178", agent: "Leila Mansouri",   type: "Opposition",         motif: "Défaut d'activité inventive",depot: "2024-05-02", audience: "—",           decision: "—",           statut: "Déposé"         },
  { id: "REC-2024-011", brevet: "BRV-2022-0305", agent: "Djamel Brahim",    type: "Recours en nullité", motif: "Non-brevetabilité",          depot: "2024-05-18", audience: "—",           decision: "—",           statut: "Déposé"         },
  { id: "REC-2024-012", brevet: "BRV-2023-0188", agent: "Fatima Zerrouki",  type: "Appel",              motif: "Rejet injustifié",           depot: "2024-06-01", audience: "—",           decision: "—",           statut: "Accepté"        },
];

const STATUT_COLOR   = { "Déposé": "gray", "Accepté": "blue", "En instruction": "yellow", "Clôturé": "green", "Rejeté": "red" };
const DECISION_COLOR = { "Favorable": "green", "Défavorable": "red", "En cours": "yellow" };

const COLUMNS = [
  { key: "id",       label: "N° Recours",  sortable: true,  render: (r) => <span className="dt3-ref">{r.id}</span> },
  { key: "brevet",   label: "Brevet visé", sortable: true  },
  { key: "agent",    label: "Déposant",    sortable: true  },
  { key: "type",     label: "Type",        sortable: true,  render: (r) => <Badge label={r.type} color="orange" /> },
  { key: "motif",    label: "Motif",       sortable: false, render: (r) => <span style={{ fontSize: 12, color: "#555" }}>{r.motif}</span> },
  { key: "depot",    label: "Date dépôt",  sortable: true  },
  { key: "audience", label: "Audience",    sortable: false, render: (r) => r.audience === "—" ? <span className="dt3-muted">—</span> : r.audience },
  { key: "decision", label: "Décision",    sortable: false, render: (r) => <Badge label={r.decision} color={DECISION_COLOR[r.decision] || "gray"} /> },
  { key: "statut",   label: "Statut",      sortable: false, render: (r) => <Badge label={r.statut} color={STATUT_COLOR[r.statut]} /> },
];

export default function DirRecour() {
  const stats = useMemo(() => [
    { label: "Total recours",       value: DATA.length },
    { label: "En instruction",      value: DATA.filter(r => r.statut === "En instruction").length,  color: "yellow" },
    { label: "Clôturés",            value: DATA.filter(r => r.statut === "Clôturé").length,         color: "green"  },
    { label: "Décisions favorables",value: DATA.filter(r => r.decision === "Favorable").length,     color: "blue"   },
    { label: "Nouveaux déposés",    value: DATA.filter(r => r.statut === "Déposé").length },
  ], []);

  return (
    <DataTable3
      icon={<GavelIcon />}
      title="Recours"
      subtitle="Suivi des recours et contentieux — lecture seule"
      stats={stats}
      columns={COLUMNS}
      data={DATA}
      searchKeys={["id", "brevet", "agent", "type", "motif"]}
      statusKey="statut"
      statusList={["Tous", "Déposé", "Accepté", "En instruction", "Clôturé", "Rejeté"]}
      pdfTitle="Registre des Recours — Directeur"
      pdfColumns={["N° Recours", "Brevet", "Déposant", "Type", "Motif", "Dépôt", "Audience", "Décision", "Statut"]}
      pdfRow={(r) => [r.id, r.brevet, r.agent, r.type, r.motif, r.depot, r.audience, r.decision, r.statut]}
      excelRow={(r) => ({ "N° Recours": r.id, "Brevet visé": r.brevet, Déposant: r.agent, Type: r.type, Motif: r.motif, "Date dépôt": r.depot, Audience: r.audience, Décision: r.decision, Statut: r.statut })}
      fileName="recours"
    />
  );
}