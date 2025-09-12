import React from 'react';

function HeaderSection() {
  return (
    <section id="about" className="d-flex flex-column align-items-center justify-content-center text-center min-vh-100-minus-8rem">
      {/* Profile Info */}
      <div className="d-flex flex-column flex-md-row align-items-center gap-4 gap-md-5">
        <div className="position-relative d-block profile-image-wrapper">
          <div className="position-absolute w-100 h-100 rounded-circle profile-image-primary ring-4 ring-warning shadow-lg"></div>
          <div className="position-absolute w-100 h-100 rounded-circle profile-image-secondary ring-4 ring-warning shadow-lg"></div>
        </div>
        <div className="d-flex flex-column align-items-center align-items-md-start text-center text-md-start">
          <h1 className="text-orange-accent fw-bolder display-4 display-sm-3 display-md-2 lh-1 text-nowrap">
            <span className="position-relative d-inline-block custom-highlight-span">
              Alfonso Martin I. Dela Luna
            </span>
          </h1>
          <p className="text-secondary fw-semibold fs-3 fs-sm-2 fs-md-1 lh-sm">
            Web/Software Developer
          </p>
          <p className="text-secondary fs-6 fs-md-5 fw-normal lh-sm">
            Bagong Pag-asa Quezon City, Philippines
          </p>
          <div className="pt-3">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 pt-2">
              <a
                href="#projects"
                className="btn custom-btn-gradient py-2 px-4 rounded-3 text-white fw-semibold shadow-sm hover-opacity-60"
              >
                View My Work <span className="ms-2">→</span>
              </a>
              <a
                href="/Dela_Luna,_Alfonso_Martin_I.pdf"
                download="DelaLuna_Resume.pdf"
                className="btn custom-btn-gradient py-2 px-4 rounded-3 text-white fw-semibold hover-opacity-60"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 pt-5">
            <SocialIconLink href="https://github.com/AlfonsoDelaLuna" src="./images/Github.png" alt="GitHub"/>
            <SocialIconLink href="https://www.linkedin.com/notifications/?filter=all" src="./images/LinkedIn.png" alt="LinkedIn"/>
            <SocialIconLink href="https://jobseeker.kalibrr.com/candidate/profile" src="./images/kalibrr.png" alt="Kalibrr"/>
            <SocialIconLink href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage" src="/images/indeed.png" alt="Indeed"/>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="w-100 pt-5">
        <h2 className="fs-2 fs-md-1 fw-bold text-orange-accent text-center mb-4">
          Skills
        </h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 gap-md-3 pt-4">
          <SkillItem name="HTML5" image="HTML.png" />
          <SkillItem name="CSS3" image="CSS.png" />
          <SkillItem name="JavaScript" image="JS.png" />
          <SkillItem name="PHP" image="PHP.png" />
          <SkillItem name="MySQL" image="MYSQL.png" />
          <SkillItem name="Java" image="Java.png" />
          <SkillItem name="Python" image="Python.png" />
        </div>
      </div>
    </section>
  );
}

// Sub-component for social links
function SocialIconLink({ href, src, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="d-inline-flex align-items-center justify-content-center p-2 rounded-circle bg-white bg-opacity-10 border border-white border-opacity-25 social-icon-wrapper" // Added class back
      style={{ width: '50px', height: '50px' }} 
    >
      <img src={src} alt={alt} style={{ width: '30px', height: '30px' }} /> {/* Sized the image itself */}
    </a>
  );
}

// Sub-component for individual skills
function SkillItem({ name, image }) {
  return (
    <div className="d-flex flex-column align-items-center gap-2 transition-transform-hover">
      <img
        src={`/images/${image}`}
        alt={name}
        className="skill-image rounded-3"
      />
      <p className="text-light-purple-text fs-6 fs-md-5">{name}</p>
    </div>
  );
}

export default HeaderSection;