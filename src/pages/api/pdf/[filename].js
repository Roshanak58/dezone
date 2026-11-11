import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { filename } = req.query;
  // filename باید وجود داشته باشد
  if (!filename || typeof filename !== "string") {
    return res.status(400).json({
      message: "PDF filename is required",
    });
  }

  // جلوگیری از Path Traversal
  const safeFilename = path.basename(filename);

  // فقط PDF
  if (path.extname(safeFilename).toLowerCase() !== ".pdf") {
    return res.status(400).json({
      message: "Only PDF files are allowed",
    });
  }

  const filePath = path.join(
    process.cwd(),
    "src",
    "constants",
    safeFilename
  );

  console.log("Requested PDF:", safeFilename);
  console.log("PDF path:", filePath);

  // بررسی وجود فایل
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({
      message: "PDF not found",
      filename: safeFilename,
    });
  }

  try {
    const pdf = fs.readFileSync(filePath);

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "inline");
    res.setHeader("Content-Length", pdf.length);

    return res.status(200).send(pdf);
  } catch (error) {
    console.error("PDF read error:", error);

    return res.status(500).json({
      message: "Error reading PDF file",
    });
  }
}