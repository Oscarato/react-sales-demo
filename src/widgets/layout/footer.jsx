import PropTypes from "prop-types";

export function Footer() {

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">

      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "",
  brandLink: "",
  routes: [
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
