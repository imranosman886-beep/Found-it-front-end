import items from "../data/items";

let reports = [...items];

export const getItems = () => {
  return reports;
};

export const getItemById = (id) => {
  return reports.find((item) => item.id === Number(id));
};

export const addItem = (newItem) => {
  const item = {
    id: Date.now(),
    ...newItem,
    status: "Pending",
  };

  reports = [item, ...reports];

  return item;
};

export const deleteItem = (id) => {
  reports = reports.filter((item) => item.id !== Number(id));
};
