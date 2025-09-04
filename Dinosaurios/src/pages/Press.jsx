import React from "react";
import "../css/DiscoveriesLanding.css";

export default function DiscoveriesLanding() {
  return (
    <main className="lp7 with-fixed-nav">
      {/* 1) HEADLINE */}
      <section className="lp7-section" id="headline">
        <aside className="lp7-label">1 HEADLINE</aside>
        <div className="lp7-card">
          <h1 className="lp7-title">Descubrimientos que reescriben la historia</h1>
          <p className="lp7-sub">
            Patagonia, Antártida y más — registro completo con el contenido tal cual para tu landing.
          </p>
        </div>
      </section>

      {/* 2) VISUAL FOCUS */}
      <section className="lp7-section" id="visual-focus">
        <aside className="lp7-label">2 VISUAL FOCUS</aside>
        <div className="lp7-card lp7-visual">
          <div className="lp7-media" aria-label="Visual principal / ilustración">
            {/* Si tienes una imagen, colócala como background-image en CSS o un <img /> aquí */}
          </div>
          <div className="lp7-body">
            <h2>Descubrimiento destacado #1 — Maip macrothorax</h2>
            <p>
              Apodado la "Sombra de la Muerte", Maip recibió su nombre de un espíritu Aonikenk que,
              según se decía, mataba con vientos helados. Su segundo nombre, macrotórax, refleja su
              enorme cavidad torácica de 1,2 metros de ancho. A diferencia del corpulento T. Rex,
              Maip era ligero, ágil y rápido, lo que lo convirtió en el máximo depredador de la Patagonia
              austral hace unos 70 millones de años.
            </p>
            <p>El megaraptor más grande jamás descubierto</p>
            <p>
              En 2019, cerca de El Calafate, en la Patagonia, nuestro equipo descubrió los restos
              de un depredador sin precedentes: el Maip macrothorax.
            </p>
            <p>
              Con 10 metros de largo y más de cinco toneladas, y garras de hasta 40 cm, estaba
              diseñado para una velocidad y una potencia letales.
            </p>
            <p>
              El descubrimiento ayudó a resolver misterios clave sobre los megaraptors, una familia
              de carnívoros distribuida por América del Sur, Asia y Australia, y reveló uno de los
              megaraptors más grandes y más australes jamás encontrados.
            </p>
          </div>
        </div>
      </section>

      {/* 3) BENEFITS */}
      <section className="lp7-section" id="benefits">
        <aside className="lp7-label">3) BENEFITS</aside>
        <div className="lp7-card">
          <h2>Por qué estos hallazgos importan</h2>
          <ul className="lp7-benefits">
            <li>Maip macrothorax: contexto de depredador ápice y evolución de megaraptores.</li>
            <li>
              Notobatrachus: extiende la evidencia de metamorfosis en ranas por 30+ millones de años.
            </li>
            <li>
              Taurovenator violantei: rival patagónico de Tyrannosaurus rex con esqueleto excepcional.
            </li>
            <li>Patagorhynchus: reescribe la historia evolutiva de los monotremas en Gondwana.</li>
            <li>
              Antártida 2027–2032: misión para descubrir dinosaurios en ecosistemas de alta latitud.
            </li>
            <li>
              Primer nido de terópodo en Sudamérica y tejidos blandos preservados: avances únicos.
            </li>
          </ul>
        </div>
      </section>

      {/* 4) SOCIAL PROOF */}
      <section className="lp7-section" id="social-proof">
        <aside className="lp7-label">4) SOCIAL PROOF</aside>
        <div className="lp7-card">
          <blockquote className="lp7-quote">
            “Ilustración de IA de IAMPROZE.COM … Ilustración De Gabriel Lio … Ilustración de Santiago
            Miner … Ilustración de Mehmet Turgut Kirkgoz.”
          </blockquote>
          <p className="lp7-note">
            Créditos y menciones incluidos tal cual aparecen en el texto original.
          </p>
        </div>
      </section>

      {/* 5) STORYTELLING */}
      <section className="lp7-section" id="storytelling">
        <aside className="lp7-label">5) STORYTELLING</aside>
        <div className="lp7-card lp7-split">
          <div className="lp7-col">
            <h3>Descubrimiento destacado #2 — notobatrachus</h3>
            <p>El renacuajo de 161 millones de años</p>
            <p>Descubierto por accidente durante un juego</p>
            <p>
              Lo que hace que el hallazgo sea aún más extraordinario es la forma en que ocurrió.
              Después de un largo día excavando dinosaurios, algunos miembros de nuestro equipo
              descansaban y lanzaban piedras cuando uno notó una roca con una extraña marca.
              Aquella “piedra rara” resultó ser un tesoro científico: un renacuajo de 161 millones de años,
              que retrocede la evidencia de la metamorfosis de las ranas en más de 30 millones de años.
            </p>
            <p>
              La historia resalta la riqueza de los yacimientos fósiles de la Patagonia —un lugar donde
              incluso los momentos casuales pueden conducir a descubrimientos que cambian al mundo.
            </p>
          </div>

          <div className="lp7-col">
            <h3>Discovery highlight #2 — Taurovenator violantei</h3>
            <p>The Patagonian Rival to Tyrannosaurus rex</p>
            <p>
              In the badlands of Patagonia, our team unearthed one of the most complete skeletons ever
              found of a giant South American predator: Taurovenator violantei, the “Bull Hunter.”
              Measuring 11 meters (36 feet) in length and weighing around five tons, this dinosaur stood
              among the top hunters of its time, a true rival to Tyrannosaurus rex.
            </p>
            <p>
              The skeleton includes the skull, neck and back vertebrae, nearly complete arms, hind legs,
              and ribs—a treasure trove that allows scientists to reconstruct its power in extraordinary
              detail. Taurovenator’s neck was reinforced with extra bone connections, giving it the strength
              to hold up a colossal 1.3-meter skull with horn-like crests above its eyes.
            </p>
            <p>
              Living 90 million years ago, this predator ruled the forests of Gondwana. Its discovery in the
              Pueblo Blanco Reserve (Río Negro) cements Patagonia as one of the world’s richest fossil
              frontiers and showcases the fearsome diversity of apex predators that once stalked the
              southern continents.
            </p>
            <p>NOT DONE YET _ WAITING FOR PROZE’s AI PICTURE</p>
            <p>Un ovíparo de 70 millones de años reescribe la evolución</p>
          </div>
        </div>

        <div className="lp7-card">
          <h3>Descubrimiento destacado #4 — Patagorhynchus</h3>
          <p>
            En 2019, nuestro equipo halló un diminuto molar en la Formación Chorrillo de la Patagonia.
            Pertenecía a Patagorhynchus pascuali, el pariente más antiguo del ornitorrinco en Sudamérica,
            con 70 millones de años de antigüedad.
          </p>
          <p>
            El descubrimiento demostró que los monotremas —mamíferos que ponen huevos como el
            ornitorrinco y el equidna— vivieron en Sudamérica mucho antes de lo pensado, junto a los
            dinosaurios. Antes se creía que provenían solo de Australia tras su extinción.
          </p>
          <p>
            Nombrado en honor al paleomastozólogo argentino Rosendo Pascual, Patagorhynchus habitaba
            humedales y probablemente comía caracoles y larvas, como su descendiente moderno. Su
            presencia revela que los monotremas se extendieron por el sur de Gondwana, conectando
            Sudamérica, Australia y la Antártida.
          </p>
          <p>
            Este único diente no solo amplió el registro fósil de la Patagonia — reescribió la historia
            evolutiva de los monotremas, revelando que el antepasado del ornitorrinco actual era patagónico.
          </p>
          <p>Ilustración de Santiago Miner</p>
        </div>

        <div className="lp7-card">
          <h3>Excavaciones Antárticas</h3>
          <p>
            Hemos firmado un acuerdo exclusivo de cinco años con el gobierno argentino para realizar
            expediciones paleontológicas en la Antártida (2027–2032), en colaboración con el Instituto
            Antártico Argentino y el CONICET. 
          </p>
          <p>
            NUESTRA MISIÓN: DESCUBRIR NUEVOS FÓSILES DE DINOSAURIOS QUE HABITARON EL CONTINENTE
            HELADO HACE 70 MILLONES DE AÑOS. Fósiles asombrosos que hoy estudiamos, historias que
            mañana conmoverán al mundo.
          </p>
        </div>

        <div className="lp7-card">
          <h3>El próximo capítulo del descubrimiento</h3>
          <p>
            90 millones de años de antigüedad: siete huevos y los restos de una serpiente enroscada a su
            alrededor. Era un depredador o un habitante del nido? La investigación está en curso.
          </p>
          <p>Una nueva especie de dinosaurio carnívoro con músculos y tejidos sanguíneos preservados.</p>
          <p>
            La primera evidencia de tejidos blandos en dinosaurios de Sudamérica. Publicación prevista
            para finales de 2025.
          </p>
          <p>Ilustración de Mehmet Turgut Kirkgoz</p>
          <p>1.09.2025</p>
          <p>El primer nido de terópodo en Sudamérica</p>
          <p>Una nueva especie de raptor de la Patagonia</p>
          <p>Aporta claves fundamentales sobre los ecosistemas de alta latitud.</p>
        </div>
      </section>

      {/* 6) GUARANTEE */}
      <section className="lp7-section" id="guarantee">
        <aside className="lp7-label">6) GUARANTEE</aside>
        <div className="lp7-card">
          <h2>Evidencia y transparencia</h2>
          <p>
            Todo el contenido anterior está incluido **tal cual** para tu maquetación. Puedes añadir
            imágenes o figuras cuando estén disponibles (por ejemplo, la imagen pendiente de PROZE).
          </p>
        </div>
      </section>

      {/* 7) CALL TO ACTION (CTA) */}
      <section className="lp7-section" id="cta">
        <aside className="lp7-label">7) CALL TO ACTION (CTA)</aside>
        <div className="lp7-card lp7-cta">
          <h2>¿Lo publicamos?</h2>
          <p>
            Integro esta página a tu ruta (ej. <code>/discoveries</code>) o la muevo al Hero principal. 
            También puedo pasarlo a <code>react-i18next</code> manteniendo cada párrafo intacto.
          </p>
          <div className="lp7-cta-row">
            <button className="lp7-btn">Agregar a Navbar</button>
            <button className="lp7-btn lp7-btn-alt">Pasar a i18n</button>
          </div>
        </div>
      </section>
    </main>
  );
}