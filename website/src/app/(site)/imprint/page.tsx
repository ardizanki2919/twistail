import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'Legal information and company details for Twistail digital product studio.',
}

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6">
      <div className="container mx-auto max-w-screen-xl py-12">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h1 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
            Imprint
          </h1>
          <p className="max-w-2xl text-gray-600 text-lg dark:text-gray-300">
            Legal information and company details for Twistail digital product studio
          </p>
        </div>

        {/* Company Info */}
        <div className="space-y-12">
          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Twistail Authors
            </h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>Address: [REDACTED]</li>
                <li>Phone: +62 8xx xxxx xxxx</li>
                <li>Email: ask@twistail.com</li>
                <li>Website: twistail.com</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Legal Information
            </h2>
            <div className="prose prose-gray dark:prose-invert">
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li>Owner: Aris Ripandi</li>
                <li>Business Registration Number: [REDACTED]</li>
                <li>Tax ID: [REDACTED]</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Disclaimer
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 leading-7 dark:text-gray-300">
                The information provided on this website is for general informational purposes only.
                While we strive to keep the information up to date and correct, we make no
                representations or warranties of any kind, express or implied, about the
                completeness, accuracy, reliability, suitability, or availability with respect to
                the website or the information, products, services, or related graphics contained on
                the website for any purpose. Any reliance you place on such information is therefore
                strictly at your own risk.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
