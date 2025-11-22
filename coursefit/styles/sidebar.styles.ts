const sidebarStyles = {
  aside:
    "w-64 h-full bg-white border-r border-slate-200 flex flex-col flex-shrink-0 z-20 shadow-xl shadow-slate-200/50 relative overflow-hidden",
  logoArea: "p-8 pb-6 flex-shrink-0",
  logoBtn: "flex items-center gap-3 mb-2 group cursor-pointer",
  logoBox:
    "relative w-12 h-12 bg-white border-2 border-slate-900 rounded-xl shadow-[4px_4px_0px_0px_#0f172a] group-hover:shadow-[2px_2px_0px_0px_#0f172a] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center overflow-hidden",
  logoIcon: "text-slate-900 relative z-10",
  logoEyes:
    "absolute top-[22px] w-[4px] h-[4px] bg-slate-900 rounded-full animate-pulse z-20 group-hover:scale-150 transition-transform",
  logoLabel: "font-black text-xl tracking-tighter text-slate-900 leading-none",
  logoSub:
    "text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-1 flex items-center gap-1",
  divider: "h-0.5 bg-slate-100 mx-6 mb-4 flex-shrink-0",

  historySection: "flex-grow flex flex-col min-h-0",
  historyTitleBox: "px-6 pb-2 pt-2 flex-shrink-0",
  historyTitle:
    "text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2",
  historyList: "flex-grow overflow-y-auto px-6 py-2 space-y-3 no-scrollbar",
  historyItem:
    "group relative p-4 rounded-xl bg-white border border-slate-100 hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all duration-200 overflow-hidden",
  historyItemBarMajor:
    "absolute left-0 top-0 h-full w-1 bg-blue-200 group-hover:bg-blue-600 transition-colors",
  historyItemBarGeneral:
    "absolute left-0 top-0 h-full w-1 bg-purple-200 group-hover:bg-purple-600 transition-colors",
  historyItemContent: "flex items-start gap-3 pl-2",
  fileTextIcon:
    "text-slate-400 group-hover:text-indigo-600 mt-0.5 transition-colors flex-shrink-0",
  historyItemMain: "flex-grow min-w-0 relative",
  historyInput:
    "w-full text-sm font-bold text-slate-900 bg-white border border-blue-300 rounded px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500",
  historyItemTitle:
    "text-sm font-bold text-slate-700 group-hover:text-indigo-900 transition-colors truncate pr-6",
  historyEditBtn:
    "absolute right-[-8px] top-[-4px] p-1.5 text-slate-300 hover:text-blue-600 hover:bg-blue-50 rounded-md opacity-0 group-hover:opacity-100 transition-all z-10",
  historyDate: "text-[10px] text-slate-400 mt-1 font-medium",

  newAnalysisBox: "p-6 pt-4 flex-shrink-0",
  newAnalysisBtn:
    "w-full group flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-slate-300 text-slate-500 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200 font-bold text-sm",
  plusIcon: "group-hover:rotate-90 transition-transform duration-300",
};

export default sidebarStyles;
