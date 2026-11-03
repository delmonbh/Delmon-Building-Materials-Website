import { Link } from 'wouter';
import { productCatalogue, type CatalogueGroup } from '@/data/product-catalogue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

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
      <Button asChild className="justify-self-center max-w-full whitespace-normal h-auto py-3 px-6 text-center">
        <Link href={`/contact?subject=${encodeURIComponent(title)}`}>Inquire About {title}</Link>
      </Button>
    </DialogContent>
  );
}

export function ProductCatalogue() {
  const additionalGroups = productCatalogue.filter(group => ['finishing', 'insulation'].includes(group.id));
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12" aria-labelledby="additional-materials-heading" data-testid="section-product-catalogue">
      <h2 id="additional-materials-heading" className="font-display text-2xl mb-5">Additional Materials</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {additionalGroups.map(group => (
          <Dialog key={group.id}>
            <DialogTrigger asChild>
              <button className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-left hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors" data-testid={`button-details-${group.id}`}>
                <span className="block font-display text-xl mb-2">{group.title}</span>
                <span className="text-sm text-primary font-semibold">View {group.products.length} product specifications →</span>
              </button>
            </DialogTrigger>
            <ProductDetailsContent title={group.title} groups={[group]} />
          </Dialog>
        ))}
      </div>
    </section>
  );
}
