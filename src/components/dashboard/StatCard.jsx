import React from "react";

export default function StatCard({ label, value, color, icon }) {
  return (
    <div className="stat-card" style={{ borderLeft: `6px solid ${color}` }}>
      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-info">
        <h4>{label}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
}