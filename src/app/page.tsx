
import Link from 'next/link';
import { ArrowRight, Bell, Filter, MessageCircle } from 'lucide-react';
import LearnMoreButton from '@/components/LearnMoreButton';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-950/40 via-stone-950/0 to-stone-950/0 pointer-events-none"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-400 font-medium">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Now Beta Testing
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
              TikTok Business DMs, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Managed on Telegram.
              </span>
            </h1>

            <p className="text-xl text-stone-400 max-w-[42rem] leading-relaxed">
              Ethiopian businesses use Telegram for everything. Why check TikTok for leads?
              Get instant alerts, distinguish real customers from spam, and reply faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Link
                href="https://t.me/tiktoknotifsbot"
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-bold text-stone-950 shadow transition-all hover:bg-green-500 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
              >
                Connect Telegram Bot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <LearnMoreButton />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-stone-900/40 border-y border-stone-900/50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-stone-950/50 border border-stone-900 hover:border-green-500/30 transition-all duration-300">
              <div className="p-4 rounded-full bg-green-500/10 text-green-500 mb-2">
                <Bell className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-100">Instant Notifications</h3>
              <p className="text-stone-400">
                Receive TikTok DMs directly in your Telegram. Never miss a potential sale because you forgot to check the TikTok app.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-stone-950/50 border border-stone-900 hover:border-green-500/30 transition-all duration-300 transform md:-translate-y-4">
              <div className="p-4 rounded-full bg-green-500/10 text-green-500 mb-2">
                <Filter className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-100">Smart Filtering</h3>
              <p className="text-stone-400">
                We automatically distinguish between business inquiries and casual "Hi" messages, so you focus on what pays.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl bg-stone-950/50 border border-stone-900 hover:border-green-500/30 transition-all duration-300">
              <div className="p-4 rounded-full bg-green-500/10 text-green-500 mb-2">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-100">Centralized Chat</h3>
              <p className="text-stone-400">
                Manage all your customer communications in one place. Keep your workflow simple and efficient on Telegram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="relative rounded-3xl bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800 overflow-hidden p-12 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Streamline Your Business?</h2>
              <p className="text-stone-400">
                Join hundreds of Ethiopian businesses using our tool to manage their TikTok presence efficiently.
              </p>
              <Link
                href="https://t.me/tiktoknotifsbot"
                target="_blank"
                className="inline-flex h-14 items-center justify-center rounded-full bg-green-600 px-10 text-base font-bold text-stone-950 shadow-lg hover:bg-green-500 hover:shadow-green-500/20 transition-all hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
