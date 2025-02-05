import { client } from './client';

type AuthResponse = {
  jwt: string;
  user: {
    email: string;
    username: string;
    createdAt: Date;
    displayName?: string;
  };
};

type AuthFirebaseParams = {
  idToken: string;
  profileMetaData: {
    firstName: string | null;
    lastName: string | null;
    email: string;
    phoneNumber: string | null;
  };
};

export async function authFirebase(params: AuthFirebaseParams) {
  const { data } = await client.post<AuthResponse>(
    `/api/firebase-auth`,
    params
  );
  return data;
}

type AuthEmailParams = {
  identifier: string;
  password: string;
};

export async function authEmail(params: AuthEmailParams) {
  const { data } = await client.post<AuthResponse>(`/api/auth/local`, params);
  return data;
}

type CreateAccountParams = {
  displayName: string;
  email: string;
  password: string;
  username: string;
};

export async function createAccount(params: CreateAccountParams) {
  const { data } = await client.post<AuthResponse>(
    `/api/auth/local/register`,
    params
  );
  return data;
}
