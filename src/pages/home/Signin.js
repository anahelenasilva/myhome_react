import React from 'react';
import {Button} from '../../common/components/Button';
import './styles/signin.scss';

function Signin() {
  return (
    <section className="signin">
      <hgroup>
        <h2>
          myHome is the site where you can find new rooms or house to rent  for a short or big season all around the world.
      </h2>
        <h3>
          Sign-in and find out places where you can rent a house or room during your journey.
      </h3>
      </hgroup>
      <Button
        className='button__signin'
        alt='Signin'
        onClick=""
      />
    </section>
  )
}

export { Signin };
