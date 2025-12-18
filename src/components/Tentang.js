import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "../style/landingPage.css";


const Tentang = () => {
  return (
    <div className="tentang">
      <Container
        className="text-white text-center d-flex justify-content-center 
          align-items-center"
      >
        <Row>
          <Col>
            <div className="title mt-5" id='tentang'>🎬 Tentang Kami</div>
            <p className="tentangText mt-4">
              MC Films adalah platform informasi film yang menyajikan berbagai
              rekomendasi dan ulasan film dari seluruh dunia. Kami hadir untuk
              membantu pecinta film menemukan tontonan terbaik dengan cepat dan
              mudah, mulai dari film terbaru, film populer, hingga film yang
              sedang tren saat ini. Dengan tampilan yang modern dan responsif,
              MC Films dirancang untuk memberikan pengalaman menjelajah film
              yang nyaman, informatif, dan menyenangkan bagi semua kalangan,
              kapan pun dan di mana pun. Kami percaya bahwa film bukan sekadar
              hiburan, tetapi juga media cerita, inspirasi, dan emosi. Karena
              itu, kami berkomitmen untuk menyajikan informasi film yang akurat,
              relevan, dan selalu diperbarui.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Tentang