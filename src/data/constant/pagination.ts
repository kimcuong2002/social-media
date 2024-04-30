import { useQueryInfoUser } from '@/features/auth';

const { data: userData } = useQueryInfoUser();

export const LIMIT = 10;
export const PAGE = 1;
export const FILTER = {};
export const ID_USER = userData?.getInfoUser.id as string;
