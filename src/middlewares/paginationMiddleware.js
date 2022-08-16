const DEFAULT_PAGE = 1
const DEFAULT_LIMIT = 20

export const pagginationMiddleware = async (req, res, next) => {
  const { page = DEFAULT_PAGE, limit = DEFAULT_LIMIT } = req.query

  req.internalContext = { page, limit, skip: page * limit }

  next()
}