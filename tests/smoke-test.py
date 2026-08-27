from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
JS = ROOT / "js"

errors = []

html = INDEX.read_text(encoding="utf-8")

# 1. Every script referenced by index.html must exist.
scripts = re.findall(r'<script\s+src="([^"]+)"></script>', html)

for src in scripts:
    path = ROOT / src
    if not path.exists():
        errors.append(f"Missing script: {src}")

# 2. Every inline onclick open* function must exist somewhere in js/.
onclick_functions = sorted(set(
    re.findall(r'onclick="(open[A-Za-z0-9_]+)\(\)"', html)
))

for fn in onclick_functions:
    found = any(
        re.search(rf'\bfunction\s+{re.escape(fn)}\s*\(', p.read_text(encoding="utf-8"))
        for p in JS.rglob("*.js")
    )
    if not found:
        errors.append(f"Missing function: {fn}")

# 3. Detect duplicate HTML ids.
ids = re.findall(r'\bid="([^"]+)"', html)
seen = set()
duplicates = set()

for value in ids:
    if value in seen:
        duplicates.add(value)
    seen.add(value)

for value in sorted(duplicates):
    errors.append(f"Duplicate id in index.html: {value}")

print(f"Scripts checked: {len(scripts)}")
print(f"onclick functions checked: {len(onclick_functions)}")
print(f"Duplicate HTML ids: {len(duplicates)}")

if errors:
    print("\nFAIL")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print("\nPASS — structural smoke test")
