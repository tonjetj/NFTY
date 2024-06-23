import { onAuth } from "../events/onAuth";

export function setAuthListener(): void {
    const authForm = document.forms.namedItem('auth');
    if (authForm) {
      authForm.addEventListener('submit', onAuth as EventListener);
    } else {
      console.error("Form 'auth' not found.");
    }
  }