export type Action = {
  type: string;
  value?: any;
};

export type State = {
  count: number;
  isLoading: boolean;
  cart: string[];
};
