"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 text-center text-gray-700">
      <div className="container mx-auto px-4">
        

        <div className="flex justify-center gap-4 my-4">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5 hover:text-blue-700 transition-colors" />
          </Link>
          <Link href="https://github.com" target="_blank" aria-label="GitHub">
            <Github className="w-5 h-5 hover:text-black transition-colors" />
          </Link>
        </div>

        <div className="text-sm space-x-4 mb-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} YP Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
