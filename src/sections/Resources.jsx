import React from "react";
import { ChevronRight } from "lucide-react";
import ServiceDetails from "../../ProjectDetails";

const HeroBreadcrumb = ({
  title = "Our Services",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Project Details", href: "/project-details" },
  ],
  backgroundImage = "/contact.jpg",
}) => {
  return (
    <section
      className="relative w-full h-[440px] sm:h-[500px] md:h-[560px]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-32 md:pb-40">
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          {/* Page title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight">
            {title}
          </h1>

          {/* Breadcrumb */}
          <ul className="flex items-center gap-1 text-white text-sm md:text-base">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-1">
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <a
                      href={crumb.href}
                      className="
                        relative font-medium text-white
                        transition-all duration-300 ease-in-out
                        hover:text-orange-400
                        hover:-translate-y-0.5
                        group
                      "
                    >
                      {crumb.label}
                      <span
                        className="
                          absolute left-0 -bottom-0.5
                          h-[2px] w-0 bg-orange-400
                          transition-all duration-300 ease-in-out
                          group-hover:w-full
                        "
                      />
                    </a>
                    <span className="mx-1 text-white/60">/</span>
                    <ChevronRight className="w-4 h-4 text-white/70" />
                  </>
                ) : (
                  <span className="font-semibold text-white/90">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroBreadcrumb;
