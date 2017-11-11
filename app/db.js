import Promise from 'bluebird';
import db from 'sqlite';

const dbName = 'DYN_DATA.sqlite';

export async function getWellList(){
    const data = await Promise.resolve()
        .then(() => db.open(dbName))
        .then(() => db.all('SELECT well_id as well_id, count(dyn_id) as count FROM dynamograms group by well_id'))
    return data;
}