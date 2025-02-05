export type Auth = {
  jwt: string;
  user: {
    email: string;
    nome: string;
    foto: string | null;
    inicio: Date;
  };
} | null;
