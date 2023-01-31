import { FiPlus } from 'react-icons/fi'
import { currencyFormat } from '../../helpers/currencyFormat'
import { Container } from './styles'
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface SnacksProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  snacks: any[]
}

export function Snacks({ snacks }: SnacksProps) {
  return (
    <Container>
      {snacks.map((snack) => (
        <div key={snack.id} className='snack'>
          <h2>{snack.name}</h2>
          <LazyLoadImage src={snack.image} alt={snack.title} effect='blur' width='100%' />
          <p>{snack.description}</p>
          <div>
            <strong>{currencyFormat(snack.price)}</strong>
            <button type='button'>
              <FiPlus />
            </button>
          </div>
        </div>
      ))}
    </Container>
  )
}
