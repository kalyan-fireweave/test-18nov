"use client";

import { fw } from "@fireweaveai/web-sdk/start";
import { useSyncExternalStore } from "react";

export function remainderEnabled(): boolean {
  // @fireweave-controlpoint remainder
  return fw.controlPoints.getBooleanValue("remainder", false);
}

export function useRemainderEnabled(): boolean {
  return useSyncExternalStore(
    (onChange) => fw.subscribe(() => onChange()),
    remainderEnabled,
    () => false,
  );
}
