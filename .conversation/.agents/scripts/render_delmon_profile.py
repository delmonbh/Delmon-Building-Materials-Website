import fitz
from pathlib import Path
pdf = Path('attached_assets/Delmon_Profile_250708_111630_1789980796485.pdf')
out = Path('.agents/outputs/delmon_profile')
out.mkdir(parents=True, exist_ok=True)
doc = fitz.open(pdf)
print('pages', doc.page_count)
print('metadata', doc.metadata)
for i, page in enumerate(doc):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    path = out / f'page-{i+1}.png'
    pix.save(path)
    print(path, page.rect)
    text = page.get_text('text')
    (out / f'page-{i+1}.txt').write_text(text, encoding='utf-8')
    print('text_chars', len(text))
    for img in page.get_images(full=True):
        xref = img[0]
        base = doc.extract_image(xref)
        ext = base['ext']
        img_path = out / f'page-{i+1}-image-{xref}.{ext}'
        img_path.write_bytes(base['image'])
        print('embedded', img_path, base['width'], base['height'])
