import React from 'react'
import Link from 'next/link'

const LinksBar = () => {
  return (
    <div className="w-full bg-links-bar">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-white">
        <Link href="/consumer/resource/A" className="link-single">A</Link>
        <Link href="/consumer/resource/B" className="link-single">B</Link>
        <Link href="/consumer/resource/C" className="link-single">C</Link>
        <Link href="/consumer/resource/D" className="link-single">D</Link>
        <Link href="/consumer/resource/E" className="link-single">E</Link>
        <Link href="/consumer/resource/F" className="link-single">F</Link>
        <Link href="/consumer/resource/G" className="link-single">G</Link>
        <Link href="/consumer/resource/H" className="link-single">H</Link>
        <Link href="/consumer/resource/I" className="link-single">I</Link>
        <Link href="/consumer/resource/J" className="link-single">J</Link>
        <Link href="/consumer/resource/K" className="link-single">K</Link>
        <Link href="/consumer/resource/L" className="link-single">L</Link>
        <Link href="/consumer/resource/M" className="link-single">M</Link>
        <Link href="/consumer/resource/N" className="link-single">N</Link>
        <Link href="/consumer/resource/O" className="link-single">O</Link>
        <Link href="/consumer/resource/P" className="link-single">P</Link>
        <Link href="/consumer/resource/Q" className="link-single">Q</Link>
        <Link href="/consumer/resource/R" className="link-single">R</Link>
        <Link href="/consumer/resource/S" className="link-single">S</Link>
        <Link href="/consumer/resource/T" className="link-single">T</Link>
        <Link href="/consumer/resource/U" className="link-single">U</Link>
        <Link href="/consumer/resource/V" className="link-single">V</Link>
        <Link href="/consumer/resource/W" className="link-single">W</Link>
        <Link href="/consumer/resource/X" className="link-single">X</Link>
        <Link href="/consumer/resource/Y" className="link-single">Y</Link>
        <Link href="/consumer/resource/Z" className="link-single-last">Z</Link>
      </div>
    </div>
  )
}

export default LinksBar