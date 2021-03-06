import Promise from 'bluebird';
import db from 'sqlite';

const dbName = 'DYN_DATA.sqlite';

export async function getWellList() {
    const data = await Promise.resolve()
        .then(() => db.open(dbName))
        .then(() => db.all('SELECT well_id as well_id, count(dyn_id) as count FROM dynamograms group by well_id'))
    return data;
}

export async function getDynamogrammList(well_id) {
    const data = await Promise.resolve()
        .then(() => db.open(dbName))
        .then(() => db.all('SELECT dyn_id, dt FROM dynamograms WHERE well_id = ?', [well_id]))
    return data;
}

export async function getDynamogramm(dyn_id) {
    const data = await Promise.resolve()
        .then(() => db.open(dbName))
        .then(() => db.get('SELECT dyn_id, dt, position_data, load_data FROM dynamograms WHERE dyn_id = ?', [dyn_id]));
    return data;
}

export async function getClassifierData(dyn_id, classifier_id) {
    const data = await Promise.resolve()
        .then(() => db.open(dbName))
        .then(() => db.all('SELECT dyn_classes.class_id, value, class_name from dyn_classes left join dyn_class_dict on dyn_class_dict.class_id = dyn_classes.class_id  where dyn_classes.dyn_id = ? and classifier_id = ?', [dyn_id, classifier_id]));
    return data;
}