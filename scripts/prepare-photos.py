"""One-time conversion of generated PNG originals to requested local WebP assets."""
import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
assets = json.loads((root / 'scripts/photo-sources.json').read_text(encoding='utf-8'))
for asset in assets:
    destination = root / asset['destination']
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(asset['source']) as original:
        original.convert('RGB').save(destination, 'WEBP', quality=84, method=6)
        if asset['name'] == 'hero-main':
            original.convert('RGB').save(root/'public/images/hero/social-preview.jpg', 'JPEG', quality=85, optimize=True)
    print(f"{asset['name']}: {destination.stat().st_size // 1024} KB")
