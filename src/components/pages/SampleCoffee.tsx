import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
  doFetchCoffee,
  selectCoffee
} from 'features/sampleCoffee/sampleCoffeeSlice'
import React from 'react'
import styled from 'styled-components'

type Props = {
  foo: string
}

const Component = (props: Props): JSX.Element => {
  const coffee = useAppSelector(selectCoffee)
  const dispatch = useAppDispatch()

  return (
    <React.Fragment>
      <Area>
        <Button onClick={() => dispatch(doFetchCoffee())}>fetch</Button>
      </Area>
      <Area>
        <Row>
          <Item>{props.foo}</Item>
        </Row>
      </Area>
      {coffee.map((coffee) => (
        <Row key={coffee.id}>
          <Value>
            <Item>title:</Item>
            <Item>{coffee.title}</Item>
          </Value>
          <Value>
            <Item>description:</Item>
            <Item>{coffee.description}</Item>
          </Value>
          <Value>
            {coffee.ingredients.map((ingredient) => (
              <React.Fragment key={ingredient}>
                <Item>description:</Item>
                <Item>{ingredient}</Item>
              </React.Fragment>
            ))}
          </Value>
        </Row>
      ))}
    </React.Fragment>
  )
}

const Area = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

const Row = styled.div`
  margin: 24px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 14px;
`

const Value = styled.div`
  margin: 4px;
`

const Item = styled.span`
  margin: 4px;
`

const Button = styled.button`
  margin: 24px;
  padding: 24px;
  font-size: 32px;
  cursor: pointer;
`

export default Component
