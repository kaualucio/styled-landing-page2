import { HeaderLabel, HeaderSectionContainer, HeaderSectionTitle } from './HeaderSectionElements';

interface HeaderSectionProps {
  title: string;
  label: string
}

const HeaderSection = ({title, label}: HeaderSectionProps) => {
  return (
    <HeaderSectionContainer>
      <HeaderSectionTitle>
        { title }
      </HeaderSectionTitle>
      <HeaderLabel>
        { label }
      </HeaderLabel>
    </HeaderSectionContainer>
  )
}

export default HeaderSection