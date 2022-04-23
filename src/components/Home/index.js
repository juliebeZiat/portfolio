// == Import style
import './home.scss';
import Arrow from '../../assets/icons/arrow.svg';
import DesktopMenu from '../Menu/DesktopMenu';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Bonjour</h1>
      <p className="home-text">Je suis Julie Beziat, développeuse web junior et je recherche une <span>alternance</span> pour Juin 2022.</p>
      <div className="home-button">
        <button type="button" className="home-button-cv">
          CV
          <img src={Arrow} alt="" />
        </button>
      </div>
      <DesktopMenu />
    </div>
  );
};

export default Home;
