export async function registerUser(req, res, next) {
  try {
    throw new Error("encountering an error while registering new user");
  } catch (error) {
    next(error)
  }
}
