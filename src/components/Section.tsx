import type { ReactNode } from "react"
import styled from "styled-components"

interface Props {
    title: string;
    children: ReactNode
}

export default function Section({ title, children }: Props) {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    )
}

const Container = styled.section``

const Title = styled.h2`
  font-family: Lora;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 2mm;
  color: #9b9b9b;
  border-bottom: 1px solid #c3c3c3;
`