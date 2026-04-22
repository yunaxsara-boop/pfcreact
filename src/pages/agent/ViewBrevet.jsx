import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBrevetById } from "../../features/brevets/brevetStorage";
import "./viewBrevet.css";

export default function ViewBrevet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getBrevetById(id));
  }, [id]);

  if (!data) return <p>Chargement…</p>;

  const statusClass = {
    EN_ATTENTE: "status-attente",
    ACCEPTER:   "status-accepter",
    REFUSER:    "status-refuser",
  }[data.status] ?? "status-attente";

  const fields = [
    { label: "Numéro brevet",  value: data.num_brevet },
    { label: "Titre",          value: data.titre },
    { label: "Numéro de dépôt",value: data.num_depo },
    { label: "Date de dépôt",  value: data.date_depo },
    { label: "Date de sortie", value: data.date_sortie },
    { label: "Titulaire",      value: data.titulaire },
    { label: "Inventeur",      value: data.nom_inventeur },
    { label: "Déposant",       value: data.nom_deposant },
  ];

  return (
    <div className="view-page">
      <div className="view-container">

        <h2 className="view-title">Détails du brevet</h2>

        {/* Info grid */}
        <div className="view-grid">
          {fields.map((f) => (
            <div key={f.label} className="view-item">
              <span className="view-item-label">{f.label}</span>
              <span className="view-item-value">{f.value || "—"}</span>
            </div>
          ))}

          {/* Statut badge — full width */}
          <div className="view-item" style={{ gridColumn: "span 2" }}>
            <span className="view-item-label">Statut</span>
            <span className={`view-status ${statusClass}`}>{data.status}</span>
          </div>
        </div>

        {/* Documents */}
        <div className="view-docs">
          <p className="view-docs-title">📎 Documents joints</p>
          {data.documents?.length > 0 ? (
            <ul className="view-docs-list">
              {data.documents.map((doc, i) => (
                <li key={i} className="view-doc-item">{doc}</li>
              ))}
            </ul>
          ) : (
            <p className="view-no-doc">Aucun document joint</p>
          )}
        </div>

        <button className="view-btn-back" onClick={() => navigate(-1)}>
          ← Retour
        </button>

      </div>
    </div>
  );
}