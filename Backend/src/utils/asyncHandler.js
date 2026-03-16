export function asyncHandler(handle) {
  return (req, res) => {
    try {
      handle(req, res);
    } catch (error) {
      throw error;
    }
  };
}
