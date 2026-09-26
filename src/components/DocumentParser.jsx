function DocumentParser() {
  return (
    <section className="document-parser">
      <div className="parser-title">
        <span className="parser-icon">📄</span>

        <div>
          <h2>AI Document Parser</h2>
          <p>Upload your study material</p>
        </div>
      </div>

      <div className="upload-area">
        <div className="upload-icon">☁️</div>

        <h3>Drag and Drop Study Syllabus or PDF</h3>

        <p>Supports up to 25MB (PDF, DOCX)</p>

        <button>Browse Files</button>
      </div>
    </section>
  )
}

export default DocumentParser