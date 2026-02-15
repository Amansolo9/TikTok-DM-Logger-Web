
import React from 'react';

export default function Terms() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-stone-100">Terms of Service</h1>
            <p className="text-stone-400 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-8 text-stone-300">
                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the TikTok DM Logger service ("Service"), you accept and agree to be bound by the terms and provision of this agreement.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">2. Description of Service</h2>
                    <p>
                        The Service provides a bridge between TikTok Business accounts and Telegram, allowing users to receive and manage Direct Messages via a Telegram Bot.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">3. User Responsibilities</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>You agree to use the Service only for lawful purposes.</li>
                        <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                        <li>You must not use the Service to send spam or unsolicited messages.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">4. Disclaimer</h2>
                    <p>
                        This Service is not affiliated with, endorsed by, or connected to TikTok Inc. or Telegram FZ-LLC.
                        The Service is provided "as is" without warranty of any kind.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4 text-green-500">5. Contact Information</h2>
                    <p>
                        For any questions regarding these Terms, please contact us at: <a href="mailto:amana67286535@gmail.com" className="text-green-400 hover:underline">amana67286535@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
