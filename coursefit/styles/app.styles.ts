const appStyles = {
  container: "flex h-screen w-full bg-[#F5F9FF] font-sans overflow-hidden",
  main: "flex-1 h-full relative flex flex-col overflow-y-auto",
  bgBlueBlob:
    "fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none",
  bgPurpleBlob:
    "fixed bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-[100px] pointer-events-none",
  bgYellowBlob:
    "fixed top-[20%] left-[15%] w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[80px] pointer-events-none",
  contentContainer:
    "flex-1 relative z-10 p-8 md:p-12 flex flex-col items-center min-h-min max-w-7xl mx-auto w-full",
  analyzingWrapper:
    "flex-1 flex flex-col items-center justify-center text-center animate-fade-in my-auto",
  analyzingBox: "relative w-28 h-28 mb-8",
  analyzingPulse:
    "absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse-slow",
  analyzingInnerBox:
    "relative bg-white w-full h-full rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-white flex items-center justify-center",
  analyzingSpinner: "w-12 h-12 text-black animate-spin",
  analyzingBadge:
    "absolute -top-3 -right-3 bg-black text-white p-2 rounded-full shadow-lg animate-bounce",
  analyzingTitle: "text-3xl font-black text-slate-900 mb-4 tracking-tight",
  analyzingDesc: "text-slate-500 font-medium text-lg",
  resultWrapper: "w-full flex flex-col flex-grow justify-center",
  resultInnerWrapper: "flex-grow flex items-center justify-center py-10",
};

export default appStyles;
