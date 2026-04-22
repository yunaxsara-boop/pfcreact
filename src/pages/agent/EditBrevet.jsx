import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editBrevet.css";
import { getBrevetById, updateBrevet } from "../../features/brevets/brevetStorage";

export default function EditBrevet() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const data = getBrevetById(id);
    setForm(data);
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFile = (e) => {
    const files = Array.from(e.target.files).map((f) => f.name);
    setForm({ ...form, documents: [...(form.documents || []), ...files] });
  };

  if (!form) return <p>Chargement…</p>;

  return (
    <div className="brevet-page">
      <div className="brevet-card">
        <h2 className="brevet-title">Modifier le brevet</h2>

        <div className="brevet-grid">

          {/* ── Identification ── */}
          <div className="brevet-section-label">Identification</div>

          <div className="form-group">
            <label>Numéro brevet</label>
            <input name="num_brevet" value={form.num_brevet} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Titre de l'invention</label>
            <input name="titre" value={form.titre} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Numéro de dépôt</label>
            <input name="num_depo" value={form.num_depo} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Titulaire</label>
            <input name="titulaire" value={form.titulaire} onChange={handleChange} />
          </div>

          {/* ── Dates ── */}
          <div className="brevet-section-label">Dates</div>

          <div className="form-group">
            <label>Date de dépôt</label>
            <input type="date" name="date_depo" value={form.date_depo} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Date de sortie</label>
            <input type="date" name="date_sortie" value={form.date_sortie} onChange={handleChange} />
          </div>

          {/* ── Personnes ── */}
          <div className="brevet-section-label">Personnes</div>

          <div className="form-group">
            <label>Inventeur</label>
            <input name="nom_inventeur" value={form.nom_inventeur} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Déposant</label>
            <input name="nom_deposant" value={form.nom_deposant} onChange={handleChange} />
          </div>

          {/* ── Statut ── */}
          <div className="brevet-section-label">Statut &amp; Documents</div>

          <div className="form-group">
            <label>Statut</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="EN_ATTENTE">EN ATTENTE</option>
              <option value="ACCEPTER">ACCEPTER</option>
              <option value="REFUSER">REFUSER</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Ajouter des documents</label>
            <div className="docs-box">
              <input type="file" multiple onChange={handleFile} />
              {form.documents?.map((doc, i) => (
                <div key={i} className="doc-item">{doc}</div>
              ))}
            </div>
          </div>

        </div>

        <div className="brevet-actions">
          <button
            className="btn-save"
            onClick={() => {
              updateBrevet(id, form);
              navigate("/agent/brevets");
            }}
          >
            Enregistrer les modifications
          </button>
          <button className="btn-cancel" onClick={() => navigate("/agent/brevets")}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}