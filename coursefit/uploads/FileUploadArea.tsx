import React, { useRef } from "react";
import { FileSpreadsheet, Upload, X } from "lucide-react";
import uploadSectionStyles from "../styles/uploadSectionStyles";

interface FileUploadAreaProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  isAnalyzing: boolean;
}

const FileUploadArea: React.FC<FileUploadAreaProps> = ({
  file,
  setFile,
  isAnalyzing,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const triggerFileSelect = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className={[
        uploadSectionStyles.uploadAreaBase,
        file
          ? uploadSectionStyles.uploadAreaActive
          : uploadSectionStyles.uploadAreaInactive,
      ].join(" ")}
      onClick={triggerFileSelect}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/png, image/jpeg, image/jpg, application/pdf"
        className="hidden"
        onChange={handleFileChange}
        disabled={isAnalyzing}
      />
      {file ? (
        <div className={uploadSectionStyles.fileCard}>
          <div className={uploadSectionStyles.fileIcon}>
            <FileSpreadsheet size={32} />
          </div>
          <p className="font-bold text-lg text-slate-800 truncate max-w-xs">
            {file.name}
          </p>
          <p className="text-sm text-blue-500 font-medium mt-1">
            업로드 준비 완료
          </p>
          <button
            onClick={handleRemoveFile}
            className={uploadSectionStyles.fileRemoveBtn}
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div className="text-center space-y-3">
          <div className={uploadSectionStyles.uploadPromptIcon}>
            <Upload size={24} strokeWidth={2.5} />
          </div>
          <p className="text-lg font-bold text-slate-600 group-hover:text-indigo-900 transition-colors">
            파일을 드래그하거나 클릭하세요
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUploadArea;
