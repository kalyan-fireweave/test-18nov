"use client";

import { Page, PageHeader } from "../../../components/PageHeader";
import { remainderEnabled } from "../../../lib/remainder";

export default function RemainderPage() {
  if (!remainderEnabled()) {
    return (
      <Page>
        <PageHeader title="Remainder" subtitle="Not on for this desk" />
        <p className="muted">Remainder stays off until it is turned on.</p>
      </Page>
    );
  }

  return (
    <Page>
      <PageHeader title="Remainder" subtitle="What's left after the schedule" />
      <div className="card">
        <p className="muted">Nothing left on the schedule. Open Schedule to see the day.</p>
      </div>
    </Page>
  );
}
