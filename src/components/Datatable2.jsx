import { useState, useMemo } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./datatable.css";
import SearchIcon from '@mui/icons-material/Search';
export default function Datatable2({
  columns = [],
  data = [],
  form,
  onEdit,
  onDelete,
  onView,
  title = "Table",
  exportName = "export",
}) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState("asc");
  const [page, setPage] = useState(1);
  const perPage = 10;

  // SEARCH
  const filtered = useMemo(() => {
    if (!search) return data;
    return data.filter((row) =>
      columns.some((c) =>
        String(row[c.key] ?? "").toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, data, columns]);

  // SORT
  const sorted = useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      const res = String(a[sortKey]).localeCompare(String(b[sortKey]));
      return sortDir === "asc" ? res : -res;
    });
  }, [filtered, sortKey, sortDir]);

  // PAGINATION
  const totalPages = Math.ceil(sorted.length / perPage);
  const pageData = sorted.slice((page - 1) * perPage, page * perPage);

  const handleSort = (key) => {
    if (sortKey === key) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  // EXPORT EXCEL
  const exportExcel = () => {
    const ws = XLSX.utils.json_to_sheet(sorted);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "data");
    XLSX.writeFile(wb, `${exportName}.xlsx`);
  };

  // EXPORT PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text(title, 10, 10);

    autoTable(doc, {
      head: [columns.map((c) => c.label)],
      body: sorted.map((row) => columns.map((c) => row[c.key])),
    });

    doc.save(`${exportName}.pdf`);
  };

  return (
    <div className="dt-layout">

      {/* LEFT FORM */}
      <div className="dt-left">
        {form}
      </div>

      {/* RIGHT TABLE */}
      <div className="dt-right">

        {/* HEADER */}
        <div className="dt-header">
          <h2 className="dt-title">{title}</h2>

          <div className="dt-actions">
            <button className="dt-btn" onClick={exportExcel}>Excel</button>
            <button className="dt-btn" onClick={exportPDF}>PDF</button>
          </div>
        </div>

        {/* SEARCH */}
        <div>
  <SearchIcon sx={{ position: 'relative', right: '-30px', top: '6px' }} />
  <input
    className="dt-search"
    placeholder="Rechercher..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{ paddingLeft: '35px' }}
  />
</div>

        {/* TABLE */}
        <table className="dt-table">
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c.key} onClick={() => handleSort(c.key)}>
                  {c.label} {sortKey === c.key ? (sortDir === "asc" ? "↑" : "↓") : ""}
                </th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pageData.map((row) => (
              <tr key={row.id}>
                {columns.map((c) => (
                  <td key={c.key}>{row[c.key]}</td>
                ))}

                <td className="dt-actions-cell">
                  {onView && (
                    <button className="dt-btn-icon" onClick={() => onView(row)}>
                      voir
                    </button>
                  )}
                  {onEdit && (
                    <button className="dt-btn-icon" onClick={() => onEdit(row)}>
                      modifier
                    </button>
                  )}
                  {onDelete && (
                    <button className="dt-btn-icon" onClick={() => onDelete(row)}>
                      supprimer
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}