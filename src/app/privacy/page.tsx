
import React from 'react';

export default function Privacy() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-stone-100">Privacy Policy</h1>
            <p className="text-stone-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-stone-300">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">1. Information We Collect</h2>
                    <p>
                        To provide our Service, we collect:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Telegram User ID:</strong> To authenticate you and send notifications.</li>
                        <li><strong>TikTok Account Data:</strong> Basic profile information and DM content authorized by you via the TikTok API.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">2. How We Use Your Information</h2>
                    <p>
                        We use your information solely to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Forward TikTok Direct Messages to your Telegram account.</li>
                        <li>Filter spam and categorize messages.</li>
                        <li>Ensure the security and stability of the Service.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">3. Data Retention</h2>
                    <p>
                        We do not permanently store the content of your messages on our servers. Metadata may be logged temporarily for debugging and analytics purposes.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">4. Third-Party Services</h2>
                    <p>
                        Our Service relies on the APIs of TikTok and Telegram. We encourage you to review their respective privacy policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:amana67286535@gmail.com" className="text-green-400 hover:underline">amana67286535@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
