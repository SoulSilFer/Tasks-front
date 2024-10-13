import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { DefaultApiError } from 'src/common';
import { useAppTranslation } from 'src/hooks';

interface Props {
  variant: 'error' | 'success' | 'info' | 'warning' | 'default' | undefined;
  watcher: DefaultApiError | undefined;
  callback: ActionCreatorWithoutPayload;
}

export const useApiCallback = ({ variant, callback, watcher }: Props): void => {
  const dispatch = useDispatch();
  const { t } = useAppTranslation();

  const presentError = (msg: string): void => {
    enqueueSnackbar(
      <span data-cy="snack_error" id="snack_error">
        {msg}
      </span>,
      {
        variant,
      }
    );
  };

  const handleErrorMessage = useCallback(() => {
    if (!watcher) return;

    let message = '';

    switch (watcher.message) {
      case 'Invalid credentials':
        message = t('invalidcredentials');
        break;

      case 'E-mail already in use':
        message = t('emailInUse');
        break;

      case 'User not found':
        message = t('userNotFound');
        break;

      default:
        message = watcher.error || t('defaultError');
        break;
    }

    presentError(message);
  }, [watcher, t]);

  useEffect(() => {
    if (watcher) {
      handleErrorMessage();
      dispatch(callback());
    }
  }, [watcher, dispatch, handleErrorMessage, callback]);
};
