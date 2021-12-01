import MarkDown from '@/components/markdown'

const markdown = `# Upload

## Api
### Props`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}