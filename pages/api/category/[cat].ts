import { NextApiHandler } from 'next';
import categories from '../../../src/newsSources';

const category: NextApiHandler = (req, res) => {
    const { cat } = req.query;

    const catData = categories.find(x => x.slug === cat)

    if (catData) {
        res.status(200).json(catData);
    } else {
        res.status(404).end();
    }
}

export default category;