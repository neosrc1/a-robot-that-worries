WebFont.load({
  google: {
      families: ['monogram']
  },
  active:e=>{


      console.log("font loaded!");
      renderInit();
  }
});
PIXI.settings.FILTER_RESOLUTION = 1
function renderInit() {
  console.log("hoi!")
  const filter = new PIXI.filters.CRTFilter({vignettingAlpha: 0
  });
  let app = new PIXI.Application({ 
    backgroundColor: 0x161616,
    resizeTo: window });
  document.body.appendChild(app.view);
  let object = new PIXI.Graphics();
  const style = new PIXI.TextStyle({
    fontFamily: 'monogram',
    fill: 0x00ff00,
    align: 'center',
    fontSize: 50,
  });
  const text = new PIXI.Text('bloop!', style);
  app.stage.addChild(text)
  
}
