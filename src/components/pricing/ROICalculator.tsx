"use client";

import { useState, useMemo } from "react";
import FadeIn from "@/components/FadeIn";

export default function ROICalculator() {
  const [callsPerWeek, setCallsPerWeek] = useState(5);
  const [jobValue, setJobValue] = useState(350);
  const [closeRate, setCloseRate] = useState(30);

  const stats = useMemo(() => {
    const lostMonthly = Math.round(callsPerWeek * 4.33 * (closeRate / 100) * jobValue);
    const lostYearly = Math.round(lostMonthly * 12);
    const roi = Math.round(lostMonthly / 297);
    const jobsToBreakEven = Math.ceil(297 / (jobValue * (closeRate / 100)));
    const pctOfLoss = Math.min(Math.round((297 / lostMonthly) * 100), 100);
    return { lostMonthly, lostYearly, roi, jobsToBreakEven, pctOfLoss };
  }, [callsPerWeek, jobValue, closeRate]);

  const sliderClass =
    "w-full h-1.5 rounded-full appearance-none cursor-pointer accent-[#4DD9C0] bg-white/10";

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <FadeIn className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-[#4DD9C0]" />
          <span className="text-[#4DD9C0] text-xs font-semibold uppercase tracking-[0.2em] font-[family-name:var(--font-syne)]">
            Your Numbers
          </span>
        </FadeIn>

        <div className="mb-12">
          <h2 className="font-[family-name:var(--font-syne)] font-bold text-4xl md:text-5xl text-white leading-tight">
            How much are missed calls costing you?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Sliders */}
          <FadeIn>
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col gap-10">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-white/60 text-sm font-[family-name:var(--font-syne)] font-semibold uppercase tracking-widest text-xs">
                    Calls missed per week
                  </label>
                  <span className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#4DD9C0]">
                    {callsPerWeek}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={callsPerWeek}
                  onChange={(e) => setCallsPerWeek(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-white/25 text-xs mt-1">
                  <span>1</span><span>30</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-white/60 text-sm font-[family-name:var(--font-syne)] font-semibold uppercase tracking-widest text-xs">
                    Average job value
                  </label>
                  <span className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#4DD9C0]">
                    ${jobValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={2000}
                  step={50}
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-white/25 text-xs mt-1">
                  <span>$100</span><span>$2,000</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-white/60 text-sm font-[family-name:var(--font-syne)] font-semibold uppercase tracking-widest text-xs">
                    Close rate
                  </label>
                  <span className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#4DD9C0]">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-white/25 text-xs mt-1">
                  <span>10%</span><span>80%</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Stat cards */}
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Lost revenue / month",
                  value: `$${stats.lostMonthly.toLocaleString()}`,
                  sub: "from missed calls",
                },
                {
                  label: "Lost revenue / year",
                  value: `$${stats.lostYearly.toLocaleString()}`,
                  sub: "compounding loss",
                },
                {
                  label: "Your ROI at $297/mo",
                  value: `${stats.roi > 0 ? stats.roi : "—"}x`,
                  sub: "return on investment",
                },
                {
                  label: "Jobs to break even",
                  value: `${stats.jobsToBreakEven}`,
                  sub: "jobs pays for a full year",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/5 rounded-2xl p-6 flex flex-col gap-2"
                >
                  <p className="text-white/40 text-xs uppercase tracking-widest font-[family-name:var(--font-syne)]">
                    {card.label}
                  </p>
                  <p className="font-[family-name:var(--font-syne)] font-bold text-3xl text-[#4DD9C0] leading-none">
                    {card.value}
                  </p>
                  <p className="text-white/30 text-xs">{card.sub}</p>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-4 bg-[#111111] border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-baseline mb-3">
                <p className="text-white/50 text-sm">
                  Upshiftt costs{" "}
                  <span className="text-[#4DD9C0] font-semibold">
                    {stats.pctOfLoss}%
                  </span>{" "}
                  of what you&apos;re currently losing monthly
                </p>
              </div>
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4DD9C0] rounded-full transition-all duration-500"
                  style={{ width: `${stats.pctOfLoss}%` }}
                />
              </div>
              <div className="flex justify-between text-white/20 text-xs mt-2">
                <span>Upshiftt cost</span>
                <span>Your monthly loss</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
