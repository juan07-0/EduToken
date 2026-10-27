#!/usr/bin/env bash
# EduToken LMS - Lanzador para Google Chrome en macOS / Linux
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
INDEX_FILE="$DIR/index.html"

echo "🎓 Abriendo EduToken LMS (index.html) en Google Chrome..."

if [[ "$OSTYPE" == "darwin"* ]]; then
  open -a "Google Chrome" "$INDEX_FILE" 2>/dev/null || open "$INDEX_FILE"
else
  google-chrome "$INDEX_FILE" 2>/dev/null || xdg-open "$INDEX_FILE" 2>/dev/null || sensible-browser "$INDEX_FILE"
fi

echo "✅ Abierto con éxito."
