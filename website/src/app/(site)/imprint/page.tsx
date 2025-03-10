import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Imprint',
  description:
    'Legal information and contact details for Twistail, an open source React UI components library.',
}

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6">
      <div className="container mx-auto max-w-screen-xl py-12">
        {/* Header */}
        <div className="mb-14 space-y-4">
          <h1 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
            Imprint
          </h1>
          <p className="max-w-2xl text-gray-600 text-lg dark:text-gray-300">
            Legal information and contact details for Twistail.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-12">
          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Project Information
            </h2>
            <div className="prose prose-gray dark:prose-invert">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Twistail is an open source React UI components library created and maintained by
                Aris Ripandi.
              </p>

              {/* Contact info styled as table using grid with colons */}
              <div className="grid grid-cols-[120px_1fr] gap-y-3 text-gray-600 dark:text-gray-300">
                <div className="font-medium">Email:</div>
                <div>
                  <a
                    href="mailto:ask@twistail.com"
                    className="text-primary-600 hover:underline dark:text-primary-400"
                  >
                    ask@twistail.com
                  </a>
                </div>

                <div className="font-medium">Website:</div>
                <div>
                  <a
                    href="https://twistail.com"
                    className="text-primary-600 hover:underline dark:text-primary-400"
                  >
                    www.twistail.com
                  </a>
                </div>

                <div className="font-medium">GitHub:</div>
                <div>
                  <a
                    href="https://github.com/riipandi/twistail"
                    className="text-primary-600 hover:underline dark:text-primary-400"
                  >
                    github.com/riipandi/twistail
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Responsible for Content
            </h2>
            <div className="prose prose-gray dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                Aris Ripandi is responsible for the content of this website and the maintenance of
                the Twistail project.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Open Source License
            </h2>
            <div className="prose prose-gray dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                Twistail is licensed under a dual MIT and Apache 2.0 license, allowing you to choose
                either license according to your preference. Individual packages within the Twistail
                ecosystem may be distributed under MIT, Apache, or other specific licenses depending
                on the package.
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                For full license details, please refer to the LICENSE-MIT and LICENSE-APACHE files
                in the main GitHub repository, as well as the specific license files included with
                each individual package. Please refer to the license documentation for any specific
                package you&apos;re using to ensure compliance with its terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Disclaimer
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 leading-7 dark:text-gray-300">
                The information and code provided on this website and in the Twistail repository are
                for general informational purposes only. While I strive to keep the components
                well-tested and bug-free, Twistail is provided &quot;as is&quot; without warranty of
                any kind, express or implied. Use of the library is at your own risk. The
                maintainers of Twistail shall not be liable for any claims, damages, or other
                liabilities arising from the use of this software.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Copyright Information
            </h2>
            <div className="prose prose-gray dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300">
                &copy; {new Date().getFullYear()} Twistail and contributors. Different components
                and packages within the Twistail ecosystem may be licensed under different terms
                (MIT, Apache 2.0, or other specific licenses). All other trademarks, logos, and
                service marks displayed on the website are the property of their respective owners.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
