import { STORAGE_KEYS } from 'src/common';

const PREFIX = 'tasks_';

export class LocalStorage {
  set<T>(key: STORAGE_KEYS, value: T): void {
    try {
      localStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao salvar no LocalStorage: ${error}`);
    }
  }

  get<T>(key: STORAGE_KEYS): T | null {
    try {
      const value = localStorage.getItem(PREFIX + key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Erro ao obter do LocalStorage: ${error}`);
      return null;
    }
  }

  delete(key: STORAGE_KEYS): void {
    try {
      localStorage.removeItem(PREFIX + key);
    } catch (error) {
      console.error(`Erro ao remover do LocalStorage: ${error}`);
    }
  }
}
