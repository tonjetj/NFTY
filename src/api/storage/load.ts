export function load(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string);
  }
  