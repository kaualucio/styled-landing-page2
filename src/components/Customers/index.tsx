import { FaQuoteLeft } from 'react-icons/fa'

import Image1 from '../../assets/client.png'
import { AboutCustomer, Customer, CustomerImage, CustomerName, CustomerQuote, CustomersContainer, QuoteIcon, SectionContent, SectionDescription, SectionTitle } from './CustomersElements'

const Customers = () => {
  return (
      <CustomersContainer>
        <Customer>
          <CustomerImage src={Image1} />
          <AboutCustomer>
            <QuoteIcon>
              <FaQuoteLeft/>
            </QuoteIcon>
            <CustomerName>Jacob Molen</CustomerName>
            <CustomerQuote>
              We like the final result this project, in extraordinary and also provides the best service to the client  
            </CustomerQuote>
          </AboutCustomer>
        </Customer>
        <SectionContent>
            <SectionTitle>
              O que nós temos feito &#38; o que nossos clientes dizem
            </SectionTitle>
            <SectionDescription>
              Established in 1992, PT. Wahana Cipta operates as a General Contracting company with a footprint that we have planted throughout Indonesia. Initially, we focused on construction in the field of residential housing development in Jakarta. As the company grows, now we are present as a reliable...
            </SectionDescription>
          </SectionContent>
      </CustomersContainer>
  )
}

export default Customers