/// src/layouts/app/index.tsx

import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { PAGES_ROUTES, STORAGE_KEYS } from 'src/common';
import { Loading, NavBars } from 'src/components';
import {
  getUserByIdRequest,
  LocalStorage,
  refreshTokenRequest,
} from 'src/core';
import { useAppLogOut, useAppSelector } from 'src/hooks';
import * as S from './styles';

export const AppLayout: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localStorage = new LocalStorage();
  const token = localStorage.get(STORAGE_KEYS.TOKEN);
  const [loading, setLoading] = useState<boolean>(true);
  const logOut = useAppLogOut();

  useEffect(() => {
    dispatch(getUserByIdRequest());
  }, []);

  useEffect(() => {
    if (!token) {
      navigate(PAGES_ROUTES.AUTH);
    } else {
      setLoading(false);
    }
  }, [token, navigate]);

  useEffect(() => {
    const tokenRefreshInterval = setInterval(() => {
      dispatch(refreshTokenRequest());
    }, 1000 * 60 * 4); // 4 minutos
    return () => clearInterval(tokenRefreshInterval);
  }, []);

  const { error, request } = useAppSelector((state) => state.refreshToken);

  useEffect(() => {
    if (error) {
      logOut();
    } else if (request) {
      setLoading(false);
    }
  }, [error, request, logOut]);

  if (loading) {
    return <Loading />;
  }

  return (
    <S.FullPage>
      <NavBars />

      <S.Content>
        <Outlet />
      </S.Content>
    </S.FullPage>
  );
};
