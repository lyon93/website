import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const email = await axios.get(`${process.env.NEXT_PUBLIC_TEMP_MAIL_URL}/generate`, {
      headers: {
        'X-BananaCrumbs-ID': process.env.BANANACRUMBS_ID,
        'X-BananaCrumbs-MFA': process.env.BANANACRUMBS_MFA,
      },
    });

    return res.status(200).json(email.data);
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
