import { Button } from '../../atoms/Button/Button'

interface DocumentItem {
  title: string
  fileUrl: string
}

interface DocumentDownloadListProps {
  documents: DocumentItem[]
}

export function DocumentDownloadList({
  documents,
}: DocumentDownloadListProps) {
  return (
    <div className="space-y-4">
      {documents.map((doc, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-200 p-5 md:flex-row md:items-center"
        >
          <p className="font-medium">
            {doc.title}
          </p>

          <a
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">
              Download
            </Button>
          </a>
        </div>
      ))}
    </div>
  )
}