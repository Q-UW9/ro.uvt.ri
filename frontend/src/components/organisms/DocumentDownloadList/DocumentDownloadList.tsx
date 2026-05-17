import { FaFilePdf, FaFileWord, FaFileAlt, FaDownload } from 'react-icons/fa'

interface DocumentItem {
  label: string
  url: string
  fileType?: string
}

interface DocumentDownloadListProps {
  documents: DocumentItem[]
}

function FileTypeIcon({ fileType }: { fileType?: string }) {
  const type = fileType?.toUpperCase()

  if (type === 'PDF')
    return <FaFilePdf className="text-red-500" aria-hidden="true" />

  if (type === 'DOCX' || type === 'DOC')
    return <FaFileWord className="text-blue-500" aria-hidden="true" />

  return <FaFileAlt className="text-gray-400" aria-hidden="true" />
}

export function DocumentDownloadList({
  documents,
}: DocumentDownloadListProps) {
  if (!documents || documents.length === 0) return null

  return (
    <section aria-label="Downloadable documents">
      <ul className="space-y-3">
        {documents.map((doc, index) => (
          <li
            key={index}
            className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-200 bg-white p-5 transition hover:shadow-md md:flex-row md:items-center"
          >
            {/* Label + file type badge */}
            <div className="flex items-center gap-3">
              <span className="text-xl">
                <FileTypeIcon fileType={doc.fileType} />
              </span>

              <div>
                <p className="font-medium text-gray-900">
                  {doc.label}
                </p>

                {doc.fileType && (
                  <span className="mt-0.5 inline-block rounded bg-gray-100 px-2 py-0.5 text-xs font-semibold uppercase text-gray-500">
                    {doc.fileType}
                  </span>
                )}
              </div>
            </div>

            {/* Accessible download link */}
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              aria-label={`Download ${doc.label}${doc.fileType ? ` (${doc.fileType})` : ''}`}
              className="
                inline-flex items-center gap-2
                rounded-xl border border-blue-600
                bg-white px-5 py-2.5
                text-sm font-medium text-blue-600
                transition
                hover:bg-blue-50
                active:bg-blue-100
                focus:outline-none focus:ring-2 focus:ring-blue-300
              "
            >
              <FaDownload aria-hidden="true" />
              Download {doc.fileType ?? 'file'}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
