export const demandRatio = (bonus: number, demand: number): number => {
  const demandLimit =
    demand >= 0.75 ? 1 : demand >= 0.6 ? 0.5 : demand >= 0.5 ? 0.4 : demand >= 0.25 ? 0.25 : 0.125;
  return bonus * demandLimit;
};
