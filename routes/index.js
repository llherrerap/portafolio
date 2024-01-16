var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(`es/index`, { title: 'Liliana Herrera', lang:'es', mode: true});
});

router.get('/en', (req, res) => {
  res.render(`en/index`, {title: 'Liliana Herrera', lang:'en', mode: false})
})

router.get('/:lang/projects', (req, res) =>{
  const lang = req.params.lang
  console.log(lang)
  if (lang == 'en') {
    res.render('en/projects', {title: 'Liliana Herrera', lang:'en', mode: false})
  } else if (lang=='es'){
    res.render('es/projects', {title: 'Liliana Herrera', lang:'es', mode: true})
  }
})

module.exports = router;
