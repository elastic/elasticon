import cn from "classnames";

import Heading from "@/components/Heading";
import Panel from "@/components/Panel";

export default function TextImageVideo({ data }) {
  return (
    <Panel>
      {data?.length > 0 && (
        <div className="tiv-group container">
          {data?.map((item, index) => (
            <div className={cn(
              "tiv-item flex",
              index % 2 === 0 ? 'gap-10 grid lg:grid-cols-2 items-center' : 'gap-10 grid lg:grid-cols-2 items-center pt-20'
            )}
              key={`textimagevideo-${index}`}
            >
              <div className={cn(
                "asset basis-1/2",
                index % 2 === 0 ? "" : "order-last pl-10 md:pl-0 sm:pl-0"
              )}>
                <div key={`watch-video-${index}`}>
                  <div className="aspect-video overflow-hidden rounded-[4px] shadow-lg w-full md:mt-8 sm:mt-8">
                    <iframe
                      allowFullScreen
                      allowtransparency="true"
                      height="100%"
                      src={`//play.vidyard.com/${item.asset_vidyard.vidyard_uuid}.html?`}
                      title={item.asset_vidyard.reference[0].title}
                      width="100%"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className={cn(
                "content basis-1/2 content-center",
                index % 2 === 0 ? "pl-10 md:pl-0 sm:pl-0" : ""
              )}>
                <Heading className="mb-10 md:mb-8 text-blue-800" size="h3">
                  {item.title}
                </Heading>
                <p>{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Panel>
  )
}
