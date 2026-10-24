import React from 'react';
import { DollarSign, AlertCircle, Bed, Utensils, Compass, Bus } from 'lucide-react';
import { CostBreakdown } from '../types/travel';

interface EstimatedCostCardProps {
  cost: CostBreakdown;
  destination: string;
}

export function EstimatedCostCard({ cost, destination }: EstimatedCostCardProps) {
  return (
    <div className="bg-[#FAF9F5] border border-stone-300/80 rounded-xl p-5 my-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 border-b border-stone-200">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
            Transparent Budget Breakdown
          </span>
          <h3 className="text-base font-serif font-bold text-slate-900 mt-0.5">
            Estimated Trip Expenses for {destination}
          </h3>
        </div>
        <div className="text-right">
          <span className="text-xs text-stone-500 block">Total Range</span>
          <span className="text-sm font-bold text-[#0f2942]">{cost.totalEstimate}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-4">
        {/* Accommodation */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-stone-200/80">
          <Bed className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-semibold text-stone-800 block">Stay per Night</span>
            <span className="text-xs text-stone-600">{cost.stayPerNight}</span>
          </div>
        </div>

        {/* Food */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-stone-200/80">
          <Utensils className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-semibold text-stone-800 block">Food & Dining / Day</span>
            <span className="text-xs text-stone-600">{cost.foodPerDay}</span>
          </div>
        </div>

        {/* Transport */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-stone-200/80">
          <Bus className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-semibold text-stone-800 block">Local Transportation</span>
            <span className="text-xs text-stone-600">{cost.localTransport}</span>
          </div>
        </div>

        {/* Activities */}
        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-white border border-stone-200/80">
          <Compass className="w-4 h-4 text-[#0284c7] mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-semibold text-stone-800 block">Permits & Activities</span>
            <span className="text-xs text-stone-600">{cost.activities}</span>
          </div>
        </div>
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="flex items-start gap-2 pt-3 border-t border-stone-200 text-xs text-stone-500">
        <AlertCircle className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
        <p className="text-[11px] leading-relaxed italic">
          <strong>Editorial Pricing Notice:</strong> {cost.disclaimer}
        </p>
      </div>
    </div>
  );
}
