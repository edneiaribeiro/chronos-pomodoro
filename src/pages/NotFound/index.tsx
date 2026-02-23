import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Página Não Encontrada</Heading>
          <p>
            Desculpe, a página que você está procurando não existe. Verifique o
            endereço ou volte para a página inicial.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
