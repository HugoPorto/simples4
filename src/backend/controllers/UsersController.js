module.exports = {
  async login (req, res) {

    console.log(req)
    console.log('Teste')
    // try {
    //   const song = await Song.create(req.body)
      res.send('song')
    // } catch (err) {
    //   res.status(500).send({
    //     error: 'an error has occured trying to create the song'
    //   })
    // }
  },
}
