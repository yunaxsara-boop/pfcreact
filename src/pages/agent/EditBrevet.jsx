import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./editBrevet.css"
import { getBrevetById, updateBrevet } from "../../features/brevets/brevetStorage";

export default function EditBrevet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);

  useEffect(() => {
    const data = getBrevetById(id);
    setForm(data);
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const files = Array.from(e.target.files).map(f => f.name);
    setForm({ ...form, documents: [...(form.documents || []), ...files] });
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="edit-container">

  <h2 className="edit-title">✏️ Modifier Brevet</h2>

  <div className="edit-form">

    <label>Num brevet</label>
    <input name="num_brevet" value={form.num_brevet} onChange={handleChange} />

    <label>Titre</label>
    <input name="titre" value={form.titre} onChange={handleChange} />

    <label>Num dépôt</label>
    <input name="num_depo" value={form.num_depo} onChange={handleChange} />

    <label>Date dépôt</label>
    <input type="date" name="date_depo" value={form.date_depo} onChange={handleChange} />

    <label>Date sortie</label>
    <input type="date" name="date_sortie" value={form.date_sortie} onChange={handleChange} />

    <label>Titulaire</label>
    <input name="titulaire" value={form.titulaire} onChange={handleChange} />

    <label>Inventeur</label>
    <input name="nom_inventeur" value={form.nom_inventeur} onChange={handleChange} />

    <label>Déposant</label>
    <input name="nom_deposant" value={form.nom_deposant} onChange={handleChange} />

    <label>Status</label>
    <select name="status" value={form.status} onChange={handleChange}>
      <option value="EN_ATTENTE">EN_ATTENTE</option>
      <option value="ACCEPTER">ACCEPTER</option>
      <option value="REFUSER">REFUSER</option>
    </select>

    <label>Ajouter documents</label>
    <input type="file" multiple onChange={handleFile} />

    <ul className="edit-docs">
      {form.documents?.map((doc, i) => (
        <li key={i}>{doc}</li>
      ))}
    </ul>

    <div className="edit-actions">
      <button
        className="edit-save-btn"
        onClick={() => {
          updateBrevet(id, form);
          navigate("/agent/brevets");
        }}
      >
        💾 Enregistrer
      </button>

      <button className="edit-cancel-btn" onClick={() => navigate("/agent/brevets")}>
        Annuler
      </button>
    </div>

  </div>
</div>
  );
}