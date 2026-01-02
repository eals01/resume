import styled from "styled-components"
import { data } from "../data"

export default function Skills() {
    const { skills } = data

    return (
        <Container>
            {skills.entries.map((skill, skillIndex) => {
                const { name, icon } = skill

                return (
                    <Skill key={`skill-${name.toLowerCase()}`}>
                        <SkillIcon src={icon} />
                        <SkillName>{skillIndex !== skills.entries.length - 1 ? `${name},` : name}</SkillName>
                    </Skill>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.75mm;
`

const Skill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5mm;
`

const SkillIcon = styled.img`
  height: 0.85em;
`

const SkillName = styled.span``