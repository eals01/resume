import styled from "styled-components"
import { data } from "../data"
import portrait from "../assets/portrait.jpg"

export default function Header() {
    const { name, website, email, phone } = data

    return (
        <Container>
            <Portrait src={portrait} />
            <Bio>
                <Name>{name}</Name>
                <DetailUrl href={`https://${website}`} target="_blank">{website}</DetailUrl>
                <Detail>{email}</Detail>
                <Detail>{phone}</Detail>
            </Bio>
        </Container>
    )
}

const Container = styled.header`
  display: flex;
  gap: 6mm;
`

const Bio = styled.section`
  display: flex;
  flex-direction: column;
`

const Name = styled.h1`
  font-family: Lora;
  font-weight: 400;
  font-size: 22px;
  margin-bottom: 2mm;
`

const DetailUrl = styled.a`
  font-family: Work Sans;
  line-height: 1.5em;
  font-weight: 350;
  font-size: 14px;
`

const Detail = styled.span`
  font-family: Work Sans;
  line-height: 1.5em;
  font-weight: 350;
  font-size: 14px;
`

const Portrait = styled.img`
  width: 26mm;
  height: 26mm;
  object-fit: cover;
`