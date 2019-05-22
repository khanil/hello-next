import React from 'react';
import Link from 'next/link';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/boxes">
          <a>Boxes</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      nav {
        border-bottom: 1px solid #aaa;
        padding: 5px 0;
      }

      ul {
        display: flex;
      }

      li + li {
        margin-left: 20px;
      }
    `}</style>
  </nav>
);

export default React.memo(Header);
