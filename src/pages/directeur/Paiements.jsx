
import React, { useMemo } from "react";
import PaymentIcon from "@mui/icons-material/Payment";
import DataTable3, { Badge } from "../../components/DataTable3";

const DATA = [
  { id: "PAY-2024-001", brevet: "BRV-2024-0112", agent: "Karim Boudjema",   montant: 45000, type: "Taxe de dépôt",      date: "2024-01-15", echeance: "2024-01-31", methode: "Virement", statut: "Payé"       },
  { id: "PAY-2024-002", brevet: "BRV-2024-0089", agent: "Sara Moussaoui",   montant: 12000, type: "Annuité",            date: "2024-02-03", echeance: "2024-02-28", methode: "Chèque",   statut: "Payé"       },
  { id: "PAY-2024-003", brevet: "BRV-2024-0201", agent: "Yacine Amrani",    montant: 30000, type: "Taxe d'examen",     date: "2024-02-20", echeance: "2024-03-15", methode: "Virement", statut: "En attente" },
  { id: "PAY-2024-004", brevet: "BRV-2023-0344", agent: "Nadia Ferhat",     montant: 18500, type: "Annuité",            date: "2024-03-01", echeance: "2024-03-31", methode: "Espèces",  statut: "Payé"       },
  { id: "PAY-2024-005", brevet: "BRV-2024-0055", agent: "Omar Bensalem",    montant: 60000, type: "Taxe de délivrance", date: "2024-03-12", echeance: "2024-04-01", methode: "Virement", statut: "Retard"     },
  { id: "PAY-2024-006", brevet: "BRV-2023-0290", agent: "Amina Kebir",      montant: 22000, type: "Annuité",            date: "2024-03-25", echeance: "2024-04-15", methode: "Chèque",   statut: "Payé"       },
  { id: "PAY-2024-007", brevet: "BRV-2024-0178", agent: "Mourad Tlemçani",  montant: 15000, type: "Taxe de dépôt",      date: "2024-04-02", echeance: "2024-04-30", methode: "Virement", statut: "En attente" },
  { id: "PAY-2024-008", brevet: "BRV-2023-0415", agent: "Rania Hadj",       montant: 35000, type: "Taxe d'examen",     date: "2024-04-10", echeance: "2024-05-01", methode: "Chèque",   statut: "Annulé"     },
  { id: "PAY-2024-009", brevet: "BRV-2024-0231", agent: "Khalil Aouadi",    montant: 28000, type: "Annuité",            date: "2024-04-18", echeance: "2024-05-15", methode: "Virement", statut: "Payé"       },
  { id: "PAY-2024-010", brevet: "BRV-2024-0099", agent: "Leila Mansouri",   montant: 50000, type: "Taxe de délivrance", date: "2024-05-05", echeance: "2024-06-01", methode: "Virement", statut: "En attente" },
  { id: "PAY-2024-011", brevet: "BRV-2023-0502", agent: "Djamel Brahim",    montant: 12000, type: "Annuité",            date: "2024-05-14", echeance: "2024-06-10", methode: "Espèces",  statut: "Payé"       },
  { id: "PAY-2024-012", brevet: "BRV-2024-0310", agent: "Fatima Zerrouki",  montant: 45000, type: "Taxe de dépôt",      date: "2024-05-22", echeance: "2024-06-15", methode: "Chèque",   statut: "Retard"     },
];

const STATUT_COLOR = {
  "Payé":        "green",
  "En attente":  "yellow",
  "Retard":      "red",
  "Annulé":      "gray",
};

const COLUMNS = [
  { key: "id",       label: "Référence",    sortable: true,  render: (r) => <span className="dt3-ref">{r.id}</span> },
  { key: "brevet",   label: "Brevet",       sortable: true  },
  { key: "agent",    label: "Agent",        sortable: true  },
  { key: "type",     label: "Type",         sortable: true  },
  { key: "montant",  label: "Montant (DA)", sortable: true,  render: (r) => <strong>{r.montant.toLocaleString("fr-FR")} DA</strong> },
  { key: "date",     label: "Date paiement",sortable: true  },
  { key: "echeance", label: "Échéance",     sortable: true  },
  { key: "methode",  label: "Méthode",      sortable: false },
  { key: "statut",   label: "Statut",       sortable: false, render: (r) => <Badge label={r.statut} color={STATUT_COLOR[r.statut]} /> },
];

export default function DirPaiements() {
  const stats = useMemo(() => [
    { label: "Total paiements",  value: DATA.length },
    { label: "Payés",            value: DATA.filter(r => r.statut === "Payé").length,        color: "green"  },
    { label: "En attente",       value: DATA.filter(r => r.statut === "En attente").length,  color: "yellow" },
    { label: "En retard",        value: DATA.filter(r => r.statut === "Retard").length,      color: "red"    },
    { label: "Montant total (DA)", value: DATA.reduce((s,r) => s + r.montant, 0).toLocaleString("fr-FR"), color: "blue" },
  ], []);

  return (
    <DataTable3
      icon={<PaymentIcon />}
      title="Paiements"
      subtitle="Consultation des paiements — lecture seule"
      stats={stats}
      columns={COLUMNS}
      data={DATA}
      searchKeys={["id", "brevet", "agent", "type", "methode"]}
      statusKey="statut"
      statusList={["Tous", "Payé", "En attente", "Retard", "Annulé"]}
      pdfTitle="Liste des Paiements — Directeur"
      pdfColumns={["Référence", "Brevet", "Agent", "Type", "Montant (DA)", "Date", "Échéance", "Méthode", "Statut"]}
      pdfRow={(r) => [r.id, r.brevet, r.agent, r.type, r.montant.toLocaleString("fr-FR"), r.date, r.echeance, r.methode, r.statut]}
      excelRow={(r) => ({ Référence: r.id, Brevet: r.brevet, Agent: r.agent, Type: r.type, "Montant (DA)": r.montant, "Date paiement": r.date, Échéance: r.echeance, Méthode: r.methode, Statut: r.statut })}
      fileName="paiements"
    />
  );
}