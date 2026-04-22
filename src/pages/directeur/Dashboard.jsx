import StatCard from "../../components/dashboard/StatCard";
import BarChartCard from "../../components/dashboard/BarChartCard";
import DonutChartCard from "../../components/dashboard/DonutChartCard";
import RecentTable from "../../components/dashboard/RecentTable";
import "../../components/dashboard/dashboard.css";

export default function DirDashboard() {
  return (
    <div className="dash-page">

      {/* STATS — no icon prop */}
      <div className="stats-grid">
        <StatCard value="6 000 DA" label="Total Revenus"   trend="12%" trendUp color="green"  />
        <StatCard value="321"      label="Total Brevets"   trend="8%"  trendUp color="orange" />
        <StatCard value="564"      label="Total Documents" trend="13%" trendUp color="blue"   />
        <StatCard value="254"      label="Total Recours"   trend="4%"  trendUp={false} color="purple" />
      </div>

      {/* CHARTS */}
      <div className="charts-row">
        <BarChartCard
          title="Croissance des brevets"
          labels={["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]}
          datasets={[
            { label: "Brevets", data: [30, 45, 28, 60, 52, 38, 48], backgroundColor: "#F88F22" },
            { label: "Recours", data: [20, 35, 18, 45, 40, 28, 35], backgroundColor: "#FFE3B3" },
          ]}
        />
        <DonutChartCard
          title="Statut des recours"
          labels={["EN_COURS", "TRAITE", "REFUSE"]}
          data={[40, 47, 13]}
          colors={["#FBB931", "#22c55e", "#EA6113"]}
        />
      </div>

      {/* TABLES */}
      <div className="tables-row">
        <RecentTable
          title="Derniers brevets"
          columns={[
            { key: "id",     label: "N° Brevet" },
            { key: "titre",  label: "Titre" },
            { key: "date",   label: "Date" },
            { key: "statut", label: "Statut" },
          ]}
          rows={[
            { id: "#BR-001", titre: "Procédé fab.", date: "01 Jan 2024", statut: "EN_COURS" },
            { id: "#BR-002", titre: "Système IA",   date: "03 Jan 2024", statut: "TRAITE"   },
            { id: "#BR-003", titre: "Capteur bio",  date: "05 Jan 2024", statut: "REFUSE"   },
            { id: "#BR-004", titre: "Algo crypto",  date: "07 Jan 2024", statut: "EN_COURS" },
          ]}
          badgeKey="statut"
          badgeMap={{ EN_COURS: "b-pending", TRAITE: "b-delivered", REFUSE: "b-refused" }}
        />
        <RecentTable
          title="Derniers paiements"
          columns={[
            { key: "date",    label: "Date" },
            { key: "brevet",  label: "Brevet" },
            { key: "montant", label: "Montant" },
            { key: "statut",  label: "Statut" },
          ]}
          rows={[
            { date: "01 Fév 2024", brevet: "BR-001", montant: "1 500 DA", statut: "Payé"     },
            { date: "03 Fév 2024", brevet: "BR-002", montant: "2 300 DA", statut: "Non payé" },
            { date: "05 Fév 2024", brevet: "BR-003", montant: "800 DA",   statut: "Payé"     },
            { date: "07 Fév 2024", brevet: "BR-004", montant: "3 100 DA", statut: "Non payé" },
          ]}
          badgeKey="statut"
          badgeMap={{ "Payé": "b-delivered", "Non payé": "b-pending" }}
        />
      </div>

    </div>
  );
}