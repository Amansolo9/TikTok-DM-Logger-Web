
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-stone-800 bg-stone-950 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-bold text-xl mb-4 text-stone-100">TikTok DM Logger</h3>
                        <p className="text-stone-400 text-sm max-w-sm">
                            The essential tool for Ethiopian businesses on TikTok. Never miss a lead, distinguish customers from casuals, and manage everything from Telegram.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-stone-100 mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-stone-400">
                            <li><Link href="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-stone-100 mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm text-stone-400">
                            <li><Link href="https://t.me/tiktoknotifsbot" target="_blank" className="hover:text-green-500 transition-colors">Telegram Bot</Link></li>
                            <li><a href="mailto:amana67286535@gmail.com" className="hover:text-green-500 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-stone-900 text-center text-stone-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} TikTok DM Logger. Not affiliated with TikTok Inc.</p>
                </div>
            </div>
        </footer>
    );
}
