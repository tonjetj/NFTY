export function save(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  