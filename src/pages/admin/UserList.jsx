import "../../components/datatable.css";

export default function UserList({ data = [] }) {
  return (
    <div className="dt-container">
      <h3 className="dt-title">Liste des utilisateurs</h3>

      <table className="dt-table">
        <thead>
          <tr>
            <th>Nomutilisateur</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Rôle</th>
            <th>Rôle</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Aucun utilisateur
              </td>
            </tr>
          ) : (
            data.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
                <td>{u.nom}</td>
                <td>{u.prenom}</td>
                <td>{u.role}</td>
                <td>{u.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}