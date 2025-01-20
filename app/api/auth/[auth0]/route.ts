import { initializeAuth0 } from '@/app/lib/auth0';

export const GET = (req: any, res: any) => {
  const auth0 = initializeAuth0(req);
  return auth0.handleAuth()(req, res);
};
