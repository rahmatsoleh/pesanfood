import '../component/About';

const About = {
  async render() {
    return `
            <about-page></about-page>
        `;
  },

  async afterRender() {
    return;
  },
};

export default About;