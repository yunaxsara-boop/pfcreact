const KEY = "brevets";

/* ───────── GET ALL ───────── */
export const getBrevets = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

/* ───────── ADD ───────── */
export const addBrevet = (brevet) => {
  const data = getBrevets();

  const newBrevet = {
    ...brevet,
    id: Date.now(),
  };

  const updated = [...data, newBrevet];
  localStorage.setItem(KEY, JSON.stringify(updated));

  return newBrevet;
};

/* ───────── UPDATE ───────── */
export const updateBrevet = (id, updatedBrevet) => {
  const data = getBrevets();

  const updated = data.map((b) =>
    b.id === Number(id) ? { ...b, ...updatedBrevet } : b
  );

  localStorage.setItem(KEY, JSON.stringify(updated));
};

/* ───────── DELETE ───────── */
export const deleteBrevet = (id) => {
  const data = getBrevets();

  const updated = data.filter((b) => b.id !== id);

  localStorage.setItem(KEY, JSON.stringify(updated));
};

/* ───────── GET ONE ───────── */
export const getBrevetById = (id) => {
  return getBrevets().find((b) => b.id === Number(id));
};