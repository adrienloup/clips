export const classNames = (list: (string | null | undefined)[]) =>
  list.filter((c) => !!c).join(' ');
