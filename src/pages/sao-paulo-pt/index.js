import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Query, { Paths } from "../../../lib/contentstack";
import dateFormat from "../../../lib/dateFormat";

import Banner from "@/components/Banner";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Navigation from "@/components/Navigation";
import Panel from "@/components/Panel";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";

import isPastDate from "../../../lib/ifPastDate";

const featuresData = [
  {
    icon: {
      description: "an icon depicting a high-level visual layout of a line chart.",
      url: "https://images.contentstack.io/v3/assets/blta2ce60e5241e282f/blt2f726526c3366e4b/649b3fc2e64f41406642dd1a/icon-visualizer-32-color.svg",
    },
    title: "Palestra de abertura",
    description: "As coisas estão acontecendo muito rápido! Ouça nossa liderança falar sobre as últimas atualizações e anúncios de produtos.",
  },
  {
    icon: {
      description: "icon of a clipboard with a magnifying glass",
      url: "https://images.contentstack.io/v3/assets/blta2ce60e5241e282f/bltae408595946b671f/649b3fc1c411215dd7a19622/icon-cases-32-color.svg",
    },
    title: "Você pergunta, um especialista responde",
    description: "Obtenha experiência prática e orientação técnica das mentes por trás das nossas soluções. E veja como usuários especialistas extraem o máximo do que a Elastic tem a oferecer.",
  },
  {
    icon: {
      description: "icon of various size rectangles depicting a dashboard UI",
      url: "https://images.contentstack.io/v3/assets/blta2ce60e5241e282f/blt003fba25b2245e6b/649b3fc1e9365a0338c3570d/icon-dashboards-32-color.svg",
    },
    title: "Demonstrações de soluções",
    description: "Confira nossas soluções mais recentes, veja novas maneiras de usá-las e obtenha respostas para suas perguntas mais urgentes sobre a plataforma.",
  },
  {
    icon: {
      description: "five dots with lines connecting them depicting an abstract representation of a network",
      url: "https://images.contentstack.io/v3/assets/blta2ce60e5241e282f/bltdb0ce7552f7751ad/649b3fc163cca6af47d29205/icon-packetbeat-32-color.svg",
    },
    title: "Networking em tempo real",
    description: "A comunidade Elastic é a melhor que existe. Você verá por que quando encontrar outros entusiastas do Elasticsearch em sua região!",
  }
]

export default function Location({
  bannerData,
  eventConfigDataCurrent,
  eventConfigDataEnded,
  locationData,
  logoBarData,
  footerData,
  globalData,
}) {
  const address = locationData.venue_address.replace(/\n/g, "<br>");
  const date = locationData.date[0]
    ? dateFormat(locationData.date[0], locationData.region)
    : "Coming soon";
  const eventEnded = isPastDate(locationData.date[0]);
  const eventConfigData = eventEnded ? eventConfigDataEnded : eventConfigDataCurrent;
  const registration = locationData.registration_url;

  function replacePlaceholder(text) {
    return text.replace(/{LOCATION}/g, locationData.title);
  }

  return (
    <>
      <Head>
        <title>{locationData?.seo?.title_l10n || globalData.seo_metadata.title}</title>
        <meta
          name="description"
          content={locationData?.seo?.description_l10n || globalData.seo_metadata.description}
        />
      </Head>
      {bannerData && (
        <Banner data={bannerData} />
      )}
      <Hero
        footer={
          <div className="flex flex-col lg:flex-row lg:items-center">
            <div className="gap-4 grid md:grid-cols-4 grow text-white">
              <div className="mb-4 md:mb-0">
                <Heading className="text-teal mb-4" size="h5">
                  Data
                </Heading>
                <p className="md:text-lg">21 de março 2024</p>
              </div>
              <div className="mb-4 md:mb-0">
                <Heading className="text-teal mb-4" size="h5">
                  Custo
                </Heading>
                <p className="md:text-lg">GRATUITO</p>
              </div>
              <div className="mb-4 md:mb-0">
                <Heading className="text-teal mb-4" size="h5">
                  Local
                </Heading>
                <p className="md:text-lg">
                  {locationData.venue_name.title === "TBD" ? (
                    "TBD"
                  ) : (
                    <a
                      className="border-b border-blue-800 hover:border-blue-400 hover:text-blue-400 pb-1"
                      href={locationData.venue_name.href}
                    >
                      A ser anunciado
                    </a>
                  )}
                </p>
                <p
                  className="mt-5 opacity-80"
                  dangerouslySetInnerHTML={{
                    __html: address,
                  }}
                />
              </div>
              {locationData.venue_image && (
                <img
                  alt="photo of the venue location"
                  className="rounded-sm"
                  src={locationData.venue_image.url}
                />
              )}
            </div>
          </div>
        }
        imageAlt={locationData.featured_image.description}
        imageHeight={552}
        imageSrc={locationData.featured_image.url}
        imageWidth={744}
        mainContent={
          <>
            <Heading
              className="font-semibold mb-8 text-teal"
              color="peach"
              size="h5"
            >
              Encontre respostas para o que vem aí
            </Heading>
            <Heading className="text-white" size="h1">
              {globalData.series_name} São Paulo
            </Heading>
            <p className="text-white my-8">
              Passe o dia com sua comunidade local da Elastic e saia com respostas para o que vem aí! Repleto de demonstrações, sessões de discussão, networking, dicas e orientações técnicas e anúncios exclusivos, o ElasticON Tour São Paulo é para qualquer pessoa que trabalhe com a Elasticsearch Platform.
            </p>
            <div className="flex items-center mb-10">
              {!eventEnded && (
                <Button href={registration}>Inscreva-se agora</Button>
              )}
              {locationData.agenda_cvent_module && (
                <Link
                  className={`flex gap-2 hover:gap-4 items-center text-blue-400 ${!eventEnded && "ml-6"}`}
                  href={eventEnded ? "https://www.elastic.co/enterprise-search/generative-ai" : "#agenda"}
                >
                  {eventEnded ? "Innovate with AI" : "Ver agenda"}
                  <Image
                    alt="arrow icon"
                    height={12}
                    src="/events/elasticon/images/icon-right.svg"
                    width={25}
                  />
                </Link>
              )}
            </div>
          </>
        }
      >
        <Navigation location={locationData.title} registration={registration} eventEnded={eventEnded} />
      </Hero>
      <Panel>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <Heading className="mb-6 text-blue-800" size="h3">
              O que esperar
            </Heading>
            <div className="markdown mb-4">
              <p>
                Criado para você, o ElasticON Tour São Paulo mostrará como obter os resultados mais relevantes de busca, observabilidade e segurança a uma velocidade sem precedentes com soluções empresariais abertas e flexíveis, alimentadas pela Elasticsearch Platform e pela IA.
              </p>
              <ul>
                <li>Veja como seus colegas estão usando a Elastic para mostrar o caminho em seus setores</li>
                <li>Conheça as mais recentes soluções, notícias e atualizações</li>
                <li>Conecte-se com nossa equipe de especialistas</li>
                <li>Saiba em primeira mão como a Elastic pode ajudar você a ser ainda mais eficiente e a tomar decisões mais inteligentes todos os dias</li>
              </ul>
            </div>
          </div>
          <div>
            <Heading className="mb-6 text-blue-800" size="h3">
            Quem deve participar
            </Heading>
            <ReactMarkdown className="markdown mb-4">
              Toda a comunidade Elastic é bem-vinda: desenvolvedores, arquitetos, profissionais de TI, engenheiros de DevOps e qualquer pessoa que já trabalhe com a Elasticsearch Platform ou tenha interesse nela.
            </ReactMarkdown>
            {!eventEnded && <Wave />}
          </div>
        </div>
      </Panel>
      <Panel className="bg-zinc-100 mb-20">
        <Heading className="mb-14 text-blue-800 md:text-center" size="h3">
          Vamos à parte técnica
        </Heading>
        <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, i) => (
            <div key={`feature-${i}`}>
              {/* eslint-disable-next-line */}
              <img alt={feature.icon.description} src={feature.icon.url} />
              <Heading className="my-4" size="h5">
                {feature.title}
              </Heading>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Panel>
      {locationData.agenda_cvent_module && !eventEnded && (
        <div className="flex flex-col items-center my-10 md:my-20" id="agenda">
          <iframe
            className="border-2 border-zinc-200 h-[85vh] mb-10 rounded-sm md:rounded-md lg:rounded-lg w-full"
            src={locationData.agenda_cvent_module}
            title="Agenda"
          />
        </div>
      )}
      {logoBarData && (
        <div className="flex flex-col items-center my-10 md:my-20" id="sponsors">
          <LogoBar
            data={logoBarData}
            eventEnded={eventEnded}
            location={locationData.title}
            seriesName={globalData.series_name}
          />
        </div>
      )}
      {locationData.registration_url && !eventEnded && (
        <div className="flex flex-col items-center my-10 md:my-20" id="register-now">
          <Button href={registration}>Inscreva-se agora</Button>
        </div>
      )}
      <Footer
        data={footerData}
        eventEnded={eventEnded}
        globalData={globalData}
        location={locationData.title}
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const footerData = await Query("footer", "blt6f73b6b55468ee3a");
  const globalData = await Query("site_config", "blt6e01f6ef8267a554");
  // Pull data from existing Sao Paulo event
  const locationData = await Query("event", "bltaa9a9ee30523c430");
  let logoBarData
  if (locationData.logo_bar_reference[0]) {
    logoBarData = await Query(locationData.logo_bar_reference[0]._content_type_uid, locationData.logo_bar_reference[0].uid);
  } else {
    logoBarData = '';
  }

  async function AlertBannerData() {
    try {
      return await Query("alert_banner", "blt627d8ffb27ca2405");
    } catch (error) {
      console.log(error);
    }
  }

  async function eventConfigData(id) {
    try {
      const currentData = await Query("event_config", id);
      const featuresData = await Promise.all(
        currentData.features.features.map(async (ref) => {
          const referenceData = await Query(ref._content_type_uid, ref.uid);
          return referenceData;
        })
      );

      return {
        ...currentData,
        featuresData,
      };
    } catch (error) {
      console.error(error);
    }
  }

  const bannerData = await AlertBannerData() || null;
  const eventConfigDataCurrent = await eventConfigData("blt8e9accc77ae68704") || null;
  const eventConfigDataEnded = await eventConfigData("blt3a278874b9efb3f1") || null;

  return {
    props: {
      bannerData,
      eventConfigDataCurrent,
      eventConfigDataEnded,
      locationData,
      logoBarData,
      footerData,
      globalData,
    },
  };
}
