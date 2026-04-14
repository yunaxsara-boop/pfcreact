import { useEffect, useState } from "react";
import "./UserForm.css";

export default function UserForm({ onSubmit, editData, onCancel }) {
  const emptyForm = {
    id: null,
    username: "",
    nom: "",
    prenom: "",
    role: "",
    date_ajout: "",
    email: "",
    password: "",
  };

  const [form, setForm] = useState(emptyForm);

  // EDIT → remplir form
  useEffect(() => {
    if (editData) {
      setForm(editData);
    } else {
      setForm(emptyForm);
    }
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...form,
      id: form.id || Date.now(),
    };

    onSubmit(finalData);

    // reset seulement en mode ADD
    if (!editData) {
      setForm(emptyForm);
    }
  };

  // 🔥 ANNULER = retour mode AJOUT
  const handleCancel = () => {
    setForm(emptyForm);

    if (onCancel) {
      onCancel(); // 👉 important pour quitter mode edit
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h3>{editData ? "Modifier utilisateur" : "Ajouter utilisateur"}</h3>

      <input name="username" placeholder="NomUtilisateur" value={form.username} onChange={handleChange} />
      <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} />
      <input name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} />

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="">Rôle</option>
        <option value="admin">Admin</option>
        <option value="agent">Agent</option>
        <option value="user">User</option>
      </select>

      <input type="date" name="date_ajout" value={form.date_ajout} onChange={handleChange} />

      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Mot de passe" value={form.password} onChange={handleChange} />

      <button type="submit">
        {editData ? "Modifier" : "Ajouter"}
      </button>

      {/* 🔥 ANNULER */}
      {editData && (
        <button type="button" className="cancel-btn" onClick={handleCancel}>
          Annuler
        </button>
      )}
    </form>
  );
}