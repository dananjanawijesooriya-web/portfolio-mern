import { Hero } from '../components/Hero';
import { useFadeIn} from '../hooks/useFadeIn';

const Home = () => {
  useFadeIn();
  return <Hero />;
};

export default Home;