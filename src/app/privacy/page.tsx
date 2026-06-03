import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      
      <div className="flex-1 pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
              <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
              <section>
                <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
                <p>
                  Welcome to Lumorous ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">2. Data We Collect</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">5. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:Support.lumoraspace@gmail.com" className="text-sky-600 hover:underline">Support.lumoraspace@gmail.com</a>
                </p>
              </section>
              
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
