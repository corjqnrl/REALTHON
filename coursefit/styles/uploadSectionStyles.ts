// styles/uploadSectionStyles.ts

const uploadSectionStyles = {
  wrapper: "w-full max-w-2xl mx-auto flex flex-col gap-6 animate-slide-up",

  // 업로드 영역
  uploadAreaBase:
    "group relative w-full h-56 rounded-3xl border-[3px] border-dashed transition-all duration-300 flex flex-col items-center justify-center cursor-pointer",
  uploadAreaActive:
    "bg-blue-50/30 border-blue-300 border-solid ring-4 ring-blue-50",
  uploadAreaInactive:
    "border-slate-200 hover:border-indigo-400 hover:bg-slate-50",

  // 아이콘 및 카드
  iconBox:
    "p-2.5 bg-white text-indigo-600 border-2 border-indigo-100 rounded-xl shadow-lg shadow-indigo-100 transform -rotate-3 ring-2 ring-white",
  fileCard: "flex flex-col items-center animate-fade-in p-6 w-full max-w-2xl",
  fileIcon:
    "w-16 h-16 bg-white rounded-2xl shadow border border-blue-100 flex items-center justify-center text-blue-600 mb-3",
  fileRemoveBtn:
    "absolute top-4 right-4 p-2 bg-white rounded-full shadow-sm border border-slate-100 text-slate-400 hover:text-red-500 hover:border-red-100 transition-all",
  uploadPromptIcon:
    "w-14 h-14 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-white group-hover:shadow-md transition-all duration-300",

  // 전공 입력 영역
  majorArea: "relative group z-10",
  majorBg:
    "absolute inset-0 bg-red-100 rounded-2xl blur transition-opacity duration-300",
  majorInputBox:
    "relative flex items-center bg-white border-2 rounded-2xl p-4 shadow-sm transition-all duration-300",
  errorInput: "border-red-400 ring-2 ring-red-100",
  normalInput:
    "border-slate-100 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-50",

  // 분석 버튼
  analyzeBtn:
    "rounded-2xl p-5 text-left transition-all border bg-white group overflow-hidden",
  analyzeBtnInactive:
    "bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed",
  generalActive:
    "border-slate-100 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-100 hover:-translate-y-1 active:translate-y-0 active:shadow-none",
  majorActive:
    "border-slate-100 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-1 active:translate-y-0 active:shadow-none",
};

export default uploadSectionStyles;
