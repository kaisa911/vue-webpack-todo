import '../assets/style/footer.styl';

const Footer = {
  data() {
    return {
      author: 'paji'
    };
  },
  render() {
    return (
      <div id="footer">
        <span>written by {this.author}</span>
      </div>
    );
  }
};

export default Footer;
