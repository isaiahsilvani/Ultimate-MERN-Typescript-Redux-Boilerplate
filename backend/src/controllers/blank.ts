import  { Request, Response} from 'express'

const postRequest = (req: Request, res: Response ) => {
  console.log('post request hit! Data:  ', req.body.data)
}

const getRequest = (req: Request, res: Response ) => {
  console.log('get request hit!!')
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getRequest,
  postRequest
}