import { BriefcaseBusiness } from "lucide-react";
import { WorkExperience } from "~/components/WorkExperience";
import Title from "./Title";

export function WorkExperiences() {
  return (
    <div
      id="experience"
      className="pattern-paper-grid relative w-full overflow-hidden border-b border-zinc-300 bg-[#fbfbfb] py-20 text-zinc-900"
    >
      <div className="container mx-auto px-5 max-md:px-2">
        <Title
          level="h2"
          icon={<BriefcaseBusiness />}
          alternative="light"
          subtitle="SECTION_EXPERIENCES // DESCRIPTIONS"
        >
          Expériences
        </Title>
        <div className="flex flex-col gap-4">
          <WorkExperience
            date="07/2024 - Aujourd'hui"
            title="Decathlon Digital"
            logoSrc="images/decathlon.png"
            skills={[
              "<strong>Java</strong>, Spring",
              "<strong>React</strong>",
              "<strong>GitOps</strong> (Github Actions, Flux)",
              "<em>Kubernetes</em>",
              "Postgres, Redis",
              "Agents IA: python, Google <em>Agent Development Kit</em>, LLM <em>Gemini</em>",
            ]}
          >
            <p>Rôle : Dévelopeur full stack senior</p>
            <h4>Mission: </h4>
            <ul>
              <li>
                Évolution d’une application de restitution des performances
                économiques
              </li>
              <li>
                Mise en place infra GCP-Kubernetes / Migration AWS vers GCP
              </li>
              <li>Mise en place de CI (Github, Flux)</li>
              <li>Création d'un chatbot pour assister les managers</li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="12/2021 - 01/2024"
            title="SNCF Connect"
            logoSrc="images/sncf-connect.png"
            skills={[
              "Java, <strong>Kotlin</strong>",
              "MongoDB",
              "Typescript, <strong>React</strong>, Redux",
              "<strong>AWS</strong> (Lambda, Gateway, et +), Terraform",
              "Git, Gitlab, Gitlab CI",
              "Pattern BFF, monorepo",
            ]}
          >
            <p>Rôle: Développeur full stack senior</p>
            <h4>Mission : </h4>
            <ul>
              <li>
                participer au développement des nouvelles applications SNCF
                Connect (anciennement Oui.sncf)
              </li>
              <li>
                référent technique sur les composants liés au compte client et à
                l’authentification
              </li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="01/2021 - 12/2021"
            title="Oui.sncf"
            logoSrc="images/ouisncf.jpeg"
            skills={[
              "Java 8, <strong>Spring</strong> / Spring Boot",
              "<strong>React</strong>, Redux",
              "Oracle, Mongo DB",
              "Jenkins, Jenkins Pipelines, Gitlab CI, Rundeck",
              "Instana/Kibana/Graphana",
              "Git, Gitlab",
            ]}
          >
            <p>Rôle : Développeur full stack senior</p>
            <p>Mission : participer aux activités de l'équipe en charge </p>
            <ul>
              <li>
                des données relatives au <strong>compte client</strong> ainsi
                que de leur mise à disposition au travers d'API/Services
              </li>
              <li>des IHM relatives au compte client</li>
              <li>de l'authentification des clients Web et Mobile</li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="04/2019 - 12/2020"
            title="DSIA - Supply Chain Solution"
            logoSrc="images/dsia.jpg"
            skills={[
              "Java 8, <strong>Spring Boot</strong>",
              "Tomcat, PostgreSQL",
              "HTML, CSS, <strong>Angular</strong>",
              "Jenkins, Docker",
              "Git, Bitbucket",
              "Jira, XWiki",
            ]}
          >
            <p>Rôle : Membre de la fabrique logicielle de DSIA.</p>
            <p>
              Mission : La suite logicielle de DSIA couvre l'ensemble des
              activités Supply Chain.
              <br />
              Cette suite permet aussi bien la synchronisation de l'offre et des
              demandes d'approvisionnements, que l'optimisation des entrepôts et
              des transports. Elle permet également le pilotage et le monitoring
              de toute la Supply Chain.
            </p>
            <p>Objectifs</p>
            <ul>
              <li>
                travaux sur les socles techniques communs aux applications front
                (socle Angular) et back (socle Java/Spring) ;
              </li>
              <li>
                mise en place d'une Gateway pour fournir un point d'accès unique
                aux microservices backend et y ajouter une couche
                d'authentification.
              </li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="01/2018 - 04/2019"
            title="Traveldoo (groupe Expedia)"
            skills={[
              "Java 8, architecture <strong>hexagonale</strong>",
              "HTML, CSS, React/Redux",
              "Tomcat, Oracle Database",
              "Git, Gitlab, Jenkins",
              "Confluence, Jira",
            ]}
            logoSrc="images/expedia.png"
          >
            <p>
              Rôle : Tech lead sur le centre de service Nantais{" "}
              <em>(au sein de Daveo)</em>
            </p>
            <p>
              Mission : Traveldoo offre une suite logicielle Saas permettant la
              réservation de voyages et la gestion des notes de frais dans le
              cadre professionnel. J'interviens sur la partie administration
              permettant de configurer ces modules pour les clients de
              Traveldoo.
            </p>
            <p>Objectifs :</p>
            <ul>
              <li>tech lead (équipe de 10 personnes)</li>
              <li>backup chef de projet / pilotage</li>
              <li>
                passage d'une application JSP sur une architecture React + web
                services
              </li>
              <li>
                conception/développement d'un module de suivi des actions
                utilisateurs (audit trail)
              </li>
              <li>maintenance applicative</li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="01/2016 - 12/2017"
            title="SNCF"
            skills={[
              "Java, Spring, Apache Camel, Eclipse, IntelliJ Idea",
              "RAML, JSON, NoSQL",
              "Cloudera, HBase, SolR, Hue, Redis, Kafka",
              "Apache, JBoss",
              "Git, Sonar, Jenkins",
              "Java, Eclipse, IntelliJ Idea",
              "RAML, REST",
              "HTML/CSS/AngularJS",
              "OpenID Connect, OpenAM",
              "Ldap, Apache, Tomcat",
              "Git, Sonar, Jenkins",
            ]}
            logoSrc="images/sncf-light.png"
          >
            <p>
              Rôle : Référent technique <em>(au sein de Capgemini)</em>
            </p>
            <h4 id="applicationrfrentielclientunique">
              Application "Référentiel Client Unique"
            </h4>
            <p>
              Mission : Le SI de la SNCF souhaite construire un référentiel
              client enrichi et personnalisé pour apporter plus d'efficacité
              commerciale.
            </p>
            <p>Objectifs :</p>
            <ul>
              <li>conception et développement de services REST</li>
              <li>conception de la publication des données dans Kafka</li>
              <li>mise en place d'un cache avec REDIS</li>
            </ul>
            <h4 id="applicationconnectrenommeaujourdhuimonidentifiantsncf">
              Application "Connect" (renommée aujourd'hui "Mon Identifiant
              SNCF")
            </h4>
            <p>
              Mission : Le SI de la SNCF souhaite une page d'authentification
              commune à tous les espaces clients de la SNCF (Voyage SNCF, ter,
              etc.).
            </p>
            <p>Objectifs :</p>
            <ul>
              <li>
                conception et développement de services REST manipulant ldap et
                webservices OpenAM
              </li>
              <li>conception et développements pages web Connect</li>
              <li>
                prise en compte des normes d'accessibilité (WCAG 2.0 Argent)
              </li>
              <li>
                conception et développement de modules customisés pour OpenAM
              </li>
              <li>suivi des anomalies, qualification et correction</li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="12/2015 - 12/2015"
            title="SNCF (Mobilité)"
            skills={["Java, Android", "Eclipse, Android Studio", "GIT, RTC"]}
            logoSrc="images/sncf-light.png"
          >
            <p>
              Rôle : Développeur d'applications mobiles
              <em>(au sein de Capgemini)</em>
            </p>
            <h4>Mission : </h4>
            <ul>
              <li>
                développements sur une application utilisée par les agents à
                bord des trains.
              </li>
              <li>
                participation à la conception et aux développements d'une
                nouvelle application permettant aux agents de la SNCF de
                diffuser des annonces dans les gares.
              </li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="06/2014 - 11/2015"
            title="Elior"
            skills={[
              "VB .NET, C#, Framework 3.5",
              "Windows Forms, WCF,",
              "MVC .NET 5.0, JQuery, Twitter Bootstrap",
              "SQL Server 212,",
              "Visual Studio 2012",
              "TFS",
            ]}
            logoSrc="images/elior.svg"
          >
            <p>
              Rôle : Ingénieur Logiciel confirmé <em>(au sein de Capgemini)</em>
            </p>
            <p>Mission :</p>
            <ul>
              <li>
                migration d'un parc d'applications du groupe Elior, de bases de
                données locales vers une base de données centralisée à travers
                la mise en place d'une couche de WebServices REST.
              </li>
              <li>
                mise en place de l'architecture MVC .NET 5.0 pour le prototype
                d'une nouvelle application Elior.
              </li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="07/2013 - 09/2014"
            title="Ministère des sports"
            skills={[
              ".NET 4.0, MVC 3.0, Razor, ",
              "Entity Framework 4.4,",
              "JQUERY, HTML 5, CSS 3",
              "SQL SERVER 2008R2",
              "Visual Studio 2010",
              "WPF (XAML)",
            ]}
            logoSrc="images/marianne.png"
          >
            <p>
              Rôle : Responsable technique <em>(au sein de Capgemini)</em>
            </p>
            <h4 id="educateurssportifsettablissementsdactivitsphysiquesetsportives">
              Educateurs sportifs et établissements d'activités physiques et
              sportives
            </h4>
            <p>Télé-procédure</p>
            <ul>
              <li>
                conception et mise en oeuvre d'un portail web pour la
                déclaration des éducateurs sportifs ;
              </li>
              <li>
                rédaction et présentation au client du DAT (document
                d'architecture technique) ;
              </li>
              <li>conception de l'architecture ;</li>
              <li>gestion de l'équipe de développement ;</li>
              <li>développement / Suivi.</li>
            </ul>
            <p>BackOffice</p>
            <ul>
              <li>
                évolutions sur l'application intranet EAPS et le module contrôle
                pour ajouter les contrôles automatiques vers les services du
                Ministère de la justice afin de contrôler les éducateurs.
              </li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="04/2011 - 07/2013"
            title="Centre de services multi-client"
            skills={[
              "C#, ASP.NET ,",
              "Reporting Services (SSRS)",
              "Visual Studio 2010 et 2012",
              "SQL Server",
              "C#, Windows Forms, ASP.NET,",
              "Reporting Services (SSRS),",
              "Visual Studio 2010 et 2012",
              "Visual Studio 2005,",
              "SQL Server 2005,",
              ".NET (C#/ASP)",
              ".NET,",
              "SSIS (SQL server Integration Services),",
              "Visual Studio 2005,",
              "SQL Server 2005",
              "Javascript",
            ]}
            logoSrc="images/marianne.png"
          >
            <p>
              Rôle : Responsable technique sur un centre de services, composé de
              plusieurs projets (<em>au sein de Capgemini</em>)
            </p>
            <h4 id="centrenationaldedveloppementdusportcnds">
              Centre National de Développement du Sport (CNDS)
            </h4>
            <h4>Mission : </h4>
            <ul>
              <li>
                développement et tests pour un lot d'évolution sur Orassamis,
                une application de gestion des subventions aux clubs de sport.
              </li>
            </ul>
            <p>Rôle : </p>
            <ul>
              <li>conception,</li>
              <li>développement,</li>
              <li>suivi de la qualité (CAST, Jenkins),</li>
              <li>migration de Framework</li>
            </ul>
            <h4 id="securitas">Securitas</h4>
            <h4>Mission : </h4>
            <ul>
              <li>
                développement et tests pour un lot d'évolutions sur une
                application permettant d'organiser le travail des agents de
                sécurité de Securitas (documentation, calendrier, suivi des
                missions, rondes, etc.)
              </li>
              <li>
                migration du framework de l'application Vision et réorganisation
                complête des solutions et projets Visual Studio
              </li>
            </ul>
            <p>Rôle : </p>
            <ul>
              <li>conception,</li>
              <li>développement,</li>
              <li>suivi de la qualité (CAST, Jenkins),</li>
              <li>migration de Framework</li>
            </ul>
            <h4 id="groupementdintrtpublicdemodernisationdesdclarationssocialesgip">
              Groupement d'Intérêt Public de Modernisation des déclarations
              sociales (GIP)
            </h4>
            <h4>Mission : </h4>
            <ul>
              <li>
                évolution des batchs de modification en masse pour ajouter la
                suppression, modification des IHM afin d'ajouter un nouveau
                service.
              </li>
              <li>
                développement de batchs et d'IHM pour le site NET-ENTREPRISES.FR
                (permettant aux entreprises de faciliter leurs déclarations
                sociales).
              </li>
            </ul>
            <p>Rôle : Conception,développement</p>
            <h4 id="agencenationalepourlarechercheanr">
              Agence Nationale pour la Recherche (ANR)
            </h4>
            <p>
              L'application de l'ANR permet la soumission, l'évaluation, le
              financement et son suivi des projets de recherche.
            </p>
            <h4>Mission : </h4>
            <ul>
              <li>
                MCO et développement de lots d'évolution sur l'application SIM.
              </li>
              <li>
                réalisation d'un ETL pour importer les données partenaires d'un
                fichier CSV vers l'application SIM.
              </li>
            </ul>
            <p>Rôle : </p>
            <ul>
              <li>conception,</li>
              <li>développement</li>
            </ul>
          </WorkExperience>
          <WorkExperience
            date="11/2010 - 03/2011"
            title="Direction générale des finances publiques"
            skills={[
              "SOA, Rational Rose",
              "Java 1.5, Maven",
              "Jboss 4.3, Oracle",
              "SVN",
            ]}
            logoSrc="images/marianne.png"
          >
            <p>
              Développement des modules applicatifs de service du projet RSP (3
              modules applicatifs pour 180 services)
            </p>
            <p>Mission :</p>
            <ul>
              <li>
                développement + Tu des offres de services de modules applicatifs
              </li>
              <li>installation des environnements de test</li>
              <li>tests techniques des modules applicatifs</li>
            </ul>
          </WorkExperience>
        </div>
      </div>
    </div>
  );
}
