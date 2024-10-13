import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import { enqueueSnackbar } from 'notistack';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { DefaultApiError } from 'src/common';
import { useAppTranslation } from 'src/hooks';

interface Props {
  variant: 'error' | 'success' | 'info' | 'warning' | 'default' | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watcher: DefaultApiError | Record<string, any> | undefined;
  callback: ActionCreatorWithoutPayload;
  customMsg?: string;
}

export const useApiCallback = ({
  variant,
  callback,
  watcher,
  customMsg,
}: Props): void => {
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

    // Verifica se `customMsg` está presente e se `watcher` é um objeto genérico
    if (customMsg && typeof watcher === 'object' && !('message' in watcher)) {
      message = customMsg;
    } else {
      // Trata `watcher` como um erro se tiver a propriedade `message`
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

      // Se `watcher.message` for um array, converte em string
      if (Array.isArray(watcher.message)) {
        message = watcher.message.join(', ');
      }
    }

    presentError(message);
  }, [watcher, t, customMsg]);

  useEffect(() => {
    if (watcher) {
      handleErrorMessage();
      dispatch(callback());
    }
  }, [watcher, dispatch, handleErrorMessage, callback]);
};
