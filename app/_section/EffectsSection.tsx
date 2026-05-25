import React from "react";
import { type SpinnerState, type SpinnerUpdate } from "../types";
import { SectionCard as Section } from "@/components/shared/layout/SectionCard";
import { LabeledField as ControlGroup } from "@/components/shared/layout/LabeledField";
import SliderControl from "@/components/shared/input/Slider";

type Props = {
  state: SpinnerState;
  update: SpinnerUpdate;
};

export default function EffectsSection({ state, update }: Props) {
  return (
    <div className="space-y-6">
      <Section title="Light & Shadow" subtitle="Glow effects">
        <ControlGroup label="Glow Intensity (Blur px)">
          <SliderControl
            value={state.glowIntensity}
            min={0}
            max={50}
            step={1}
            onChange={(v) => update("glowIntensity", Number(v))}
          />
        </ControlGroup>
      </Section>
    </div>
  );
}
