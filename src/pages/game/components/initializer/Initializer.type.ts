export type Initializer = {
  label: string;
  name: string;
  value: number;
  onChange: (e: { target: { name: string; value: string } }) => void;
};
