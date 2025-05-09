import React from "react";
import Layout from "../../components/Layout";
import MetaTagComponent from "../../components/MetaTagComponent";

const Disclaimer = () => {
  return (
    <Layout>
      <MetaTagComponent />
      <section className="banner-section pb-0">
        <div className="row">
          <div className="banner-img-div other-banner-div">
            {/* <img src="/images/banners/blogdetail-banner.jpg" alt="banner-img" /> */}

            <div className="banner-content-div other-banner-content-div">
              <div className="container">
                <h1 className="banner-title">Disclaimer</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="disclaimer-para-div">
        <div className="container">
          <div className="col-lg-9 col-md-12 col-12">
            <p className="para medium-para">
              This website/information is provided to you (the viewer) on an "as
              is" and "where-is" basis, without any warranty.
            </p>

            <p className="para medium-para">
              LC Capital India Private Limited (Lighthouse-Canton) has taken
              reasonable efforts to ensure that all information and materials,
              whether in relation to the products, services, facilities,
              offerings or otherwise (hereinafter "Information") provided as
              part of this website is correct, it does not guarantee the
              accuracy of the Information. Lighthouse-Canton makes no
              representations or warranties as to the completeness or adequacy
              or accuracy of Information and expressly disclaims liability for
              any errors or omissions or delays in updating this information.
              Reasonable precautions have been taken to ensure that Site
              Content, including account information and pricing data, are
              complete and accurate. However, due to the nature of information
              delivery technology and the necessity of using multiple data
              sources, including Third Party Content, we are unable to assure
              the accuracy of the data you access through this Site. Site
              Content is presented only as of the date published or indicated
              and may be superseded by subsequent market events or other
              reasons. Lighthouse-canton has no duty to update this Site or any
              Site Content.
            </p>

            <p className="para medium-para">
              Lighthouse-Canton do not warrant that this site or downloads will
              meet viewer’s needs or expectations, or be uninterrupted, secure
              or error free or that this site, its server or any files available
              for downloading through this site. Lighthouse-canton has no
              responsibility for viruses or any other damage that may be caused
              to the viewer you as a result of using this site.
              Lighthouse-canton disclaims any warranties with respect to any
              results that may be obtained from the use of this site.
            </p>

            <p className="para medium-para">
              Lighthouse-canton also disclaims responsibility for damages which
              third parties may cause to the viewer through the use of this
              Site, whether intentional or unintentional. For example, the
              viewer understands that hackers could breach the security
              procedures, and that Lighthouse-canton will not be responsible for
              any related damages.
            </p>

            <p className="para medium-para">
              The viewer of the site is solely responsible for the means he /she
              uses to access the Site and understand that the hardware,
              software, the Internet, Internet Service Provider, and other third
              parties involved in connecting him/ her to this Site may not
              perform as intended or desired.
            </p>

            <p className="para medium-para mt-5">
              Lighthouse-canton shall not be liable to the viewer for:
            </p>
            <div className="single-disclaimer-para">
              <div>
                <span></span>
              </div>
              <p className="para medium-para">
                any loss of information or interception of information by any
                third party
              </p>
            </div>
            <div className="single-disclaimer-para">
              <div>
                <span></span>
              </div>
              <p className="para medium-para">
                any damages or injuries arising out of or in connection with the
                use of the Website or its non-use including non-availability or
                failure of performance, loss or corruption of data, loss of or
                damage to property (including profit and goodwill), work
                stoppage, computer failure or malfunctioning, or interruption of
                business; error, omission, interruption, deletion, defect, delay
                in operation or transmission, communication line failure or for
                any failure to act upon Instructions or to provide any facility
                for any cause that is beyond control of Lighthouse-canton.
              </p>
            </div>
            <div className="single-disclaimer-para mb-5">
              <div>
                <span></span>
              </div>
              <p className="para medium-para">
                For any computer virus, misuse if any, of any data placed on the
                Internet, by third parties "hacking" or unauthorised access,
                transactions or use of information.
              </p>
            </div>

            <h5 className="section-subtitle">Important: </h5>

            <p className="para medium-para">
              <em>
                These disclaimers, risks and other disclosures must be read in
                conjunction with the information / opinions / views of which
                they form part of.
              </em>
            </p>

            <p className="para medium-para mb-5">
              <em>
                LC Capital India is not an affiliate of Lighthouse Canton Pte
                Ltd (LCPL), Singapore (that holds Capital Markets Services (CMS)
                License from Monetary authority of Singapore). Lighthouse-Canton
                brand and logo are owned by Lighthouse Canton Investment
                Holdings Pte Ltd (LHIC) and have been granted for use to LC
                Capital India and Lighthouse Canton Pte Limited, by means of
                Licensing agreements.
              </em>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
