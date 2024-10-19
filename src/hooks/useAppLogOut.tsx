import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PAGES_ROUTES, STORAGE_KEYS } from 'src/common';
import { clearSignInState, LocalStorage } from 'src/core';

export const useAppLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return useCallback(() => {
    const localStorage = new LocalStorage();
    localStorage.delete(STORAGE_KEYS.TOKEN);

    dispatch(clearSignInState());
    navigate(PAGES_ROUTES.AUTH);
  }, [dispatch, navigate]);
};
