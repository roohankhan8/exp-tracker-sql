export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Expense = {
  id: string;
  email: string;
  category: string;
  typeofexp: string;
  amount: number;
  note:string,
  date: string;
};

export type ExpenseForm = {
  id: string;
  category: string;
  typeofexp: string;
  amount: number;
  note:string,
  date: string;
};
