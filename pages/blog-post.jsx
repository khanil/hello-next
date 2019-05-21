import fetch from 'isomorphic-unfetch';
import DefaultLayout from '../layouts/Default';

const BlogPost = ({ show }) => (
  <DefaultLayout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} />
  </DefaultLayout>
);

BlogPost.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Show fetched. Name: ${show.name}.`);

  return { show };
};

export default BlogPost;
