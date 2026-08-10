#!/bin/bash

echo "=== PHASE 1 VERIFICATION ==="
echo ""

echo "✓ Project Structure:"
echo "  - app/: $(ls -1 app/ | wc -l) files"
echo "  - components/: $(find components -type f | wc -l) files" 
echo "  - lib/: $(ls -1 lib/ | wc -l) files"
echo "  - types/: $(ls -1 types/ | wc -l) files"
echo "  - public/images/: $(ls -1 public/images/ | wc -l) images"
echo ""

echo "✓ Build Status:"
npm run build 2>&1 | grep -E "(✓|✗|Failed|error)" | head -5
echo ""

echo "✓ Component Files:"
find components -name "*.tsx" -o -name "*.ts" | wc -l
echo "  files created"
echo ""

echo "✓ Scenes Data:"
grep -c "id: '" lib/scenes.ts
echo "  scenes defined"
echo ""

echo "✓ Text Blocks:"
grep -c "content: '" lib/scenes.ts
echo "  text blocks"
echo ""

echo "✓ Images Linked:"
grep -c "illustrationPath:" lib/scenes.ts
echo "  illustrations"
