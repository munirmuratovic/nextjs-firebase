export default async function hello(req, res) {
    res.status(200).json({ message: 'Hello world.' });
}