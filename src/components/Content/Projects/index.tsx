import eknows from 'assets/eknows.png';
import pokemon from 'assets/pokemon.png';

import Project from './Project';

export default function index() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-2xl font-semibold uppercase mb-2">Projects</h2>
      <div className="flex flex-col gap-32">
        <Project
          prev={eknows}
          title="E-Knows - A Complete E-Commerce Web App"
          tech={[
            'javascript',
            'react',
            'redux',
            'react router',
            'tailwindcss',
            'auth0',
            'nodejs',
            'express',
            'postgresql',
            'sequelize',
            'stripe',
          ]}
          desc="E-Knows is a complete E-Commerce web application focused on selling physical and electronic books."
          points={[
            'As a user you can create your account, add books to your favorites list, buy and rate books.',
            'As an administrator you can manage users accounts (modify info, suspend users and change their role), add new books, modify or remove existing books, add categories and subcategories.',
          ]}
          exp="I worked on this project at SoyHenry as my final project. This is my second full stack project and it helped me solidify many concepts and new technologies that I've learned before."
          links={['https://github.com/eknows-ecommerce/pf-front', 'https://github.com/eknows-ecommerce/pf-back']}
          deploy="https://e-knows.herokuapp.com/"
        />
        <Project
          prev={pokemon}
          title="Galeria Pokemon"
          tech={['javascript, react, redux, react router, css, nodejs, express, postgresql, sequelize']}
          desc="Galeria Pokemon is a web app where you can get information about any Pokemon you might want, in addition to create your own Pokemon and compare to others."
          points={['As a user you can create a new Pokemon with its own stats, name and picture.']}
          exp="This is my first full stack app that I was assigned at Henry."
          links={['https://github.com/nnicolasg/pokemon-PI']}
          deploy="  "
        />
      </div>
    </div>
  );
}
