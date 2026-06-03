import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      
      <div className="flex-1 pt-36 pb-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
              <p className="text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
            
            <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
              <section>
                <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing or using Lumorous's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
                <p>
                  Permission is granted to temporarily access the materials (information or software) on Lumorous's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                  <li>attempt to decompile or reverse engineer any software contained on the website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">3. User Accounts</h2>
                <p>
                  If you create an account on the platform, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">4. Limitations</h2>
                <p>
                  In no event shall Lumorous or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lumorous's website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">5. Revisions and Errata</h2>
                <p>
                  The materials appearing on Lumorous's website could include technical, typographical, or photographic errors. Lumorous does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-3">6. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of your jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold mb-3">Contact</h2>
                <p>
                  Questions about the Terms of Service should be sent to us at: <a href="mailto:Support.lumoraspace@gmail.com" className="text-sky-600 hover:underline">Support.lumoraspace@gmail.com</a>
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
