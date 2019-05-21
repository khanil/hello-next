import Link from 'next/link';

const PostLink = ({ show }) => (
  <li>
    <Link as={`/p/${show.id}`} href={`/blog-post?id=${show.id}`}>
      <a>{show.name}</a>
    </Link>
    <style jsx>{`
      li {
        margin: 5px 0;
      }
    `}</style>
  </li>
);

export default PostLink;
