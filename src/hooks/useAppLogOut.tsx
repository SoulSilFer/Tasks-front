import { googleLogout } from '@react-oauth/google';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GetUserByIdResponse, PAGES_ROUTES, STORAGE_KEYS } from 'src/common';
import { clearSignInState, LocalStorage } from 'src/core';

export const useAppLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useCallback(() => {
    const localStorage = new LocalStorage();

    const userInfo = localStorage.get(STORAGE_KEYS.USER) as GetUserByIdResponse;

    if (userInfo && userInfo.isGoogle) {
      googleLogout();
    }

    localStorage.delete(STORAGE_KEYS.TOKEN);
    localStorage.delete(STORAGE_KEYS.USER);

    dispatch(clearSignInState());
    navigate(PAGES_ROUTES.AUTH);
  }, [dispatch, navigate]);
};
