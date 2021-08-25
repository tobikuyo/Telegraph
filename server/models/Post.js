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

    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE id = $1;`, [
                    id
                ]);
                let post = new Post(postData.rows[0]);
                resolve(post);
            } catch (err) {
                reject('Post not found');
            }
        });
    }

    static create(title, text, pseudonym = 'anonymous') {
        return new Promise(async (resolve, reject) => {
            try {
                let postData = await db.query(
                    `INSERT INTO posts (title, text, pseudonym) VALUES ($1, $2, $3) RETURNING *;`,
                    [title, text, pseudonym]
                );
                let newPost = new Post(postData.rows[0]);
                resolve(newPost);
            } catch (err) {
                reject('Error creating new post');
            }
        });
    }
}

module.exports = Post;
