// SchemaMarkup.tsx — Reusable JSON-LD schema injection component
// Usage: <SchemaMarkup schema={schemaObject} /> or <SchemaMarkup schemas={[schema1, schema2]} />

interface SchemaMarkupProps {
  schema?: object
  schemas?: object[]
}

export default function SchemaMarkup({ schema, schemas }: SchemaMarkupProps) {
  const items = schemas ?? (schema ? [schema] : [])
  return (
    <>
      {items.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  )
}
