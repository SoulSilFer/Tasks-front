import { STORAGE_KEYS } from 'src/common';

const PREFIX = 'tasks_';

export class SessionStorage {
  async set<T>(key: STORAGE_KEYS, value: T): Promise<void> {
    try {
      sessionStorage.setItem(PREFIX + key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao salvar no SessionStorage: ${error}`);
    }
  }

  get<T>(key: STORAGE_KEYS): T | null {
    try {
      const value = sessionStorage.getItem(PREFIX + key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(`Erro ao obter do SessionStorage: ${error}`);
      return null;
    }
  }

  delete(key: STORAGE_KEYS): void {
    try {
      sessionStorage.removeItem(PREFIX + key);
    } catch (error) {
      console.error(`Erro ao remover do SessionStorage: ${error}`);
    }
  }
}
