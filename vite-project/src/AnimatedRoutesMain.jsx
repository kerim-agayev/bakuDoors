import React, { Suspense } from "react";
const Home = React.lazy(() => import("./pages/mainPages/home/Home"));
const XAcilanDarvaza = React.lazy(() =>
  import("./pages/AutoDarvaza/XAcilanDarvaza")
);
const SaunaBesetka = React.lazy(() =>
  import("./pages/SaunaBesetka/SaunaBesetka")
);
const AutoSuse = React.lazy(() => import("./pages/AutoSuse/AutoSuse"));
const AutoDoner2 = React.lazy(() =>
  import("./pages/AutoFotoselDonerQapi/AutoDoner2")
);
const AutoFotosel2 = React.lazy(() =>
  import("./pages/AutoFotoselDonerQapi/AutoFotosel2")
);
const AutoYarimDaireviQapi2 = React.lazy(() =>
  import("./pages/AutoFotoselDonerQapi/AutoYarimDaireviQapi2")
);
const HermetikXestexanaQapi2 = React.lazy(() =>
  import("./pages/AutoFotoselDonerQapi/HermetikXestexanaQapi2")
);
const AvtomatikDemirDarvaza2 = React.lazy(() =>
  import("./pages/AutoDarvaza/AvtomatikDemirDarvaza2")
);
const DoxsanDereceDarvaza2 = React.lazy(() =>
  import("./pages/AutoDarvaza/DoxsanDereceDarvaza2")
);
const YanaSurusenDarvaza2 = React.lazy(() =>
  import("./pages/AutoDarvaza/YanaSurusenDarvaza2")
);
const About = React.lazy(() => import("./pages/mainPages/about/About"));
const Contact = React.lazy(() => import("./pages/mainPages/contact/Contact"));
const Questions = React.lazy(() =>
  import("./pages/mainPages/questions/Questions")
);
const AutoSeksiyonalQapi = React.lazy(() =>
  import("./pages/AutoSeksiyonalQapi/AutoSeksiyonalQapi")
);
const OurWorks = React.lazy(() =>
  import("./pages/mainPages/ourworks/OurWorks")
);
const ServisQurasdirma = React.lazy(() =>
  import("./pages/ServisQurasdirma/ServisQurasdirma")
);
const QapiServisQurasdirma = React.lazy(() =>
  import("./pages/ServisQurasdirma/QapiServisQurasdirma")
);
const SlaqbaumServisQurasdirma = React.lazy(() =>
  import("./pages/ServisQurasdirma/SlaqbaumServisQurasdirma")
);
const PanoramaUstunluk = React.lazy(() =>
  import("./pages/AutoSuse/PanoramaUstunluk")
);
const AutoJaluzQapi = React.lazy(() =>
  import("./pages/AutoJaluzQapi/AutoJaluzQapi")
);
const AutoJaluzDarvaza = React.lazy(() =>
  import("./pages/AutoJaluzQapi/AutoJaluzDarvaza")
);
const AutoFotoselDonerQapi = React.lazy(() =>
  import("./pages/AutoFotoselDonerQapi/AutoFotoselDonerQapi")
);
const AutoBaryer = React.lazy(() => import("./pages/AutoBaryer/AutoBaryer"));
const AutoDarvaza = React.lazy(() => import("./pages/AutoDarvaza/AutoDarvaza"));
const PergoleTentBar = React.lazy(() =>
  import("./pages/PergoleTent/PergoleTentBar")
);
const PergoleTentWorks = React.lazy(() =>
  import("./pages/PergoleTent/PergoleTentWorks")
);
const YuklemeRampasiBar = React.lazy(() =>
  import("./pages/YuklemeRampasi/YuklemeRampasiBar")
);
const YuklemeRampasiWorks = React.lazy(() =>
  import("./pages/YuklemeRampasi/YuklemeRampasiWorks")
);
const Slaqbaum2 = React.lazy(() => import("./pages/AutoBaryer/Slaqbaum2"));
const Vesor2 = React.lazy(() => import("./pages/AutoBaryer/Vesor2"));
const Sauna2 = React.lazy(() => import("./pages/SaunaBesetka/Sauna2"));
const Besetka2 = React.lazy(() => import("./pages/SaunaBesetka/Besetka2"));
const AutoJaluzQapi2 = React.lazy(() =>
  import("./pages/AutoJaluzQapi/AutoJaluzQapi2")
);
const PergoleTent2 = React.lazy(() =>
  import("./pages/PergoleTent/PergoleTent2")
);
const PanoramaSistem2 = React.lazy(() =>
  import("./pages/AutoSuse/PanoramaSistem2")
);
const YuklemeRampasi2 = React.lazy(() =>
  import("./pages/YuklemeRampasi/YuklemeRampasi2")
);
const AutoSenaye2 = React.lazy(() =>
  import("./pages/AutoSeksiyonalQapi/AutoSenaye2")
);
const AutoQaraj2 = React.lazy(() =>
  import("./pages/AutoSeksiyonalQapi/AutoQaraj2")
);

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar2 from "./components/navbar/Navbar2";
import Spinner from "./components/Spinner";

function AnimatedRoutesMain() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          {/* <Route path="/" element={<Navbar2 />}> */}
            <Route
            path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<Spinner />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<Spinner />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="questions"
              element={
                <Suspense fallback={<Spinner />}>
                  <Questions />
                </Suspense>
              }
            />
            <Route
              path="ourworks"
              element={
                <Suspense fallback={<Spinner />}>
                  <OurWorks />
                </Suspense>
              }
            />
            {/* autoseksiyonalqapi */}
            <Route
              path="autoseksiyonalqapi"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoSeksiyonalQapi />
                </Suspense>
              }
            />
            <Route
              path="autoseksiyonalqapi/autoqaraj"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoQaraj2 />
                </Suspense>
              }
            />
            <Route
              path="autoseksiyonalqapi/autosenaye"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoSenaye2 />
                </Suspense>
              }
            />

            {/* PergoleTent*/}
            <Route
              path="pergoletent"
              element={
                <Suspense fallback={<Spinner />}>
                  <PergoleTentBar />
                </Suspense>
              }
            />
            <Route
              path="pergoletent/pergoletentmain"
              element={
                <Suspense fallback={<Spinner />}>
                  <PergoleTent2 />
                </Suspense>
              }
            />
            <Route
              path="pergoletent/pergoletentourworks"
              element={
                <Suspense fallback={<Spinner />}>
                  <PergoleTentWorks />
                </Suspense>
              }
            />

            {/* servisqurasdirma*/}
            <Route
              path="servisqurasdirma"
              element={
                <Suspense fallback={<Spinner />}>
                  <ServisQurasdirma />
                </Suspense>
              }
            />
            <Route
              path="servisqurasdirma/qapiservisqurasdirma"
              element={
                <Suspense fallback={<Spinner />}>
                  <QapiServisQurasdirma />
                </Suspense>
              }
            />
            <Route
              path="servisqurasdirma/slaqbaumservisqurasdirma"
              element={
                <Suspense fallback={<Spinner />}>
                  <SlaqbaumServisQurasdirma />
                </Suspense>
              }
            />

            {/* saunabesetka*/}

            <Route
              path="saunabesetka"
              element={
                <Suspense fallback={<Spinner />}>
                  <SaunaBesetka />
                </Suspense>
              }
            />
            <Route
              path="saunabesetka/besetka"
              element={
                <Suspense fallback={<Spinner />}>
                  <Besetka2 />
                </Suspense>
              }
            />
            <Route
              path="saunabesetka/sauna"
              element={
                <Suspense fallback={<Spinner />}>
                  <Sauna2 />
                </Suspense>
              }
            />

            {/* autosuse*/}
            <Route
              path="autosuse"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoSuse />
                </Suspense>
              }
            />
            <Route
              path="autosuse/panoramasistem"
              element={
                <Suspense fallback={<Spinner />}>
                  <PanoramaSistem2 />
                </Suspense>
              }
            />
            <Route
              path="autosuse/panoramaustunluk"
              element={
                <Suspense fallback={<Spinner />}>
                  <PanoramaUstunluk />
                </Suspense>
              }
            />

            {/* autojaluz*/}
            <Route
              path="autojaluzqapi"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoJaluzQapi />
                </Suspense>
              }
            />
            <Route
              path="autojaluzqapi/autojaluz"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoJaluzQapi2 />
                </Suspense>
              }
            />
            <Route
              path="autojaluzqapi/autojaluzdarvaza"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoJaluzDarvaza />
                </Suspense>
              }
            />

            {/* autofotoseldonerqapi*/}
            <Route
              path="autofotoseldonerqapi"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoFotoselDonerQapi />
                </Suspense>
              }
            />
            <Route
              path="autofotoseldonerqapi/autodoner"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoDoner2 />
                </Suspense>
              }
            />
            <Route
              path="autofotoseldonerqapi/autofotosel"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoFotosel2 />
                </Suspense>
              }
            />
            <Route
              path="autofotoseldonerqapi/autoyarimdaireviqapi"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoYarimDaireviQapi2 />
                </Suspense>
              }
            />
            <Route
              path="autofotoseldonerqapi/hermetikxestexanaqapi"
              element={
                <Suspense fallback={<Spinner />}>
                  <HermetikXestexanaQapi2 />
                </Suspense>
              }
            />

            {/* autobaryer*/}
            <Route
              path="autobaryer"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoBaryer />
                </Suspense>
              }
            />
            <Route
              path="autobaryer/vesor"
              element={
                <Suspense fallback={<Spinner />}>
                  <Vesor2 />
                </Suspense>
              }
            />
            <Route
              path="autobaryer/slaqbaum"
              element={
                <Suspense fallback={<Spinner />}>
                  <Slaqbaum2 />
                </Suspense>
              }
            />

            {/* autodarvaza*/}
            <Route
              path="autodarvaza"
              element={
                <Suspense fallback={<Spinner />}>
                  <AutoDarvaza />
                </Suspense>
              }
            />
            <Route
              path="autodarvaza/avtomatikdemirdarvaza"
              element={
                <Suspense fallback={<Spinner />}>
                  <AvtomatikDemirDarvaza2 />
                </Suspense>
              }
            />
            <Route
              path="autodarvaza/doxsanderecedarvaza"
              element={
                <Suspense fallback={<Spinner />}>
                  <DoxsanDereceDarvaza2 />
                </Suspense>
              }
            />
            <Route
              path="autodarvaza/xacilandarvaza"
              element={
                <Suspense fallback={<Spinner />}>
                  <XAcilanDarvaza />
                </Suspense>
              }
            />
            <Route
              path="autodarvaza/yanasurusendarvaza"
              element={
                <Suspense fallback={<Spinner />}>
                  <YanaSurusenDarvaza2 />
                </Suspense>
              }
            />

            {/* yuklemeRampasi*/}
            <Route
              path="yuklemerampasi"
              element={
                <Suspense fallback={<Spinner />}>
                  <YuklemeRampasiBar />
                </Suspense>
              }
            />
            <Route
              path="yuklemerampasi/yuklememain"
              element={
                <Suspense fallback={<Spinner />}>
                  <YuklemeRampasi2 />
                </Suspense>
              }
            />
            <Route
              path="yuklemerampasi/yuklemeworks"
              element={
                <Suspense fallback={<Spinner />}>
                  <YuklemeRampasiWorks />
                </Suspense>
              }
            />
          {/* </Route> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutesMain;
