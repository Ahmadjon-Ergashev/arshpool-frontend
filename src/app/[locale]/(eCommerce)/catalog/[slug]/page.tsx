declare type CatalogParams = {
  slug: string;
  locale: string;
};

export default function Catalog({ params }: { params: CatalogParams }): React.ReactElement {
  return <div>Catalog {params.locale}</div>;
}
