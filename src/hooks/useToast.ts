import { useState, useCallback, useRef } from "react";
import type { ToastState } from "../types";

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ msg: "", visible: false });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast({ msg, visible: true });
    timerRef.current = setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      2000
    );
  }, []);

  return { toast, showToast };
}
