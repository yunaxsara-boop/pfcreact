import React from "react";

// Dashboard principal
import Dashboard from "../../components/dashboard/Dashboard";

// Statistiques + Charts
import StatCard from "../../components/dashboard/StatCard";
import ChartBox from "../../components/dashboard/ChartBox";
import CircleChart from "../../components/dashboard/CircleChart";
import UserList from "./UserList"
export default function AdminDashboard() {
  return (
    <Dashboard
      title="Tableau de bord"

      stats={[
        { label: "TOTAL UTILISATEURS", value: "10", color: "#6a8042", icon: "👤" },
        { label: "RESPONSABLES", value: "5", color: "#ffe787", icon: "👤" },
        { label: "AGENTS", value: "2", color: "#1e3006", icon: "👤" },
        { label: "DIRECTEURS", value: "2", color: "#ed7a13", icon: "👤" },
        { label: "ADMIN", value: "1", color: "#d2e186", icon: "👤" },
      ]}

      chart={
        <ChartBox
          title="Croissance des utilisateurs"
          data={[
            { name: "Jan", users: 200 },
  { name: "Feb", users: 500 },
  { name: "Mar", users: 900 },
  { name: "Apr", users: 650 },
  { name: "May", users: 1200 },
  { name: "Jun", users: 1500 },
  { name: "Jul", users: 1800 },
  { name: "Aug", users: 2100 },
  { name: "Sep", users: 1700 },
  { name: "Oct", users: 1900 },
  { name: "Nov", users: 2300 },
  { name: "Dec", users: 3000 },
          ]}
          dataKey="users"
          color="#e5bb46"
        />
      }

      circle={
        <CircleChart title="Completion" value={78} />
      }

      
    >
      {/* children = contenu libre */}
      
      <UserList />
    </Dashboard>
  );
}