"use client";

import { useState, useMemo } from "react";
import FadeIn from "@/components/FadeIn";

const PLAN_PRICE = 297;

// Conservative "typical job" defaults, based on 2026 national cost guides
// (adjusted up slightly for California pricing).
const TRADES: { name: string; jobValue: number }[] = [
  { name: "Tree Service", jobValue: 1200 },
  { name: "Roofing", jobValue: 4000 },
  { name: "HVAC", jobValue: 800 },
  { name: "Plumbing", jobValue: 450 },
  { name: "Fencing", jobValue: 3000 },
  { name: "Landscaping", jobValue: 2500 },
  { name: "Other", jobValue: 1000 },
];

const WEEKS_PER_MONTH = 52 / 12;

export default function ROICalculator() {
  const [trade, setTrade] = useState(TRADES[0].name);
  const [missedPerWeek, setMissedPerWeek] = useState(3);
  const [jobValue, setJobValue] = useState(TRADES[0].jobValue);
  const [closeRate, setCloseRate] = useState(40);

  const stats = useMemo(() => {
    const lostLeadsMonthly = missedPerWeek * WEEKS_PER_MONTH;
    const lostJobsMonthly = lostLeadsMonthly * (closeRate / 100);
    const lostMonthly = Math.round(lostJobsMonthly * jobValue);
    const lostYearly = lostMonthly * 12;
    const jobsToCoverMonth = Math.max(1, Math.ceil(PLAN_PRICE / jobValue));
    const pctOfLoss =
      lostMonthly > 0 ? Math.min(Math.round((PLAN_PRICE / lostMonthly) * 100), 100) : 100;
    return {
      lostJobsMonthly: Math.round(lostJobsMonthly * 10) / 10,
      lostMonthly,
      lostYearly,
      jobsToCoverMonth,
      pctOfLoss,
    };
  }, [missedPerWeek, jobValue, closeRate]);

  function onTradeChange(name: string) {
    setTrade(name);
    const t = TRADES.find((x) => x.name === name);
    if (t) setJobValue(t.jobValue);
  }

  const sliderClass =
    "w-full h-2 rounded-full appearance-none cursor-pointer accent-[#4DD9C0] bg-white/10 touch-pan-y";
  const labelClass =
    "text-white/60 font-[family-name:var(--font-syne)] font-semibold uppercase tracking-widest text-xs";

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
            What could missed leads be costing you?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Inputs */}
          <FadeIn>
            <div className="bg-[#111111] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col gap-9">
              {/* Trade */}
              <div>
                <label htmlFor="trade" className={`${labelClass} block mb-3`}>
                  Type of business
                </label>
                <select
                  id="trade"
                  value={trade}
                  onChange={(e) => onTradeChange(e.target.value)}
                  className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3.5 text-white text-base focus:outline-none focus:border-[#4DD9C0]"
                >
                  {TRADES.map((t) => (
                    <option key={t.name} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Missed leads */}
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label htmlFor="missed" className={labelClass}>
                    Missed calls &amp; leads per week
                  </label>
                  <span className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#4DD9C0]">
                    {missedPerWeek}
                  </span>
                </div>
                <input
                  id="missed"
                  type="range"
                  min={1}
                  max={20}
                  step={1}
                  value={missedPerWeek}
                  onChange={(e) => setMissedPerWeek(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-white/25 text-xs mt-1">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Job value */}
              <div>
                <div className="flex justify-between items-baseline mb-4 gap-4">
                  <label htmlFor="jobValue" className={labelClass}>
                    Typical job value
                  </label>
                  <div className="flex items-center gap-1 text-[#4DD9C0] font-[family-name:var(--font-syne)] font-bold text-2xl">
                    <span>$</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      aria-label="Typical job value in dollars"
                      min={100}
                      max={20000}
                      step={50}
                      value={jobValue}
                      onChange={(e) =>
                        setJobValue(Math.max(0, Math.min(20000, Number(e.target.value) || 0)))
                      }
                      className="w-28 bg-transparent text-right focus:outline-none border-b border-white/10 focus:border-[#4DD9C0]"
                    />
                  </div>
                </div>
                <input
                  id="jobValue"
                  type="range"
                  min={100}
                  max={10000}
                  step={50}
                  value={Math.min(jobValue, 10000)}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-white/25 text-xs mt-1">
                  <span>$100</span>
                  <span>$10,000</span>
                </div>
                <p className="text-white/35 text-xs mt-3">
                  Use your typical job, not your biggest one.
                </p>
              </div>

              {/* Close rate */}
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <label htmlFor="closeRate" className={labelClass}>
                    % of leads that become jobs
                  </label>
                  <span className="font-[family-name:var(--font-syne)] font-bold text-2xl text-[#4DD9C0]">
                    {closeRate}%
                  </span>
                </div>
                <input
                  id="closeRate"
                  type="range"
                  min={10}
                  max={80}
                  step={5}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className={sliderClass}
                />
                <div className="flex justify-between text-white/25 text-xs mt-1">
                  <span>10%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Results */}
          <FadeIn delay={0.1}>
            <div className="bg-[#0F1A18] border border-[#4DD9C0]/30 rounded-2xl p-6 md:p-7 mb-4">
              <p className="text-white/50 text-xs uppercase tracking-widest font-[family-name:var(--font-syne)] mb-2">
                Estimated lost revenue / month
              </p>
              <p className="font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl text-[#4DD9C0] leading-none">
                ${stats.lostMonthly.toLocaleString()}
              </p>
              <p className="text-white/40 text-sm mt-3">
                About {stats.lostJobsMonthly} lost jobs a month
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  label: "Lost revenue / year",
                  value: `$${stats.lostYearly.toLocaleString()}`,
                  sub: "at the same pace",
                },
                {
                  label: "Recover just 25%",
                  value: `$${Math.round(stats.lostMonthly * 0.25).toLocaleString()}`,
                  sub: "back in your pocket each month",
                },
                {
                  label: `Jobs to cover $${PLAN_PRICE}/mo`,
                  value: `${stats.jobsToCoverMonth}`,
                  sub: stats.jobsToCoverMonth === 1 ? "job per month" : "jobs per month",
                },
                {
                  label: "Upshiftt vs. your loss",
                  value: `${stats.pctOfLoss}%`,
                  sub: "of what you may be losing monthly",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/5 rounded-2xl p-5 md:p-6 flex flex-col gap-2"
                >
                  <p className="text-white/40 text-xs uppercase tracking-widest font-[family-name:var(--font-syne)]">
                    {card.label}
                  </p>
                  <p className="font-[family-name:var(--font-syne)] font-bold text-3xl text-white leading-none">
                    {card.value}
                  </p>
                  <p className="text-white/30 text-xs">{card.sub}</p>
                </div>
              ))}
            </div>

            <p className="text-white/30 text-xs mt-4 leading-relaxed">
              Estimates are based on the numbers you enter and are not a
              guarantee of results. Revenue shown is gross, before job costs.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
