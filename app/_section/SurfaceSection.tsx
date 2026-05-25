import React from "react";
import { type SpinnerState, type SpinnerUpdate } from "../types";
import { SectionCard as Section } from "@/components/shared/layout/SectionCard";
import { LabeledField as ControlGroup } from "@/components/shared/layout/LabeledField";
import SelectControl from "@/components/shared/input/Select";

type Props = {
  state: SpinnerState;
  update: SpinnerUpdate;
};

export default function SurfaceSection({ state, update }: Props) {
  return (
    <div className="space-y-6">
      <Section title="Surface" subtitle="Stroke contour and end-cap behavior.">
        <ControlGroup label="Line Cap">
          <SelectControl
            value={state.linecap}
            options={[
              { label: "Round", value: "round" },
              { label: "Square", value: "square" },
              { label: "Butt (Flat)", value: "butt" },
            ]}
            onChange={(v) => update("linecap", v as SpinnerState["linecap"])}
          />
        </ControlGroup>
      </Section>
    </div>
  );
}
