import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how Twistail handles and protects your information.',
}

export default function Page() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 md:px-6">
      <div className="container mx-auto max-w-screen-xl py-12">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h1 className="font-bold text-4xl text-gray-900 tracking-tight md:text-5xl dark:text-white">
            Privacy Policy
          </h1>
          <p className="max-w-3xl text-gray-600 text-lg dark:text-gray-300">
            At Twistail, we value your privacy and are committed to protecting your information
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Introduction
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Twistail Authors (&apos;we,&apos; &apos;our,&apos; or &apos;us&apos;) is committed
                to protecting and respecting your privacy. This Privacy Policy explains how we
                collect, use, and disclose information about you when you use our app.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Information We Collect
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Our app and website do not collect any personal data from users.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              How We Use Your Information
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Since we do not collect any data, we do not use your information for any purpose.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Sharing Your Information
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                We do not share your personal information with third parties because we do not
                collect any data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Data Security
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Even though we do not collect data, we take reasonable measures to protect the
                information we do have from unauthorized access, loss, or misuse. However, no
                security measure is completely secure, so we cannot guarantee the absolute security
                of any information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Your Rights
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Since we do not collect any data, there is no personal information we hold about you
                that you need to access, correct, or delete.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Changes to This Privacy Policy
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on our app and website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-6 font-semibold text-2xl text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                If you have any questions or concerns about this Privacy Policy, please contact us
                at:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600 dark:text-gray-300">
                <li>Email: ask@twistail.com</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
