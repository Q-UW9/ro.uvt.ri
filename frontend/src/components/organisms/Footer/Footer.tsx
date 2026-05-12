const footerSections = [
  {
    title: 'University',
<<<<<<< HEAD
    links: [
      'About',
      'Admissions',
      'Research',
    ],
=======
    links: ['About', 'Admissions', 'Research'],
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
  },

  {
    title: 'Programs',
<<<<<<< HEAD
    links: [
      'Erasmus',
      'International Students',
      'Courses',
    ],
=======
    links: ['Erasmus', 'International Students', 'Courses'],
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
  },

  {
    title: 'Support',
<<<<<<< HEAD
    links: [
      'Contact',
      'FAQ',
      'Documents',
    ],
=======
    links: ['Contact', 'FAQ', 'Documents'],
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
  },
]

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:grid-cols-4">
        
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-uvt-blue">
            UVT RI
          </h2>

          <p className="text-sm leading-6 text-gray-600">
<<<<<<< HEAD
            West University of Timișoara —
            International Relations platform.
          </p>
        </div>

        {/* Link Sections */}
=======
            West University of Timișoara — International Relations platform.
          </p>
        </div>

        {/* Sections */}
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
        {footerSections.map((section) => (
          <div
            key={section.title}
            className="space-y-4"
          >
            <h3 className="font-semibold text-gray-900">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-uvt-blue"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

<<<<<<< HEAD
      {/* Bottom Bar */}
=======
      {/* Bottom */}
>>>>>>> ba646335e604c4c7254f64ece240316625d70c16
      <div className="border-t border-gray-200 py-6">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-6 text-sm text-gray-500 md:flex-row">
          
          <p>
            © 2026 UVT RI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}