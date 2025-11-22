import React, { useRef } from "react";
import { BookOpenCheck, AlertCircle } from "lucide-react";
import uploadSectionStyles from "../styles/uploadSectionStyles";

interface MajorInputProps {
  userMajor: string;
  setUserMajor: React.Dispatch<React.SetStateAction<string>>;
  inputError: boolean;
  setInputError: React.Dispatch<React.SetStateAction<boolean>>;
}

const MajorInput: React.FC<MajorInputProps> = ({
  userMajor,
  setUserMajor,
  inputError,
  setInputError,
}) => {
  const majorInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={uploadSectionStyles.majorArea}>
      <div
        className={`${uploadSectionStyles.majorBg} ${
          inputError ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={[
          uploadSectionStyles.majorInputBox,
          inputError
            ? uploadSectionStyles.errorInput
            : uploadSectionStyles.normalInput,
        ].join(" ")}
      >
        <BookOpenCheck
          className={`mr-4 transition-colors ${
            inputError ? "text-red-500" : "text-indigo-400"
          }`}
        />
        <input
          ref={majorInputRef}
          type="text"
          placeholder="현재 전공학과를 입력해주세요 (전공 분석시 필수)"
          value={userMajor}
          onChange={(e) => {
            setUserMajor(e.target.value);
            if (e.target.value) setInputError(false);
          }}
          className="w-full bg-transparent font-bold text-slate-800 placeholder-slate-400 focus:outline-none"
        />
        {inputError && (
          <AlertCircle size={20} className="text-red-500 animate-pulse ml-2" />
        )}
      </div>
      {inputError && (
        <p className="absolute -bottom-6 left-2 text-xs font-bold text-red-500 animate-bounce">
          전공 분석을 위해 학과를 입력해주세요!
        </p>
      )}
    </div>
  );
};

export default MajorInput;
