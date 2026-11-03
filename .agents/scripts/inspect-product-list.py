from pathlib import Path
import fitz

source = Path("attached_assets/Delmon_Product_List_Combined_Updated_1793699605831.pdf")
out = Path("/tmp/delmon-product-list")
out.mkdir(parents=True, exist_ok=True)
doc = fitz.open(source)
for index, page in enumerate(doc):
    page.get_pixmap(matrix=fitz.Matrix(1.5, 1.5)).save(str(out / f"page-{index + 1}.png"))
    print(f"PAGE {index + 1}\n{page.get_text()}")
