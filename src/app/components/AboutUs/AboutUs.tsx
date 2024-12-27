"use client";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">

      {/* Expertise Section */}
      < section className="expertise" id="services">
        <h2>Our Expertise</h2>
        <div className="tech-icons">
          <div className="tech-icon">
            <div className="img-div">
              <img src="/images/app-development.png" alt="movile-app-development" />
            </div>
            <h3>Mobile Apps Development</h3>
            <p>Android, iOS, cross-platform solutions, The mobile development team of Infinite IT Solutions Nepal has built various apps. We help you build or update and make your web application a mobile experience you can be excited about and that users will love.</p>
          </div>
          <div className="tech-icon">
            <div className="img-div">
              <img src="/images/web-development.png" alt="web-development" />
            </div>
            <h3>Web Development</h3>
            <p>Our web developers can write, well-documented, modular, responsive code, effectively and efficiently in a diverse array of stacks, platforms, and frameworks. Our web developers dedicate themselves to the highest quality engineering.</p>
          </div>
          <div className="tech-icon">
            <div className="img-div">
              <img src="/images/software development.png" alt="software-development" />
            </div>
            <h3>Software Development</h3>
            <p>We offer eCommerce development experience building responsive websites allows us to offer a range of custom web and mobile solutions for online businesses. With the right eCommerce website, we can help you increase leads, conversions, and sales.</p>
          </div>
          <div className="tech-icon">
            <div className="img-div">
              <img src="/images/testing.png" alt="testing" />
            </div>
            <h3>Testing and QA</h3>
            <p>Infinte IT Solutions Nepal's QA experts will help you establish robust testing processes, increase product quality and optimize software development lifecycle. We will ensure your software is secure, reliable, scalable and delivers a seamless customer experience.</p>
          </div>
          <div className="tech-icon">
            <div className="img-div">
              <img src="/images/cloud-deployment.png" alt="cloud deplpoyment" />
            </div>
            <h3>Cloud Deployment</h3>
            <p>We offer full-cycle cloud development services, including cloud infrastructure setup, migration, cloud application development, and cloud platforms.</p>
          </div>
          <div className="tech-icon">
            <div className="img-div">
              <img src="/images/ui-ux.png" alt="ui-ux" />
            </div>
            <h3>UI/UX Design</h3>
            <p>In web design, form and function should be in harmony. We believe in human-centered customer experiences across any ecosystem of digital products being developed, technology transformation or marketing efforts. Simply put, we design & build application interfaces that just work.</p>
          </div>
        </div>
      </section>
    </div >
  );
};

export default AboutUs;
