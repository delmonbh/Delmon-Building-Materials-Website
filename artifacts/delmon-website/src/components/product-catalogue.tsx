import { Link } from 'wouter';
import { productCatalogue } from '@/data/product-catalogue';
import { Button } from '@/components/ui/button';

const total = productCatalogue.reduce((n, g) => n + g.products.length, 0);

export function ProductCatalogue() {
  return (
    <section
      aria-labelledby="catalogue-heading"
      className="max-w-[1200px] mx-auto px-4 md:px-8 mt-16 md:mt-24"
      data-testid="section-product-catalogue"
    >
      <div className="border-t border-neutral-200 pt-10 md:pt-14">
        <span className="text-primary font-semibold text-xs uppercase tracking-wider block mb-3">
          Product List · {total} items in {productCatalogue.length} groups
        </span>
        <h2 id="catalogue-heading" className="text-3xl md:text-4xl font-display font-medium leading-tight">
          Full Product <span className="italic text-muted-foreground">Specifications</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground" data-testid="text-catalogue-note">
          Specifications follow the supplied product list. Where an origin or unit is not stated, it is shown as not specified. Please confirm current availability with our team before ordering.
        </p>
      </div>

      <nav aria-label="Product groups" className="mt-8">
        <ul className="flex flex-wrap gap-2 list-none p-0" role="list">
          {productCatalogue.map((g) => (
            <li key={g.id} style={{ textAlign: 'left' }}>
              <a
                href={`#catalogue-${g.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(`catalogue-${g.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-foreground hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors"
                data-testid={`link-catalogue-group-${g.id}`}
              >
                {g.title}
                <span className="text-xs text-muted-foreground tabular-nums">{g.products.length}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 space-y-8">
        {productCatalogue.map((g) => (
          <section
            key={g.id}
            id={`catalogue-${g.id}`}
            aria-labelledby={`catalogue-title-${g.id}`}
            className="scroll-mt-28 rounded-[2rem] bg-neutral-50 border border-neutral-100 p-3"
            data-testid={`catalogue-group-${g.id}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 px-3 pt-4 pb-4">
              <div className="min-w-0">
                <span className="block h-0.5 w-8 bg-primary mb-3" aria-hidden="true" />
                <h3 id={`catalogue-title-${g.id}`} className="text-2xl font-display font-medium leading-tight">
                  {g.title}
                </h3>
              </div>
              <Button
                asChild
                variant="outline"
                className="self-start sm:self-auto rounded-xl border-primary/30 text-primary hover:bg-primary hover:text-white h-auto min-h-10 whitespace-normal"
                data-testid={`button-inquire-catalogue-${g.id}`}
              >
                <Link href={`/contact?subject=${encodeURIComponent(g.title)}`}>Inquire About {g.title}</Link>
              </Button>
            </div>

            <div className="rounded-[1.5rem] bg-white border border-neutral-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-[1.3fr_0.9fr_1.4fr_1.3fr] gap-4 px-6 py-3 bg-neutral-100/70 text-xs font-semibold uppercase tracking-wider text-muted-foreground" aria-hidden="true">
                <span>Product</span><span>Origin / Brand</span><span>Specification</span><span>Remarks</span>
              </div>
              <ul className="divide-y divide-neutral-100 list-none p-0 m-0" role="list">
                {g.products.map((p, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-1 md:grid-cols-[1.3fr_0.9fr_1.4fr_1.3fr] gap-2 md:gap-4 px-5 md:px-6 py-4 text-sm"
                    style={{ textAlign: 'left' }}
                    data-testid={`row-catalogue-${g.id}-${i}`}
                  >
                    <div className="font-semibold text-foreground break-words">{p.name}</div>
                    <Field label="Origin / Brand">
                      {p.origin ?? <span className="italic text-muted-foreground">Not specified</span>}
                    </Field>
                    <Field label="Specification">{p.specification}</Field>
                    <Field label="Remarks">
                      {p.remarks ?? <span className="text-muted-foreground">—</span>}
                    </Field>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 md:block min-w-0">
      <span className="md:sr-only w-28 shrink-0 text-xs font-semibold uppercase tracking-wider text-muted-foreground pt-0.5">
        {label}
      </span>
      <span className="text-foreground/85 break-words min-w-0">{children}</span>
    </div>
  );
}
