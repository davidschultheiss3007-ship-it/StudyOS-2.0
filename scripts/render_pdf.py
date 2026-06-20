#!/usr/bin/env python
"""Render a PDF into per-page PNGs so the slides' visuals can be read.

Usage:
    python scripts/render_pdf.py <pdf_path> <out_dir> [zoom]

Outputs page-001.png, page-002.png, ... into <out_dir> and prints the count.
"""
import sys
import os
import fitz  # PyMuPDF


def main():
    if len(sys.argv) < 3:
        print("usage: render_pdf.py <pdf> <out_dir> [zoom]", file=sys.stderr)
        sys.exit(2)
    pdf_path = sys.argv[1]
    out_dir = sys.argv[2]
    zoom = float(sys.argv[3]) if len(sys.argv) > 3 else 2.0

    os.makedirs(out_dir, exist_ok=True)
    doc = fitz.open(pdf_path)
    mat = fitz.Matrix(zoom, zoom)
    n = doc.page_count
    for i in range(n):
        page = doc.load_page(i)
        pix = page.get_pixmap(matrix=mat)
        pix.save(os.path.join(out_dir, f"page-{i + 1:03d}.png"))
    print(f"{n} pages -> {out_dir}")


if __name__ == "__main__":
    main()
