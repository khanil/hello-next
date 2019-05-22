import App, { Container } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import DefaultLayout from '../layouts/Default';

Router.events.on('routeChangeStart', () => NProgress.start());

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        {Component.layoutComponent ? (
          <Component.layoutComponent>
            <Component {...pageProps} />
          </Component.layoutComponent>
        ) : (
          <Component {...pageProps} />
        )}
      </Container>
    );
  }
}

export default CustomApp;
