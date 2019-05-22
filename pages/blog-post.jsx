import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const BlogPost = ({ show }) => (
  <>
    <Head>
      <title key="title">{`Blog / ${show.name}`}</title>
    </Head>

    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} />
  </>
);

BlogPost.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Show fetched. Name: ${show.name}.`);

  return { show };
};

export default BlogPost;
