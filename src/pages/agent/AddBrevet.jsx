import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addBrevet.css";

export default function AddBrevet() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    num_brevet: "",
    titre: "",
    num_depo: "",
    date_depo: "",
    date_sortie: "",
    titulaire: "",
    nom_inventeur: "",
    nom_deposant: "",
    status: "EN_ATTENTE",
    documents: [],
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFiles = (e) => {
    const files = Array.from(e.target.files).map((f) => f.name);
    setForm({ ...form, documents: [...form.documents, ...files] });
  };

  const handleSubmit = () => {
    const existing = JSON.parse(localStorage.getItem("brevets")) || [];
    const newBrevet = { id: Date.now(), ...form };
    localStorage.setItem("brevets", JSON.stringify([...existing, newBrevet]));
    navigate("/agent/brevets");
  };

  return (
    <div className="brevet-page">
      <div className="brevet-card">
        <h2 className="brevet-title">Ajouter un brevet</h2>

        <div className="brevet-grid">

          {/* ── Identification ── */}
          <div className="brevet-section-label">Identification</div>

          <div className="form-group">
            <label>Numéro brevet</label>
            <input name="num_brevet" placeholder="Ex : BR-2024-001" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Titre de l'invention</label>
            <input name="titre" placeholder="Titre complet" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Numéro de dépôt</label>
            <input name="num_depo" placeholder="Ex : DEP-2024-001" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Titulaire</label>
            <input name="titulaire" placeholder="Nom du titulaire" onChange={handleChange} />
          </div>

          {/* ── Dates ── */}
          <div className="brevet-section-label">Dates</div>

          <div className="form-group">
            <label>Date de dépôt</label>
            <input type="date" name="date_depo" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Date de sortie</label>
            <input type="date" name="date_sortie" onChange={handleChange} />
          </div>

          {/* ── Personnes ── */}
          <div className="brevet-section-label">Personnes</div>

          <div className="form-group">
            <label>Inventeur</label>
            <input name="nom_inventeur" placeholder="Nom de l'inventeur" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Déposant</label>
            <input name="nom_deposant" placeholder="Nom du déposant" onChange={handleChange} />
          </div>

          {/* ── Statut ── */}
          <div className="brevet-section-label">Statut &amp; Documents</div>

          <div className="form-group">
            <label>Statut</label>
            <select name="status" onChange={handleChange}>
              <option value="EN_ATTENTE">EN ATTENTE</option>
              <option value="ACCEPTER">ACCEPTER</option>
              <option value="REFUSER">REFUSER</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Documents</label>
            <div className="docs-box">
              <input type="file" multiple onChange={handleFiles} />
              {form.documents.map((doc, i) => (
                <div key={i} className="doc-item">{doc}</div>
              ))}
            </div>
          </div>

        </div>

        <div className="brevet-actions">
          <button className="btn-save" onClick={handleSubmit}>
            Enregistrer le brevet
          </button>
          <button className="btn-cancel" onClick={() => navigate("/agent/brevets")}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}