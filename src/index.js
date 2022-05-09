// == Import : npm
import { render } from 'react-dom';

// == Import : local
// Composants
import Instagram from 'src/components/Instagram';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'Instagram)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = <Instagram />;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);
