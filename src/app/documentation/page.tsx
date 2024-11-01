import { Container, Row, Col } from 'react-bootstrap';

/** Render the Documentation page with helpful links for users */
const DocumentationPage = () => (
  <main>
    <Container className="py-3">
      <Row>
        <Col xs={8}>
          <h1>Documentation</h1>
          <p>
            First off, check the&nbsp;
            <a href="https://ics-software-engineering.github.io/nextjs-application-template/">
              nextjs-application-template github.io page.
            </a>
          </p>
          <p>
            If that does not answer your question, you can post a smart question to the class Discord.
          </p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default DocumentationPage;
