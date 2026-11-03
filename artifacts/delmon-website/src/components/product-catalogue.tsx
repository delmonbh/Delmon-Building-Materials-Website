import { type CatalogueGroup } from '@/data/product-catalogue';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export function ProductDetailsContent({ title, groups }: { title: string; groups: CatalogueGroup[] }) {
  return (
    <DialogContent className="w-[calc(100%-2rem)] max-w-4xl rounded-2xl p-5 sm:p-8" data-testid="dialog-product-details">
      <DialogHeader className="pr-6">
        <DialogTitle className="font-display text-2xl sm:text-3xl leading-tight">{title}</DialogTitle>
        <DialogDescription style={{ textAlign: 'left' }}>
          Specifications from our product list. Please confirm current availability before ordering. Missing origins and units are not assumed.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6 min-w-0">
        {groups.map(group => (
          <section key={group.id} aria-labelledby={`details-${group.id}`}>
            <h3 id={`details-${group.id}`} className="text-xl text-primary mb-3">{group.title}</h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {group.products.map((product, index) => (
                <li key={index} className="rounded-xl border border-neutral-200 bg-neutral-50 p-4" style={{ textAlign: 'left' }} data-testid={`row-catalogue-${group.id}-${index}`}>
                  <h4 className="font-sans font-semibold text-base mb-3">{product.name}</h4>
                  <dl className="grid gap-3 sm:grid-cols-2 text-sm">
                    <div><dt className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Origin / Brand</dt><dd>{product.origin ?? 'Not specified'}</dd></div>
                    <div><dt className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Specification</dt><dd className="break-words">{product.specification}</dd></div>
                    {product.remarks && <div className="sm:col-span-2"><dt className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Remarks</dt><dd>{product.remarks}</dd></div>}
                  </dl>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </DialogContent>
  );
}

