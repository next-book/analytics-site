import { NextApiRequest, NextApiResponse } from 'next';
import Response from 'lib/response';
import getSessionsMetrics, {
  SessionsMetrics,
} from 'lib/dashboard/api/sessions-metrics';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Response<SessionsMetrics>>
) => {
  try {
    const {
      query: { slug, dateStart, dateEnd },
    } = req;
    if (!slug) throw new Error('Slug not provided.');
    if (!dateStart || Array.isArray(dateStart))
      throw new Error('Date start part not provided.');
    if (!dateEnd || Array.isArray(dateEnd))
      throw new Error('Date end part not provided.');
    const dateInterval = {
      start: new Date(dateStart),
      end: new Date(dateEnd),
    };
    const data = await getSessionsMetrics(slug as string, {
      dateInterval,
    });
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
