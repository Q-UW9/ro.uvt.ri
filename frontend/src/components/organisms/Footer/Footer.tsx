export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">

      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-4">

        <div>
          <h3 className="mb-4 text-xl font-bold">
            UVT RI
          </h3>

          <p className="text-sm text-gray-600">
            West University of Timișoara
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">
            Admissions
          </h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>Requirements</li>
            <li>Application</li>
            <li>Deadlines</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">
            Erasmus
          </h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>Mobility</li>
            <li>Partners</li>
            <li>Programs</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold">
            Contact
          </h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>Address</li>
            <li>Email</li>
            <li>Phone</li>
          </ul>
        </div>

      </div>

    </footer>
  )
}