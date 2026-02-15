
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="border-b border-stone-800 bg-stone-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
            <MessageSquare className="w-6 h-6 text-green-500" />
          </div>
          <span className="font-bold text-lg tracking-tight">TikTok DM Logger</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
          <Link
            href="/terms"
            className={clsx(
              "transition-colors hover:text-green-400",
              isActive('/terms') ? "text-green-500 font-bold" : "text-stone-400"
            )}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className={clsx(
              "transition-colors hover:text-green-400",
              isActive('/privacy') ? "text-green-500 font-bold" : "text-stone-400"
            )}
          >
            Privacy Policy
          </Link>
          <Link
            href="https://t.me/tiktoknotifsbot"
            target="_blank"
            className="px-4 py-2 rounded-full bg-green-600 text-stone-950 font-bold hover:bg-green-500 transition-all hover:scale-105"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-stone-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-950 px-4 py-6 space-y-4 shadow-xl">
          <Link
            href="/terms"
            className={clsx(
              "block py-2 text-stone-400 hover:text-green-400 transition-colors",
              isActive('/terms') && "text-green-500 font-bold"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className={clsx(
              "block py-2 text-stone-400 hover:text-green-400 transition-colors",
              isActive('/privacy') && "text-green-500 font-bold"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            href="https://t.me/tiktoknotifsbot"
            target="_blank"
            className="block w-full text-center px-4 py-3 rounded-lg bg-green-600 text-stone-950 font-bold hover:bg-green-500 transition-all active:scale-95"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
