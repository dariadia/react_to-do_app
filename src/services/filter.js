import { stringInclues } from "../util/common";

export const FILTER_ALL = "все";
export const FILTER_ACTIVE = "активные";
export const FILTER_COMPLETED = "завершенные";

export function applyFilter(list, filter) {
  switch (filter) {
    case FILTER_COMPLETED:
      return list.filter(item => item.completed === true);
    case FILTER_ACTIVE:
      return list.filter(item => item.completed !== true);
    default:
      return list;
  }
}

export function search(list, query) {
  let q = query.trim().toLowerCase();
  return list.filter(({ text }) => stringInclues(text.toLowerCase(), q));
}

export function getOptions() {
  return {
    [FILTER_ALL]: "Все",
    [FILTER_ACTIVE]: "Активные",
    [FILTER_COMPLETED]: "Завершенные"
  };
}
