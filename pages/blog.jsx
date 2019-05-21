import fetch from 'isomorphic-unfetch';
import PostLink from '../components/blog/PostLink';
import DefaultLayout from '../layouts/Default';

const BlogHome = props => (
  <DefaultLayout title="Blog / Batman TV Shows">
    <h1>Batman TV Shows</h1>

    <ul>
      {props.shows.map(show => (
        <PostLink show={show} key={show.id} />
      ))}
    </ul>
  </DefaultLayout>
);

BlogHome.defaultProps = {
  shows: [],
};

BlogHome.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}.`);

  return {
    shows: data.map(entry => entry.show),
  };
};

export default BlogHome;
