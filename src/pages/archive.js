import Head from "next/head";
import Link from "next/link";
import Query, { Paths } from "../../lib/contentstack";

import Button from "@/components/Button";
import footerBg from "@/images/pattern-footer.png";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Panel from "@/components/Panel";
import TextImageVideo from "@/components/TextImageVideo";

export default function VideoArchive({ data }) {
  const { globalData, archiveData } = data;
  const videoData = archiveData?.videoData;

  if (archiveData === undefined) return ''

  const getPrimaryButton = (
    archiveData?.hero?.main_cta && (
      <Button href={archiveData?.hero?.main_cta?.href}>
        {archiveData?.hero?.main_cta?.title}
      </Button>
    )
  )
  const getSupportingButton = (
    archiveData?.hero?.supporting_cta && (
      <div className="pl-4">
        <Button href={archiveData?.hero?.supporting_cta?.href} outlined={true}>
          {archiveData?.hero?.supporting_cta?.title}
        </Button>
      </div>
    )
  )

  return (
    <>
      <Head>
        <title>{archiveData?.seo?.title_l10n || globalData?.seo_metadata?.title}</title>
        <meta
          name="description"
          content={archiveData?.seo?.description_l10n || globalData?.seo_metadata?.description}
        />
      </Head>
      {archiveData?.hero?.headline && (
        <Hero
        imageAlt={archiveData?.hero?.image?.description}
        imageSrc={archiveData?.hero?.image?.url}
        videoSrc={archiveData?.hero?.asset_vidyard}
        mainContent={
          <>
            {archiveData?.hero?.topic_heading && <Heading className="font-semibold mb-8 text-yellow" size="h4">{archiveData?.hero?.topic_heading}</Heading>}
            <Heading className="text-white" size="h1">
              {archiveData?.hero?.headline}
            </Heading>
            <p className="text-white my-8">{archiveData?.hero?.description}</p>
            {archiveData?.hero?.main_cta && (
              <div className="flex items-center">
                {getPrimaryButton}
                {getSupportingButton}
              </div>
            )}
          </>
        }
      >
        <Navigation />
      </Hero>
      )}
      {archiveData?.text_image_video?.length > 0 && <TextImageVideo data={archiveData?.text_image_video} videoData={videoData} />}

      {archiveData?.videos?.list?.length > 0 && (
        <>
          <Panel className="video-gallery bg-zinc-100">
            <Heading className="mb-10 md:mb-12 text-center text-blue-800" size="h3">
              {archiveData?.videos?.title}
            </Heading>
            <div className="video-gallery-list grid gap-8 md:grid-cols-3">
              {archiveData?.videos?.list?.map((item, index) => (
                <Link href={item.url} key={index}>
                  <div className="video-gallery-item mb-4">
                    <div className="aspect-video overflow-hidden rounded-[4px] shadow-md mb-4">
                      <img
                        data-v="4"
                        data-type="inline"
                        data-uuid={item.vidyard_uuid}
                        class="vidyard-player-embed"
                        height="100%"
                        src={`//play.vidyard.com/${item.vidyard_uuid}.jpg`}
                        title={item.title}
                      />
                    </div>
                    <div className="video-item-content">
                      <Heading className="mb-4 md:mb-2" size="h5">
                        {item.title}
                      </Heading>
                      <div className="paragraph">{item.paragraph}</div>
                      <div className="paragraph mt-2">{item.vidyard_length}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Panel>

          <div className="relative bg-zinc-900 text-center text-white p-16 md:p-28 rounded-tl-sm md:rounded-tl-md lg:rounded-tl-lg rounded-tr-sm md:rounded-tr-md lg:rounded-tr-lg">
            <Image src={footerBg} alt="" className="hidden lg:block absolute top-1/2 left-1/2 w-[90%] h-auto transform -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              {archiveData?.footer?.headline && <Heading className="mb-6" size="h3">{archiveData?.footer?.headline}</Heading>}
              {archiveData?.footer?.description && <div className="mb-10">{archiveData?.footer?.description}</div>}
              {archiveData?.footer?.main_cta && archiveData?.footer?.main_cta?.title && <Button outlined href={archiveData?.footer?.main_cta?.href}>{archiveData?.footer?.main_cta?.title}</Button>}
            </div>
          </div >
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  const globalData = await Query("site_config", "blt6e01f6ef8267a554");
  const [videoArchiveData] = await Paths("archive");

  async function QueryAllArchiveData() {
    try {
      const data = await Query("archive", "blt6eadf747786e1f7d");
      const videoData = await Promise.all(
        data?.text_image_video?.map(async (ref) => {    
          const videoReferenceData = await Query(ref.asset_vidyard?.reference[0]._content_type_uid, ref.asset_vidyard?.reference[0].uid);
          return videoReferenceData;
        })
      )

      return {
        ...data,
        videoData,
      };
    } catch (error) {
      console.error(error);
    }
  }

  const allArchiveData = await QueryAllArchiveData() || null;

  return {
    props: {
      data: {
        globalData,
        videoArchiveData,
        archiveData: allArchiveData
      },
    },
  };
}
