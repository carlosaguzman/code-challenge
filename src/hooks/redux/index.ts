import { useSelector } from 'react-redux';

export function GetMe() {
  const user = useSelector((state: any) => state.user?.user);

  return user;
}
