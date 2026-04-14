import React from "react";
import StatCard from "./StatCard";
import "./Dashboard.css";

export default function Dashboard({
  title,
  stats = [],
  chart,
  circle,
  children,
  actions,
}) {
  return (
    <div className="dashboard-container">

      {/* HEADER */}
      <div className="dashboard-header">
        <h2>{title}</h2>

        {actions && (
          <div className="dashboard-actions">
            {actions}
          </div>
        )}
      </div>

      {/* STATS */}
      {stats.length > 0 && (
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      )}

      {/* CHART + CIRCLE */}
      <div className="dashboard-grid">

        {/* BAR CHART */}
        {chart && (
          <div className="chart-box">
            {chart}
          </div>
        )}

        {/* CIRCLE */}
        {circle && (
          <div className="circle-box">
            {circle}
          </div>
        )}

      </div>

      {/* EXTRA CONTENT (children) */}
      {children && (
        <div className="dashboard-content">
          {children}
        </div>
      )}

    </div>
  );
}