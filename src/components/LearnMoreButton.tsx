
"use client";

import React from 'react';

export default function LearnMoreButton() {
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex h-12 items-center justify-center rounded-md border border-stone-800 bg-transparent px-8 text-sm font-medium text-stone-200 shadow-sm transition-colors hover:bg-stone-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-stone-700 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
        >
            Learn More
        </button>
    );
}
