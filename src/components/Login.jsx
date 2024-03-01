import { loginURL } from '../spotify';

function Login() {
  return (
    <>
      <hgroup>
        <h1>What do you want to convert?</h1>
        <p>Sign in with the chosen platform</p>
      </hgroup>
      <div className="grid">
        <a href={loginURL} type='button'>Spotify to YouTube</a>
      </div>
      <div className="grid">
        <a href={loginURL} type='button'>YouTube to Spotify</a>
      </div>
    </>
  );
}

export default Login;
