import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRespBrevets } from "./RespBrevetsContext";
import "../agent/addBrevet.css";

export default function RespAddBrevet() {
  const navigate = useNavigate();
  const { addBrevet } = useRespBrevets();

  const [form, setForm] = useState({
    num_brevet: "", titre: "", num_depo: "",
    date_depo: "", date_sortie: "", titulaire: "",
    nom_inventeur: "", nom_deposant: "",
    status: "EN_ATTENTE", documents: [],
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFiles = (e) => {
    const files = Array.from(e.target.files).map((f) => f.name);
    setForm({ ...form, documents: [...form.documents, ...files] });
  };

  const handleSubmit = () => {
    addBrevet(form);
    navigate("/responsable/brevets");
  };

  return (
    <div className="form-container">
      <h2>Ajouter Brevet</h2>
      <div className="form-grid">
        <div className="form-group">
          <label>Num brevet</label>
          <input name="num_brevet" value={form.num_brevet} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Titre</label>
          <input name="titre" value={form.titre} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Num dépôt</label>
          <input name="num_depo" value={form.num_depo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Titulaire</label>
          <input name="titulaire" value={form.titulaire} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date dépôt</label>
          <input type="date" name="date_depo" value={form.date_depo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date sortie</label>
          <input type="date" name="date_sortie" value={form.date_sortie} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Inventeur</label>
          <input name="nom_inventeur" value={form.nom_inventeur} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Déposant</label>
          <input name="nom_deposant" value={form.nom_deposant} onChange={handleChange} />
        </div>
        <div className="form-group full-width">
          <label>Status</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="EN_ATTENTE">EN_ATTENTE</option>
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
      <div className="form-actions">
        <button className="btn-save"   onClick={handleSubmit}>Enregistrer</button>
        <button className="btn-cancel" onClick={() => navigate("/responsable/brevets")}>Annuler</button>
      </div>
    </div>
  );
}