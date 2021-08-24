const db = require('../dbConfig/init');

class Post {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.pseudonym = data.pseudonym;
        this.text = data.text;
        this.date = data.date;
    }

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`);
                const posts = postsData.rows.map(p => new Post(p));
                resolve(posts);
            } catch (err) {
                reject('Error retrieving posts');
            }
        });
    }

    static findByDateAndId(date, id) {
        return new Promise(async (resolve, rejecy) => {
            try {
                let postData = await db.query(
                    `SELECT title, date, pseudonym, text FROM posts WHERE date = $1 AND id = $2;`,
                    [date, id]
                );
                let post = new Post(postData.row[0]);
                resolve(post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }
}
