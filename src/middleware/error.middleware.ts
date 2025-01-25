import { NextFunction, Request, Response } from 'express'
import { ApiResponse } from '../types/apiResponseType'
export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response<ApiResponse<never>>,
  next: NextFunction
) {
  console.log(err.stack)
  res
    .status(500)
    .json({
      success: false,
      error:
        process.env.NODE_ENV === 'production'
          ? 'Something went wrong'
          : err.message
    })
}
