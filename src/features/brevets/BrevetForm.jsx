import { useState } from "react";
import BrevetForm from "../../../features/brevets/BrevetForm";

export default function BrevetForm({ initial = {}, onSubmit }) {
  const [form, setForm] = useState({
    num_brevet: "",
    titre: "",
    num_depo: "",
    date_depo: "",
    date_sortie: "",
    titulaire: "",
    status: "EN_ATTENTE",
    ...initial,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input name="num_brevet" value={form.num_brevet} onChange={handleChange} placeholder="Num brevet" />
      <input name="titre" value={form.titre} onChange={handleChange} placeholder="Titre" />
      <input name="num_depo" value={form.num_depo} onChange={handleChange} placeholder="Dépôt" />

      <input type="date" name="date_depo" value={form.date_depo} onChange={handleChange} />
      <input type="date" name="date_sortie" value={form.date_sortie} onChange={handleChange} />

      <input name="titulaire" value={form.titulaire} onChange={handleChange} placeholder="Titulaire" />

      <select name="status" value={form.status} onChange={handleChange}>
        <option value="EN_ATTENTE">EN_ATTENTE</option>
        <option value="ACCEPTER">ACCEPTER</option>
        <option value="REFUSER">REFUSER</option>
      </select>

      <button onClick={() => onSubmit(form)}>Enregistrer</button>
    </div>
  );
}