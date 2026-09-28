import { FileText, CloudUpload } from "lucide-react";
function DocumentParser() {
  return (
    <section className="document-parser">
      <div className="parser-title">
        <FileText size={18} />

        <div>
          <h2>AI Document Parser</h2>
          <p>Upload your study material</p>
        </div>
      </div>

      <div className="upload-area">
        <div className="upload-icon">
          <CloudUpload size={30} />
        </div>

        <h3>Drag and Drop Study Syllabus or PDF</h3>

        <p>Supports up to 25MB (PDF, DOCX)</p>

        <button>Browse Files</button>
      </div>
    </section>
  );
}

export default DocumentParser;
