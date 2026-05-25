import React from "react";
import { SectionCard as Section } from "@/components/shared/layout/SectionCard";

export default function AccessibilitySection() {
  return (
    <div className="space-y-6">
      <Section title="Accessibility" subtitle="Loading-state guidance">
        <div className="text-xs text-slate-400 space-y-2">
          <p>
            - Use a concise loading label when the spinner runs without nearby
            visible text.
          </p>
          <p>
            - Add visible overlay labels when the loading state needs extra
            context for sighted users.
          </p>
          <p>
            - Prefer calmer motion settings for longer-running loading states.
          </p>
        </div>
      </Section>
    </div>
  );
}
