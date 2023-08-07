import Image from "next/image";
import { Montserrat, Source_Sans_3 } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const source_sance_3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-16">
      {/* menu bar start */}
      <div className={montserrat.className}>
        <div className="flex items-center border-2 px-10 py-2">
          <div className="left_side">
            <Image src="/logo.png" width={140} height={43}></Image>
          </div>
          <div className="right_side flex ml-auto">
            <ul className="pr-8 text-sm">Applied Degrees</ul>
            <ul className="pr-8 text-sm">Digital Upskilling</ul>
            <ul className="pr-8 text-sm">Enterprise Transformation</ul>
            <ul className="pr-8 text-sm">About Us</ul>
          </div>
        </div>
      </div>

      {/* section 1 start */}
      <div className="section_1 bg-[#11163B] text-white p-10">
        <div className="flex items-center">
          <div className="left_side w-1/2">
            <p className={montserrat.className}>
              <span className="text-4xl font-bold leading-tight">
                Get career induction in{" "}
                <span className="text-[#E43193]">
                  12 months and graduate with
                </span>{" "}
                <span className="text-[#29B8FF]">
                  3 years of working experience{" "}
                </span>
                and <span className="text-[#FDD93B]">international degree</span>{" "}
                with skills certification
              </span>
            </p>
          </div>
          <div className="right_side ml-auto">
            <Image
              className="object-cover"
              src="/apprenticeship.png"
              width={447}
              height={447}
            ></Image>
          </div>
        </div>
        <div className="mt-5 text-lg font-extralight">
          <p className="w-4/6">
            <span className={source_sance_3.className}>
              With our{" "}
              <span className="font-bold">Work-Study Degree Programme</span>,
              you get in-demand knowledge and skills through an
              industry-relevant curriculum taught with blended learning methods
              during our intensive digital skilling bootcamp, designed to get
              you work-ready in 12 months.
            </span>
          </p>
          <p className="mt-3">
            <span className={source_sance_3.className}>
              After, you get inducted to the industry as a full-time paid
              apprentice for 3 years. We provide job placement to match you with
              an employer, where you can work with international colleagues and
              real-world projects.{" "}
            </span>
          </p>
          <p className="mt-3">
            <span className={source_sance_3.className}>
              Finally, graduate with an international degree certification from
              accredited institutions like UR, UCAM, AIU, and Marconi University
              and be the first choice of employers.
            </span>
          </p>
        </div>
      </div>

      {/* Section 2 start */}

      <div className={montserrat.className}>
        <div className="max-w-5xl mx-auto p-3">
          <p className="font-bold mx-auto text-3xl leading-normal text-center px-10 py-2">
            How dual track work-study degree deliver{" "}
            <span className="text-[#8D1A4A]">BETTER career </span>,{" "}
            <span className="text-[#FFA70B]">FASTER & CHEAPER</span> than
            conventional academic universities ?
          </p>

          <div className="grid grid-cols-3 gap-3 mt-3">
            <div className=""></div>
            <div className="h-16 flex justify-center items-center rounded-md border-black border-t-4 border-l-4 border-r-4">
              <p className="text-sm">1 YEAR SKILLING BOOTCAMP</p>
            </div>
            <div className="h-16 flex justify-center items-center rounded-md border-black border-t-4 border-l-4 border-r-4">
              <p className="text-sm">3 YEARS PAID APPRENTICESHIP</p>
            </div>

            <div className="bg-[#11163B] h-16 flex justify-center items-center rounded-md">
              <p className="text-white text-sm">STUDY</p>
            </div>
            <div className="bg-[#11163B] h-16 flex justify-center items-center rounded-md">
              <div className="bg-[#9396B0] rounded-md">
                <p className="p-3 text-sm">Digital Skilling Bootcamp</p>
              </div>
            </div>
            <div className="bg-[#11163B] h-16 flex gap-3 justify-center items-center rounded-md p-2">
              <div className="bg-[#9396B0] rounded-md">
                <p className="text-center p-1 text-sm">Advanced Diploma</p>
              </div>

              <div className="flex">
                <Image
                  className=""
                  src="/right-arrow.png"
                  width={30}
                  height={30}
                ></Image>
              </div>

              <div className="bg-[#9396B0] rounded-md">
                <p className="text-center p-1 text-sm">Top-Up Degree</p>
              </div>
            </div>

            <div className="bg-[#FDD93B] h-16 flex justify-center items-center rounded-md">
              <p className="text-black font-bold text-sm">WORK</p>
            </div>
            <div className="bg-[#FDD93B] h-16 flex justify-center items-center rounded-md p-8 border-l-black border-b-black border-r-black border-2">
              <div className="rounded-md bg-[#11163B]">
                <p className="text-white p-4 text-center text-sm">
                  Skills Certification & Employment Matching
                </p>
              </div>
            </div>
            <div className="bg-[#FDD93B] h-16 flex justify-center items-center rounded-md p-2 border-l-black border-b-black border-r-black border-2">
              <div className="bg-[#11163B] rounded-md">
                <p className="text-white text-center text-sm">
                  Apprenticeship (6-12 months)
                </p>
              </div>

              <div className="flex">
                <Image
                  className=""
                  src="/right-arrow.png"
                  width={30}
                  height={30}
                ></Image>
              </div>

              <div className="bg-[#11163B] rounded-md">
                <p className="text-white text-center text-sm">Employment (24 months)</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="mt-5">
              <span className="text-[#1E66A8] font-bold">Better</span> – Our
              learner acquires 3 years of working experience for 2X higher pay
              on graduation while most conventional university graduates are
              under-employed without relevant in-demand skills{" "}
            </p>
            <p className="mt-5">
              <span className="text-[#8A194F] font-bold">Faster</span> – Our
              learner acquired work ready skills with job placement in just 12
              months while conventional university graduates only start seeking
              employment after 4 years{" "}
            </p>
            <p className="mt-5">
              <span className="text-[#827333] font-bold">Cheaper</span> – Our
              learners could earn while they learn to offset their tuition fees
              before graduation for a debt free degree while conventional
              university graduates incurred tuition expenses without income for
              a higher cost degree
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
