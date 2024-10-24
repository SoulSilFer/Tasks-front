import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from '@react-oauth/google';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PAGES_ROUTES } from 'src/common';
import { clearGoogleAuthState, googleAuthRequest } from 'src/core';
import { useApiCallback, useAppSelector } from 'src/hooks';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const SignInWithGoogle: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log({ CLIENT_ID });

  const handleSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential)
      dispatch(
        googleAuthRequest({ credential: credentialResponse.credential })
      );
  };

  const handleError = () => {
    console.log('Erro ao fazer login com o Google');
  };

  const { request, error } = useAppSelector((state) => state.googleAuth);

  useApiCallback({
    callback: clearGoogleAuthState,
    variant: 'error',
    watcher: error,
    customMsg: 'Unknow error ocorrued',
  });

  useEffect(() => {
    if (request) {
      navigate(PAGES_ROUTES.HOME);
    }
  }, [request]);

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
        shape="pill"
        useOneTap
      />
    </GoogleOAuthProvider>
  );
};

export default SignInWithGoogle;
