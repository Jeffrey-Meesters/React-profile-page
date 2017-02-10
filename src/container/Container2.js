import React, { Component } from 'react';

class Container2 extends Component {
  render() {
    return (
    <div id="container1" className="container">
      <div className="about">
        <h3> Over mij: </h3>
          <p>
            Startend Junior Web-developer en gecertificeerd door <a href="http://www.codaisseur.com" target="_blank">Codaisseur</a>.
          </p>
          <br/>
          <p>
            In 2013 heb ik mijn Bachelor behaald in Financial Sevices Management aan de HvA.
            Direct daarna ben ik met mijn vriendin <a href={'https://nl.linkedin.com/in/laura-van-der-lem-7753bb1a/nl'} target="_blank">(Laura)</a> op wereldreis gegaan.
            In 11 maanden hebben wij door Azie, Nieuw Zeeland en Zuid-Amerika gereisd.
            Bij terugkomst heb ik vrij snel een baan gevonden bij Rabobank IJmond.
            Ik heb daar 2 jaar met plezier gewerkt, echter werd mijn interesse in (web-) development steeds groter.
            Augustus 2016 heb ik besloten mijzelf om te scholen bij Codaisseur en dat is gelukt!
          </p>
          <br/>
          <p>
            Ik ben dus al ervaren met het werken in een dynamische omgeving en in teamverband.
            Een grote moppen-topper ben ik niet, maar bij een informele en actieve omgeving voel ik mij op m'n best.
          </p>
      </div>

      <div className="class-skills">
        <h3> Codaisseur: </h3>
          <p>
            Mijn omscholing naar web-developer ben ik bij codaisseur gestart.
            Zij bieden een traineeship aan die mij in staat stelde om binnen korte tijd mijzelf web-developer te mogen noemen.
            Deze traineeship is erg intensief. Weken van 70 uur en langer zijn geen uitzondering en de leerstof is divers en uitgebreid.
          </p>
          <br/>
          <h4> Onderwerpen:</h4>
          <p>
            De traineeship heeft de volgende onderwerpen: <em>Ruby, RSpec, Rails, JS/Node (incl. ES6), Mocha, Chai, React, Redux, SQL, HTML5, and CSS3</em>.
            Daarnaast zijn ook de volgende aspecten van development aan bod gekomen: <em>Code reviews en quality assessments,
            TDD, de basis van product development, UX design, Domain modelling</em>
            en uiteraard <em>teamwork</em> met gebruik van tools zoals:<em> Atom, Git, Github, CI en Slack</em>.
          </p>
      </div>

      <div className="future-targets">
        <h3> Doelen </h3>
          <p>
            Mijn hoofddoel op dit moment is simpel gezegd: Werk vinden als Jr. web-developer.
            Hier ben ik uiteraard al hard mee bezig en eenmaal gevonden zal niets mij meer in de weg staan
            om mij verder te ontwikkelen!
          </p>
          <br/>
          <p>
            En uiteraard wil ik dat. Op dit moment ligt mijn focus op
            Ruby/Rails, JavaScript, HTML en CSS, omdat ik hiermee al bruikbare web-apps kan ontwikkelen.
            Neem straks maar eens een kijkje op mijn <a href='https://github.com/Jeffrey-Meesters' target="_blank">Github account</a>!
            En deze website is een voorbeeld van HTML, CSS en een beetje JS.
          </p>
      </div>
    </div>
  )};
}

export default Container2;
