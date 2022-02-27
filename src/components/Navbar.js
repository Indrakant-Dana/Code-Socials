import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';

const Navbar = () => {
  const auth = useAuth();
  return (
    <div className={styles.nav}>
      <div className={styles.leftDiv}>
        <Link to={'/'}>
          <img
            src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
            alt=""
          />
        </Link>
      </div>

      <div className={styles.rightNav}>
        {/* If user has logged in, then only we show this div */}
        {auth.user && (
          <div className={styles.user}>
            <Link to="/settings">
              <img
                src="https://cdn2.iconfinder.com/data/icons/essenstial-ultimate-ui/64/avatar-512.png"
                alt=""
                className={styles.userDp}
              />
            </Link>
            <span>{auth.user.name}</span>
          </div>
        )}

        <div className={styles.navLinks}>
          <ul>
            {auth.user ? (
              <>
                <li onClick={auth.logout}>Logout</li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
