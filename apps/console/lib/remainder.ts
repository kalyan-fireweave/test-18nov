"use client";

import { fw } from "@fireweaveai/web-sdk/start";

export function remainderEnabled(): boolean {
  // @fireweave-controlpoint remainder
  return fw.controlPoints.getBooleanValue("remainder", false);
}
