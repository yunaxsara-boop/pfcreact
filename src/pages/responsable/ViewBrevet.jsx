import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRespBrevets } from "./RespBrevetsContext";
import "../agent/viewBrevet.css";

export default function RespViewBrevet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBrevetById } = useRespBrevets();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(getBrevetById(id));
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="view-container">
      <h2 className="view-title">Détails Brevet</h2>

      <div className="view-card">
        <p><b>Num brevet:</b> {data.num_brevet}</p>
        <p><b>Titre:</b> {data.titre}</p>
        <p><b>Num dépôt:</b> {data.num_depo}</p>
        <p><b>Date dépôt:</b> {data.date_depo}</p>
        <p><b>Date sortie:</b> {data.date_sortie}</p>
        <p><b>Titulaire:</b> {data.titulaire}</p>
        <p><b>Inventeur:</b> {data.nom_inventeur}</p>
        <p><b>Déposant:</b> {data.nom_deposant}</p>
        <p><b>Status:</b> {data.status}</p>
      </div>

      <div className="view-docs">
        <h4>📎 Documents :</h4>
        <ul>
          {data.documents?.length > 0 ? (
            data.documents.map((doc, i) => (
              <li key={i} className="view-doc-item">{doc}</li>
            ))
          ) : (
            <p>Aucun document</p>
          )}
        </ul>
      </div>

      <button className="view-btn-back" onClick={() => navigate(-1)}>
        ⬅ Retour
      </button>
    </div>
  );
}