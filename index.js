window.onload = () => {
    let type = "WebGL";
    if (!PIXI.utils.isWebGLSupported()) {
        type = "canvas";
    }
    PIXI.utils.sayHello(type);

    let app = new PIXI.Application({
        width: 700,
        height: 600,
        backgroundColor: 0xaaaaaa,
        antialias: true,
        // transparent: true
    });

    document.body.appendChild(app.view);

    // let texture = PIXI.utils.TextureCache["images/player.png"];
    // let sprite = new PIXI.Sprite(texture);

    // Load images
    PIXI.Loader.shared.add("images/player.png").load(setup);

    function setup() {
        let sprite = new PIXI.Sprite(
            PIXI.Loader.shared.resources["images/player.png"].texture
        );
        app.stage.addChild(sprite);
        sprite.position.set(
            app.view.width / 2 - sprite.width / 2,
            app.view.height - sprite.height / 2
        );
        // sprite.x = app.stage.width;
        // sprite.y = 50;
        sprite.scale.set(.4, .4);
        sprite.anchor.set(.5, .5);
        // setInterval(() => {
        //     sprite.rotation -= 0.01
        // }, 5);
        // sprite.pivot.set()
    }
};
