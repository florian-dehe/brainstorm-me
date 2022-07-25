import { render } from 'preact';
import App from './app/App';

function retrieveBrainstormData() {
  browser.storage.local.get(null).then(
    (value) => {
      console.log(value);
    },
    (error) => {
      console.log(error);
    }
  );
}

retrieveBrainstormData();
render(<App />, document.body);
