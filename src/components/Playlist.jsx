import PropTypes from 'prop-types';

function Playlist({ name, url }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <img src={url} width={100} alt="Failed to load" />
          </td>
          <td>{name}</td>
          <td style={{ textAlign: 'right' }}>
            <button>Convert</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

Playlist.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Playlist;
