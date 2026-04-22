
import React, { useMemo } from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import DataTable3, { Badge } from "../../components/DataTable3";

const DATA = [
  { id: "BRV-2024-0112", titre: "Système de récupération d'énergie thermique",       inventeur: "Karim Boudjema",   equipe: "R&D Energie",     depot: "2024-01-10", publication: "2024-07-10", statut: "Publié",     categorie: "Energie"       },
  { id: "BRV-2024-0089", titre: "Procédé de traitement des eaux usées industrielles", inventeur: "Sara Moussaoui",   equipe: "Environnement",   depot: "2023-11-22", publication: "2024-05-22", statut: "En examen",  categorie: "Environnement" },
  { id: "BRV-2024-0201", titre: "Alliage à haute résistance pour pipelines",          inventeur: "Yacine Amrani",    equipe: "Matériaux",       depot: "2024-02-15", publication: "—",          statut: "En dépôt",   categorie: "Matériaux"     },
  { id: "BRV-2023-0344", titre: "Capteur de pression intelligent IoT",                inventeur: "Nadia Ferhat",     equipe: "Instrumentation", depot: "2023-06-30", publication: "2024-01-30", statut: "Publié",     categorie: "Électronique"  },
  { id: "BRV-2024-0055", titre: "Méthode d'optimisation de forage directionnel",      inventeur: "Omar Bensalem",    equipe: "Forage",          depot: "2023-10-05", publication: "2024-04-05", statut: "Délivré",    categorie: "Forage"        },
  { id: "BRV-2023-0290", titre: "Catalyseur pour raffinage du pétrole brut",          inventeur: "Amina Kebir",      equipe: "Raffinage",       depot: "2023-04-18", publication: "2023-10-18", statut: "Délivré",    categorie: "Chimie"        },
  { id: "BRV-2024-0178", titre: "Système de détection de fuites par ultrasons",       inventeur: "Mourad Tlemçani",  equipe: "Sécurité",        depot: "2024-03-22", publication: "—",          statut: "En examen",  categorie: "Sécurité"      },
  { id: "BRV-2023-0415", titre: "Isolant thermique nanostructuré",                    inventeur: "Rania Hadj",       equipe: "Matériaux",       depot: "2023-08-12", publication: "2024-02-12", statut: "Publié",     categorie: "Matériaux"     },
  { id: "BRV-2024-0231", titre: "Turbine à gaz compacte basse émission",              inventeur: "Khalil Aouadi",    equipe: "R&D Energie",     depot: "2024-04-01", publication: "—",          statut: "En dépôt",   categorie: "Energie"       },
  { id: "BRV-2024-0099", titre: "Inhibiteur de corrosion pour pipelines marins",      inventeur: "Leila Mansouri",   equipe: "Chimie",          depot: "2024-01-28", publication: "2024-07-28", statut: "En examen",  categorie: "Chimie"        },
  { id: "BRV-2023-0502", titre: "Procédé de séparation gaz-liquide à basse pression", inventeur: "Djamel Brahim",    equipe: "Production",      depot: "2023-09-10", publication: "2024-03-10", statut: "Délivré",    categorie: "Production"    },
  { id: "BRV-2024-0310", titre: "Monitoring vibratoire des compresseurs",              inventeur: "Fatima Zerrouki",  equipe: "Maintenance",     depot: "2024-05-15", publication: "—",          statut: "En dépôt",   categorie: "Maintenance"   },
  { id: "BRV-2023-0188", titre: "Robot d'inspection des pipelines sous-marins",       inventeur: "Adel Hadjadj",     equipe: "Robotique",       depot: "2023-03-20", publication: "2023-09-20", statut: "Délivré",    categorie: "Robotique"     },
  { id: "BRV-2024-0144", titre: "Électrode de stockage d'énergie haute densité",      inventeur: "Yasmine Boucif",   equipe: "R&D Energie",     depot: "2024-02-28", publication: "—",          statut: "En examen",  categorie: "Energie"       },
  { id: "BRV-2023-0620", titre: "Système de compression de gaz naturel liquéfié",     inventeur: "Rédha Belkadi",    equipe: "GNL",             depot: "2023-12-05", publication: "2024-06-05", statut: "Publié",     categorie: "GNL"           },
];

const STATUT_COLOR = {
  "En dépôt":  "gray",
  "En examen": "yellow",
  "Publié":    "blue",
  "Délivré":   "green",
  "Rejeté":    "red",
};

const COLUMNS = [
  { key: "id",          label: "N° Brevet",   sortable: true,  render: (r) => <span className="dt3-ref">{r.id}</span> },
  { key: "titre",       label: "Titre",        sortable: true,  render: (r) => <span title={r.titre}>{r.titre.length > 52 ? r.titre.slice(0, 52) + "…" : r.titre}</span> },
  { key: "inventeur",   label: "Inventeur",    sortable: true  },
  { key: "equipe",      label: "Équipe",       sortable: true,  render: (r) => <Badge label={r.equipe} color="orange" /> },
  { key: "categorie",   label: "Catégorie",    sortable: true  },
  { key: "depot",       label: "Date dépôt",   sortable: true  },
  { key: "publication", label: "Publication",  sortable: false, render: (r) => r.publication === "—" ? <span className="dt3-muted">—</span> : r.publication },
  { key: "statut",      label: "Statut",       sortable: false, render: (r) => <Badge label={r.statut} color={STATUT_COLOR[r.statut]} /> },
];

export default function DirBrevets() {
  const stats = useMemo(() => [
    { label: "Total brevets", value: DATA.length },
    { label: "Délivrés",      value: DATA.filter(r => r.statut === "Délivré").length,    color: "green"  },
    { label: "Publiés",       value: DATA.filter(r => r.statut === "Publié").length,     color: "blue"   },
    { label: "En examen",     value: DATA.filter(r => r.statut === "En examen").length,  color: "yellow" },
    { label: "En dépôt",      value: DATA.filter(r => r.statut === "En dépôt").length },
  ], []);

  return (
    <DataTable3
      icon={<DescriptionIcon />}
      title="Brevets"
      subtitle="Registre des brevets — lecture seule"
      stats={stats}
      columns={COLUMNS}
      data={DATA}
      searchKeys={["id", "titre", "inventeur", "equipe", "categorie"]}
      statusKey="statut"
      statusList={["Tous", "En dépôt", "En examen", "Publié", "Délivré", "Rejeté"]}
      pdfTitle="Registre des Brevets — Directeur"
      pdfColumns={["N° Brevet", "Titre", "Inventeur", "Équipe", "Catégorie", "Dépôt", "Publication", "Statut"]}
      pdfRow={(r) => [r.id, r.titre.slice(0, 48), r.inventeur, r.equipe, r.categorie, r.depot, r.publication, r.statut]}
      excelRow={(r) => ({ "N° Brevet": r.id, Titre: r.titre, Inventeur: r.inventeur, Équipe: r.equipe, Catégorie: r.categorie, "Date dépôt": r.depot, Publication: r.publication, Statut: r.statut })}
      fileName="brevets"
    />
  );
}