import { useEffect, useState } from "react";
import Datatable2 from "../../components/Datatable2";
import UserForm from "./UserForm";

export default function Users() {
  const [data, setData] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // load demo
  useEffect(() => {
    setData([]);
  }, []);

  // ➜ AJOUT OU UPDATE
  const handleSubmit = (user) => {
    if (editUser) {
      // UPDATE
      setData((prev) =>
        prev.map((u) => (u.id === editUser.id ? user : u))
      );
      setEditUser(null);
    } else {
      // ADD
      setData((prev) => [...prev, user]);
    }
  };

  // ➜ EDIT CLICK
  const handleEdit = (row) => {
    setEditUser(row);
  };

  // DELETE
  const handleDelete = (row) => {
    setData((prev) => prev.filter((u) => u.id !== row.id));
  };

  return (
    <Datatable2
      title="Utilisateurs"
      data={data}
      columns={[
        { key: "NomUtilisateur", label: "NomUtilisateur" },
        { key: "nom", label: "Nom" },
        { key: "prenom", label: "Prénom" },
        { key: "role", label: "Rôle" },
        { key: "date_ajout", label: "Date" },
        { key: "email", label: "Email" },
        
      ]}
      form={
        <UserForm
          key={editUser ? editUser.id : "new"} // IMPORTANT 🔥
          editData={editUser}
          onSubmit={handleSubmit}
        />
      }
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
}