export async function registerUser(req, res, next) {
  try {
    console.log(user)
  } catch (err) {
    err.status = 400;
    next(err);
  }
}
