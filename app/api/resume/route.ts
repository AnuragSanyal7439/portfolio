import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export async function GET() {
  const resumePath = join(process.cwd(), "public", "resume.pdf");
  const resume = await readFile(resumePath);

  return new NextResponse(new Uint8Array(resume), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Anurag-Sanyal-Resume.pdf"',
      "Content-Length": resume.byteLength.toString(),
      "Cache-Control": "public, max-age=0, must-revalidate"
    }
  });
}
