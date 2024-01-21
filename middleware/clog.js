//midleware for logging custom colors for type and path
const clog = (req, res, next) => {
  const fgCyan = '\x1b[36m';
  switch (req.method) {
    case 'GET': {
      console.info(`✅ ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    case 'POST': {
      console.info(`🅿️ ${fgCyan}${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(
        `Not GET or POST: 🧡${fgCyan}${req.method} request to ${req.path}`
      );
  }
  next();
};

exports.clog = clog;
